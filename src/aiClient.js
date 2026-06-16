import OpenAI from 'openai';

const mockMode = process.env.MOCK_MODE === 'true';

export async function generateText(input) {
  if (!input || typeof input !== 'string') {
    throw new Error('generateText requires a text input.');
  }

  if (mockMode || !process.env.OPENAI_API_KEY) {
    return mockResponse(input);
  }

  const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
  });

  const response = await client.responses.create({
    model: process.env.AI_MODEL || 'gpt-4.1-mini',
    input
  });

  return response.output_text;
}

function mockResponse(input) {
  const cleaned = input
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 240);

  return `Mock AI response: ${cleaned}`;
}
