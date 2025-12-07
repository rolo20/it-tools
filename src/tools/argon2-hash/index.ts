import { EyeOff } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Argon2 Hasher',
  path: '/argon2-hash',
  description: 'Compute Argon2 hashes with parameters',
  keywords: ['argon2', 'argon2i', 'argon2d', 'argon2id', 'hash'],
  component: () => import('./argon2-hash.vue'),
  icon: EyeOff,
  createdAt: new Date('2025-12-07'),
  category: 'Crypto',
});
