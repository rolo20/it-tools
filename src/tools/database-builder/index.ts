import { Database } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Database Creation Builder',
  path: '/database-builder',
  description: 'Build SQL CREATE DATABASE queries for various databases',
  keywords: ['database', 'create', 'ddl', 'builder', 'mysql', 'mongodb', 'sqlserver', 'sqlite', 'postgresql'],
  component: () => import('./database-builder.vue'),
  icon: Database,
  createdAt: new Date('2026-01-02'),
  category: 'Development',
});
