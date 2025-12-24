# Python in Excel - Landing Page

A modern, minimalistic landing page for a blended learning program that combines online resources with weekly in-person sessions.

## Features

- 🎨 **Stunning Design**: Dark theme with vibrant gradients and smooth animations
- 📱 **Fully Responsive**: Optimized for mobile, tablet, and desktop
- 🎯 **Target Personas**: Detailed profiles for Data Analysts, Finance Professionals, and Business Managers
- 📧 **Lead Collection**: Email signup forms with Supabase integration
- 🏢 **Corporate Section**: Dedicated enterprise training inquiry form
- ⚡ **Performance**: Built with Vite and React for optimal speed

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Database**: Supabase (PostgreSQL)
- **Build Tool**: Vite

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Supabase

1. Create a new project at [supabase.com](https://supabase.com)
2. Go to the SQL Editor and run the contents of `supabase-schema.sql`
3. Get your project URL and anon key from Settings > API

### 3. Configure Environment Variables

Create a `.env` file in the root directory:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. Run Development Server

```bash
npm run dev
```

### 5. Build for Production

```bash
npm run build
```

## Database Schema

The `leads` table stores all signup information:

| Column | Type | Description |
|--------|------|-------------|
| id | UUID | Primary key |
| name | TEXT | User's full name |
| email | TEXT | Email address |
| interest_type | TEXT | 'individual' or 'corporate' |
| company_name | TEXT | Company name (corporate only) |
| team_size | TEXT | Team size (corporate only) |
| message | TEXT | Additional message |
| consent | BOOLEAN | Privacy consent |
| created_at | TIMESTAMP | Record creation time |

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Netlify

1. Push your code to GitHub
2. Import the repository in Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Add environment variables
6. Deploy!

## Local Development Without Supabase

The app will work without Supabase configured - leads will be stored in localStorage instead. This is useful for development and testing.

## License

MIT License - feel free to use this for your own projects!
