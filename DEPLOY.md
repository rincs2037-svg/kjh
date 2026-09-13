# Cryptlab deployment guide

Cryptlab is a static Vite + React site and can be deployed directly to Vercel, Netlify, Cloudflare Pages, or any host that serves static files.

## Option 1: Vercel dashboard

1. Unzip `cryptlab-vercel.zip`.
2. Import the extracted project into a GitHub repository, or upload the project through your preferred Vercel workflow.
3. In Vercel, use these settings:
   - **Framework preset:** Vite
   - **Build command:** `pnpm run build:vercel`
   - **Output directory:** `dist/public`
   - **Install command:** `pnpm install`
4. Deploy. The included `vercel.json` already contains the build and output settings.

## Option 2: Vercel CLI

From the extracted project directory:

```bash
pnpm install
pnpm run check
pnpm run build:vercel
npx vercel --prod
```

## Other static hosts

Run the following locally:

```bash
pnpm install
pnpm run build:vercel
```

Upload the contents of `dist/public` to the host. For this one-page site, no server runtime or database is required for the current front-end experience.

## Important form note

The intake form currently validates the fields and displays a confirmation state in the browser, but it does **not** transmit or store submissions. Before using the site for real case intake, connect the form to a secure backend, CRM, or private email workflow. Do not collect seed phrases, private keys, wallet passwords, or other wallet credentials.

## Verification

The project has been checked with:

```bash
pnpm check
pnpm build
```
