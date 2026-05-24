# Rashmirathi Reader

A clean, mobile-friendly reading app for *Rashmirathi* by Ramdhari Singh Dinkar.

The app focuses on a calm Hindi reading experience with chapter-wise reading, line-by-line meanings, English translations, Roman Hindi transliteration, reel-style reading, page-style reading, and local last-read restore.

## Live Site

Production app: https://rashmirathi.vercel.app

## Features

- Seven sargas of *Rashmirathi* stored as static JSON.
- Three reading modes:
  - `पंक्ति-दर-पंक्ति पाठ` for classic line-by-line reading.
  - `पृष्ठ पलटकर पाठ` for book-style grouped pages.
  - `रील पाठ` for immersive vertical verse cards.
- Fullscreen reel mode.
- Reel auto-scroll with configurable seconds.
- Keyboard meaning toggle in fullscreen reel mode with `Enter` or `Space`.
- Font size and meaning density controls.
- Per-sarga last-read position saved in `localStorage`.
- Search across poem text, meanings, English, and transliteration.
- No backend, authentication, database, or AI dependency.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Static JSON content
- HTML5 audio-ready structure
- Vercel-ready deployment

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```txt
http://127.0.0.1:3000
```

Build for production:

```bash
npm run build
```

Run the production build locally:

```bash
npm run start -- -H 127.0.0.1 -p 3000
```

## Project Structure

```txt
app/                 Next.js routes and global styles
components/          Reader UI components
content/             Source JSON content
public/content/      Browser-fetchable JSON content
public/images/       Static visual assets
lib/                 Server-side content helpers
scripts/             Import and annotation scripts
types/               Shared TypeScript content types
docs/                Development and deployment docs
```

## Content Format

Each sarga JSON file contains sections and lines:

```json
{
  "slug": "sarga-1",
  "title": "प्रथम सर्ग",
  "audio": "/audio/sarga-1.mp3",
  "sections": [
    {
      "id": 1,
      "lines": [
        {
          "id": "1-1",
          "text": "जय हो जग में जले जहाँ भी, नमन पुनीत अनल को,",
          "meaning": "सरल हिंदी अर्थ",
          "english": "English translation",
          "transliteration": "Roman Hindi"
        }
      ]
    }
  ]
}
```

## Documentation

- [Developer README](docs/DEVELOPMENT.md)
- [Deployment Plan](docs/DEPLOYMENT.md)
- [Improvement Roadmap](docs/ROADMAP.md)
- [Contribution Guide](CONTRIBUTING.md)

## Contributing

Contributions are welcome for saral arth, English translation, Roman Hindi transliteration, OCR fixes, and reader UI improvements.

Start with [CONTRIBUTING.md](CONTRIBUTING.md). For content improvements, keep pull requests focused by sarga and line range.

## License And Text Rights

Before redistributing text, translations, annotations, or images, confirm that you have the rights required for your intended use.
