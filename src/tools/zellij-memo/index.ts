import { ScreenShare } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Zellij Command Cheatsheet',
  path: '/zellij-memo',
  description: 'Zellij linux command memo',
  keywords: ['terminal', 'linux', 'shell', 'zellij'],
  component: () => import('./zellij-memo.vue'),
  icon: ScreenShare,
  createdAt: new Date('2025-12-17'),
  category: 'Cheatsheets',
});
