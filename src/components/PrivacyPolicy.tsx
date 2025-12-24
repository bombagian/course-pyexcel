import React from 'react'
import { X } from 'lucide-react'

interface PrivacyPolicyProps {
  isOpen: boolean
  onClose: () => void
}

export default function PrivacyPolicy({ isOpen, onClose }: PrivacyPolicyProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/90 backdrop-blur-sm">
      <div className="relative max-w-4xl w-full max-h-[90vh] bg-surface/95 backdrop-blur-xl rounded-2xl border border-border overflow-hidden">
        {/* Header */}
        <div className="sticky top-0 bg-surface/95 backdrop-blur-xl border-b border-border p-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-text">Privacy Policy</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-background/50 transition-colors"
            aria-label="Close privacy policy"
          >
            <X className="w-6 h-6 text-textSecondary" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-88px)]">
          <div className="prose prose-invert max-w-none">
            <p className="text-textSecondary mb-6">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h3 className="text-xl font-bold text-text mb-4">1. Information We Collect</h3>
              <p className="text-textSecondary mb-4">
                We collect information you provide directly to us when you sign up for our Python in Excel program:
              </p>
              <ul className="list-disc list-inside text-textSecondary space-y-2 mb-4">
                <li>Name and email address</li>
                <li>Company name and team size (for corporate inquiries)</li>
                <li>Messages and communications you send us</li>
                <li>Marketing consent preferences</li>
              </ul>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-bold text-text mb-4">2. How We Use Your Information</h3>
              <p className="text-textSecondary mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside text-textSecondary space-y-2 mb-4">
                <li>Process your enrollment and provide our educational services</li>
                <li>Send you program updates, course materials, and important announcements</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send marketing communications (only with your consent)</li>
                <li>Improve our services and develop new offerings</li>
              </ul>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-bold text-text mb-4">3. Data Storage and Security</h3>
              <p className="text-textSecondary mb-4">
                Your data is stored securely using Supabase, a secure cloud database service. We implement
                industry-standard security measures to protect your personal information from unauthorized
                access, disclosure, alteration, or destruction.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-bold text-text mb-4">4. Data Sharing</h3>
              <p className="text-textSecondary mb-4">
                We do not sell your personal information. We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-textSecondary space-y-2 mb-4">
                <li>With service providers who assist us in operating our platform (e.g., Supabase for database hosting)</li>
                <li>When required by law or to protect our rights</li>
                <li>With your explicit consent</li>
              </ul>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-bold text-text mb-4">5. Your Rights</h3>
              <p className="text-textSecondary mb-4">You have the right to:</p>
              <ul className="list-disc list-inside text-textSecondary space-y-2 mb-4">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications at any time</li>
                <li>Withdraw consent for data processing</li>
              </ul>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-bold text-text mb-4">6. Cookies and Tracking</h3>
              <p className="text-textSecondary mb-4">
                We currently do not use cookies or tracking technologies. If this changes in the future,
                we will update this policy and provide appropriate notice.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-bold text-text mb-4">7. Data Retention</h3>
              <p className="text-textSecondary mb-4">
                We retain your personal information for as long as necessary to provide our services and
                comply with legal obligations. You may request deletion of your data at any time.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-bold text-text mb-4">8. Children's Privacy</h3>
              <p className="text-textSecondary mb-4">
                Our services are not directed to individuals under 18. We do not knowingly collect
                personal information from children.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-bold text-text mb-4">9. Changes to This Policy</h3>
              <p className="text-textSecondary mb-4">
                We may update this privacy policy from time to time. We will notify you of any material
                changes by posting the new policy on this page and updating the "Last Updated" date.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-bold text-text mb-4">10. Contact Us</h3>
              <p className="text-textSecondary mb-4">
                If you have any questions about this Privacy Policy or wish to exercise your rights,
                please contact us at:
              </p>
              <p className="text-text">
                <strong>Email:</strong> privacy@pythoninexcel.com
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
