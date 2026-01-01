import { BrandGit } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Gitattributes Generator',
  path: '/gitattributes-generator',
  description: 'Generate .gitattributes from common configuration of https://github.com/alexkaratarakis/gitattributes',
  keywords: ['gitattributes', 'generator'],
  component: () => import('./gitattributes-generator.vue'),
  icon: BrandGit,
  createdAt: new Date('2026-01-01'),
  category: 'Development',
});
