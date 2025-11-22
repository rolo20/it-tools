import { Braces } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'TOON to JSON',
  path: '/toon-to-json',
  description: 'Convert TOON representation to JSON object for LLM usage',
  keywords: ['toon', 'llm', 'gpt', 'json'],
  component: () => import('./toon-to-json.vue'),
  icon: Braces,
  createdAt: new Date('2025-11-22'),
  category: 'Text',
});
