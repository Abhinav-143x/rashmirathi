# Developer README

This document explains how to work on the Rashmirathi Reader codebase.

## Audience

Developers maintaining the web app, content files, reading modes, and future Android/PWA packaging.

## Local Setup

Install dependencies:

```bash
npm install
```

Run development mode:

```bash
npm run dev
```

For the most reliable local preview, use the production path:

```bash
npm run build
npm run start -- -H 127.0.0.1 -p 3000
```

## Useful Commands

```bash
npm run build
npm run lint
npm run typecheck
npm run import:poem
npm run enrich:content
```

Seed scripts exist for each sarga:

```bash
npm run seed:sarga1
npm run seed:sarga2
npm run seed:sarga3
npm run seed:sarga4
npm run seed:sarga5
npm run seed:sarga6
npm run seed:sarga7
```

## Content Workflow

1. Update source content under `content/`.
2. Run the matching seed or enrichment script.
3. Ensure `public/content/` mirrors browser-readable content.
4. Run `npm run build`.
5. Open the app and check search, page mode, reel mode, and fullscreen reel mode.
6. Update `TRANSLATION_PROGRESS.md`.

## Important Components

- `components/RashmirathiApp.tsx`
  Main client reader app. Owns home screen, search, modes, fullscreen reel controls, localStorage restore, and reading progress.

- `components/ReaderLine.tsx`
  Classic line-by-line reading component.

- `components/MeaningBox.tsx`
  Displays saral arth, English translation, and Roman Hindi. Supports comfortable and compact density.

- `lib/content.ts`
  Server-side content loading for static routes.

- `types/content.ts`
  Shared content contracts.

## Reading Modes

### Line-by-line

Classic scroll view. Best for detailed reading and search jumps.

### Page Mode

Groups poem lines into page-like chunks. Supports left/right swipe on mobile and previous/next controls.

### Reel Mode

Groups one or two poem lines into vertical cards. Supports:

- fullscreen mode
- progress indicator
- auto-scroll timer
- font size control
- meaning density control
- Enter/Space meaning toggle on desktop fullscreen
- up/down swipe on mobile

## LocalStorage

Last-read position is stored per sarga using keys like:

```txt
rashmirathi:last-read:sarga-1
```

The stored value includes mode, line id, page index, reel index, and visible line count.

## Code Style Notes

- Keep UI code simple and explicit.
- Prefer static JSON and client-side state over introducing a backend.
- Keep reading controls accessible through buttons and labels.
- Keep new visual elements consistent with the warm dark Mahabharata/Karna theme.
