import { Database } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Database Table Generator',
  path: '/database-table-generator',
  description: 'Generate SQL CREATE TABLE for common databases',
  keywords: ['database', 'table', 'generator', 'mysql', 'mongodb', 'sqlserver', 'sqlite', 'postgresql'],
  component: () => import('./database-table-generator.vue'),
  icon: Database,
  createdAt: new Date('2025-12-17'),
  category: 'Development',
});
