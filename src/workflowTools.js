export function cleanTaskDescription(text) {
  if (!text || typeof text !== 'string') {
    return '';
  }

  return text
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => capitalize(line))
    .join('\n');
}

export function suggestLabels(text) {
  const source = String(text || '').toLowerCase();
  const labels = new Set();

  if (source.includes('docs') || source.includes('readme')) {
    labels.add('documentation');
  }

  if (source.includes('api') || source.includes('credits')) {
    labels.add('api');
  }

  if (source.includes('bug') || source.includes('error') || source.includes('failed')) {
    labels.add('bug');
  }

  if (source.includes('setup') || source.includes('install') || source.includes('env')) {
    labels.add('setup');
  }

  if (labels.size === 0) {
    labels.add('workflow');
  }

  return Array.from(labels);
}

export function createChangelogDraft(items) {
  if (!Array.isArray(items) || items.length === 0) {
    return 'No changes recorded.';
  }

  return items
    .map((item) => `- ${capitalize(String(item).trim())}`)
    .join('\n');
}

function capitalize(value) {
  if (!value) {
    return '';
  }

  return value.charAt(0).toUpperCase() + value.slice(1);
}
