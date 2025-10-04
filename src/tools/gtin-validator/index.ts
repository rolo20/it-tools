import { Barcode } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'GTIN Validator',
  path: '/gtin-validator',
  description: 'Validate and display information about GTIN (Global Trade Identifier Number formerly EAN Number), UPC and other product codes formats',
  keywords: ['gtin', 'validator', 'ean', 'trade', 'identifier'],
  component: () => import('./gtin-validator.vue'),
  icon: Barcode,
  createdAt: new Date('2025-10-03'),
  category: 'Barcodes',
});
