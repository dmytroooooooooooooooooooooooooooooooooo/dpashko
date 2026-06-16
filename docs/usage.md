# Usage Guide

Project Toolkit can be used as a small local helper for turning rough project material into cleaner working text.

## Local Mock Mode

The repository uses mock mode by default. This lets the project run without spending API credits.

```bash
npm run start
```

Mock mode is controlled by the `.env` file:

```bash
MOCK_MODE=true
```

## API Mode

To use real API calls, add an API key to `.env` and disable mock mode:

```bash
OPENAI_API_KEY=your_key_here
MOCK_MODE=false
```

Then run:

```bash
npm run docs
```

## Example Uses

The project can be extended to support:

- README drafting
- Issue cleanup
- Changelog generation
- Label suggestions
- Internal documentation summaries
- Project note cleanup
