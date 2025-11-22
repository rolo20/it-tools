import { Braces } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'JSON to TOON',
  path: '/json-to-toon',
  description: 'Convert JSON object to TOON representation for LLM/GPT usage',
  keywords: ['json', 'llm', 'gpt', 'toon'],
  component: () => import('./json-to-toon.vue'),
  icon: Braces,
  createdAt: new Date('2025-11-22'),
  category: 'Text',
});
