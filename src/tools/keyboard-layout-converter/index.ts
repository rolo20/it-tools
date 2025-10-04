import { Keyboard } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Keyboard Layout Converter',
  path: '/keyboard-layout-converter',
  description: 'Convert keys sequence from one keyboard layout to another',
  keywords: ['keyboard', 'layout', 'converter'],
  component: () => import('./keyboard-layout-converter.vue'),
  icon: Keyboard,
  createdAt: new Date('2025-10-03'),
  category: 'Text',
});
