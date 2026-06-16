# Project Toolkit

A lightweight experimental toolkit for organizing project notes, cleaning task descriptions, and generating simple documentation drafts with API-based assistance.

## Overview

Project Toolkit is a small Node.js project for testing AI-assisted workflow automation. It takes rough text input, such as project notes, issue descriptions, changelog fragments, or internal documentation drafts, and turns it into cleaner structured output.

The repository is intentionally minimal. It is designed as a practical base for experiments with API credits, prompt testing, documentation helpers, and small internal tools.

## Features

- Clean task descriptions from rough notes
- Generate README-style project summaries
- Draft changelog entries from commit notes
- Suggest labels for issues or tasks
- Run locally from the command line
- Store reusable prompts in one place
- Keep examples and documentation separated from source code

## Installation

```bash
git clone https://github.com/username/project-toolkit.git
cd project-toolkit
npm install
```

Create a local environment file:

```bash
cp .env.example .env
```

Add your API key to `.env`.

## Usage

Run the sample command:

```bash
npm run start
```

Run the documentation helper:

```bash
npm run docs
```

Run tests:

```bash
npm test
```

## API Credit Usage

API credits are used when the project sends text to an AI model and receives generated output. In this project, credits would be used for summarizing notes, improving task descriptions, drafting README sections, creating changelog entries, and testing prompt behavior during development.

The example code includes a local mock mode so the project can be tested without spending credits.

## Project Structure

```text
.
├── docs/
│   └── usage.md
├── examples/
│   └── rough-notes.txt
├── prompts/
│   └── documentation.md
├── src/
│   ├── aiClient.js
│   ├── index.js
│   └── workflowTools.js
├── test/
│   └── workflowTools.test.js
├── .env.example
├── .gitignore
├── LICENSE
├── package.json
└── README.md
```

## License

MIT
