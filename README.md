# Salama-ERP

A modern, open-source ERP system built with Next.js, Drizzle ORM, Vercel Postgres, and custom UI.

## Getting Started

### 1. Install dependencies:
\`\`\`bash
npm install
\`\`\`

### 2. Set up environment variables:
- Copy \`.env.example\` to \`.env.local\`
- Fill in your database and NextAuth secrets

### 3. Set up Tailwind CSS (already configured)
- Edit \`tailwind.config.js\` and \`postcss.config.js\` as needed

### 4. Run locally:
\`\`\`bash
npm run dev
\`\`\`

### 5. Deployment:
- Push to GitHub and connect your repo to Vercel
- Set environment variables in Vercel dashboard

## Tech Stack

- Next.js (React, API routes)
- Drizzle ORM (with Vercel Postgres)
- NextAuth.js (authentication)
- Tailwind CSS (custom UI base)

---

## Structure

- \`/app\` – Next.js App Directory
- \`/db\` – Database schema & migrations
- \`/lib\` – Utilities, Drizzle/NextAuth helpers
- \`/components\` – UI components
- \`/styles\` – Tailwind and custom styles

---

## Next Steps

1. Set up your Vercel Postgres database.
2. Implement authentication.
3. Add your ERP modules (Inventory, Sales, etc.).

---