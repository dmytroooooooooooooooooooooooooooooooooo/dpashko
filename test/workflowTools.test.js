import test from 'node:test';
import assert from 'node:assert/strict';

import {
  cleanTaskDescription,
  createChangelogDraft,
  suggestLabels
} from '../src/workflowTools.js';

test('cleanTaskDescription trims and formats notes', () => {
  const result = cleanTaskDescription('  update docs\n\n add env example ');
  assert.equal(result, 'Update docs\nAdd env example');
});

test('suggestLabels detects documentation and setup labels', () => {
  const result = suggestLabels('update README and setup env example');
  assert.deepEqual(result, ['documentation', 'setup']);
});

test('createChangelogDraft creates a markdown list', () => {
  const result = createChangelogDraft(['added docs', 'fixed setup']);
  assert.equal(result, '- Added docs\n- Fixed setup');
});
