import { CreditCard } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Credit Card Number Generator',
  path: '/credit-card-generator',
  description: 'Generate Random Credit Card Number',
  keywords: ['credit', 'card', 'generator'],
  component: () => import('./credit-card-generator.vue'),
  icon: CreditCard,
  createdAt: new Date('2025-10-03'),
  category: 'Data',
});
