# Contributing To Rashmirathi Reader

Thank you for helping improve the Rashmirathi Reader. The best contributions are careful, respectful, and easy to review.

## What You Can Improve

- Saral arth in Hindi.
- English translation.
- Roman Hindi transliteration.
- OCR spelling or punctuation corrections.
- Missing line annotations.
- Reader UI bugs.
- Mobile reading issues.
- Audio timing data later.

## Content Files

The main content files live in:

```txt
content/sarga-1.json
content/sarga-2.json
content/sarga-3.json
content/sarga-4.json
content/sarga-5.json
content/sarga-6.json
content/sarga-7.json
```

Browser-readable copies live in:

```txt
public/content/
```

When changing content, update both locations unless a script is added to sync them automatically.

## Line Format

Each line should follow this shape:

```json
{
  "id": "1-1",
  "text": "Poem line in Hindi",
  "meaning": "Simple Hindi meaning.",
  "english": "English translation.",
  "transliteration": "Roman Hindi transliteration."
}
```

## Meaning Guidelines

- Keep `meaning` simple and clear Hindi.
- Do not over-explain every metaphor unless needed.
- Preserve the emotional force of Dinkar's line.
- Avoid modern slang.
- Keep English faithful, not overly decorative.
- Keep transliteration readable and consistent.

## Pull Request Process

1. Fork the repository.
2. Create a branch:

```bash
git checkout -b improve-sarga-1-meanings
```

3. Edit the relevant JSON file.
4. Run:

```bash
npm install
npm run build
```

5. Open the app locally and check the edited sarga.
6. Submit a pull request with:
   - sarga number
   - line range changed
   - what was improved
   - any uncertainty or source note

## Review Standard

A contribution is easier to merge when it:

- changes a focused line range
- avoids unrelated formatting churn
- keeps JSON valid
- includes both source and public content updates
- explains why the change improves meaning or readability

## Suggested PR Titles

```txt
Improve sarga 2 meanings, lines 40-85
Fix OCR punctuation in sarga 5
Add clearer English for sarga 1 opening lines
```

## Please Avoid

- Rewriting large sections without explanation.
- Adding backend services.
- Adding AI-generated text without manual review.
- Changing the poem text unless correcting a clear OCR issue.

