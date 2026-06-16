import 'dotenv/config';
import { generateText } from './aiClient.js';
import {
  cleanTaskDescription,
  createChangelogDraft,
  suggestLabels
} from './workflowTools.js';

const roughNote = `
need to update docs maybe make setup clearer
also add env example and explain api credits
probably should make changelog from commit notes too
`;

async function main() {
  const args = process.argv.slice(2);

  if (args.includes('--docs')) {
    const prompt = `Turn these rough project notes into a concise README update:\n${roughNote}`;
    const result = await generateText(prompt);
    console.log(result);
    return;
  }

  console.log('Clean task description:');
  console.log(cleanTaskDescription(roughNote));

  console.log('\nSuggested labels:');
  console.log(suggestLabels(roughNote).join(', '));

  console.log('\nChangelog draft:');
  console.log(createChangelogDraft([
    'added .env example',
    'created documentation helper',
    'added mock mode for local testing'
  ]));
}

main().catch((error) => {
  console.error('Project Toolkit failed:', error.message);
  process.exit(1);
});
