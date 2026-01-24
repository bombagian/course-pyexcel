import "jsr:@supabase/functions-js/edge-runtime.d.ts"

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY")

// Webhook payload type from Supabase Database Webhooks
interface WebhookPayload {
  type: "INSERT" | "UPDATE" | "DELETE"
  table: string
  record: {
    id: string
    name: string
    email: string
    interest_type: "individual" | "corporate"
    company_name?: string
    consent: boolean
    created_at: string
  }
  schema: string
  old_record: null | Record<string, unknown>
}

Deno.serve(async (req) => {
  // Only allow POST requests
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 })
  }

  try {
    const payload: WebhookPayload = await req.json()

    // Validate this is an INSERT on the leads table
    if (payload.type !== "INSERT" || payload.table !== "leads") {
      return new Response("Ignored: not a leads insert", { status: 200 })
    }

    const { name, email, interest_type } = payload.record

    // Don't send if no email
    if (!email) {
      return new Response("No email provided", { status: 400 })
    }

    // Build the email HTML
    const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
    <h1 style="color: white; margin: 0; font-size: 24px;">Welcome to Python in Excel!</h1>
  </div>

  <div style="background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 10px 10px;">
    <p style="font-size: 16px;">Hi ${name || "there"},</p>

    <p>Thank you for joining the <strong>Python in Excel</strong> waitlist! We're excited to have you on board.</p>

    <p>You've signed up for: <strong>${interest_type === "corporate" ? "Team Training" : "Individual Learning"}</strong></p>

    <div style="background: white; border-left: 4px solid #667eea; padding: 15px; margin: 20px 0;">
      <p style="margin: 0;"><strong>What happens next?</strong></p>
      <ul style="margin: 10px 0 0 0; padding-left: 20px;">
        <li>We'll notify you as soon as enrollment opens</li>
        <li>You'll receive early access and special pricing</li>
        <li>We'll send you free resources to get started</li>
      </ul>
    </div>

    <p>In the meantime, feel free to reply to this email if you have any questions!</p>

    <p style="margin-top: 30px;">
      Best regards,<br>
      <strong>The Python in Excel Team</strong>
    </p>
  </div>

  <div style="text-align: center; padding: 20px; color: #6b7280; font-size: 12px;">
    <p>You're receiving this because you signed up at our website.</p>
  </div>
</body>
</html>
`

    // Send email via Resend
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Python in Excel <onboarding@resend.dev>", // Change this to your verified domain
        to: [email],
        subject: "Welcome to Python in Excel! 🐍📊",
        html: emailHtml,
      }),
    })

    if (!res.ok) {
      const error = await res.text()
      console.error("Resend API error:", error)
      return new Response(`Failed to send email: ${error}`, { status: 500 })
    }

    const data = await res.json()
    console.log("Email sent successfully:", data)

    return new Response(JSON.stringify({ success: true, id: data.id }), {
      headers: { "Content-Type": "application/json" },
    })
  } catch (error) {
    console.error("Error processing webhook:", error)
    return new Response(`Error: ${error.message}`, { status: 500 })
  }
})
