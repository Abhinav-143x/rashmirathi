# Deployment Plan

The fastest and safest deployment path is GitHub private repository plus Vercel.

## Recommended Path

1. Create a private GitHub repository.
2. Push the local project to GitHub.
3. Import the repository into Vercel.
4. Use Vercel's default Next.js settings.
5. Deploy the `main` branch.

## Vercel Settings

Use these defaults:

```txt
Framework Preset: Next.js
Build Command: npm run build
Install Command: npm install
Output Directory: .next
Node Version: 20 or 22
```

No environment variables are required right now.

## Why Vercel

- Fastest setup for Next.js.
- Automatic preview deployments for future branches.
- No backend configuration.
- Static JSON content works naturally.
- Easy custom domain later.

## Production Checklist

Before first public deployment:

- Run `npm run build`.
- Check `/` homepage.
- Open every sarga.
- Test search.
- Test page mode.
- Test reel fullscreen.
- Test auto-scroll.
- Test mobile viewport.
- Confirm text and image rights.
- Add a privacy note if analytics or tracking are added later.

## Fastest Current Command Path

After GitHub repo creation:

```bash
git add .
git commit -m "Initial Rashmirathi reader app"
git push -u origin main
```

Then import the repo in Vercel and deploy.

## Android Later

Use one of these paths:

- PWA install first, because it is fastest.
- Capacitor later if Play Store distribution is required.

The app already avoids backend dependencies, so Android conversion should not require a major rewrite.

