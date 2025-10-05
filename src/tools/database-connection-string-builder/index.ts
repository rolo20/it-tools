import { Database } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Database Connection String Builder',
  path: '/database-connection-string-builder',
  description: 'Build connection string for common database',
  keywords: ['database', 'connection', 'builder', 'mysql', 'mongodb', 'sqlserver', 'sqlite', 'postgresql'],
  component: () => import('./database-connection-string-builder.vue'),
  icon: Database,
  createdAt: new Date('2025-10-05'),
  category: 'Development',
});
