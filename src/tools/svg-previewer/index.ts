import { PictureInPicture } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'SVG Previewer',
  path: '/svg-previewer',
  description: 'Preview SVG files',
  keywords: ['svg', 'previewer'],
  component: () => import('./svg-previewer.vue'),
  icon: PictureInPicture,
  createdAt: new Date('2025-12-14'),
  category: 'Images',
});
