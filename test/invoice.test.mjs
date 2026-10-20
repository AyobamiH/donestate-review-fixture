import assert from 'node:assert/strict';
import { test } from 'node:test';
import { readFile } from 'node:fs/promises';
import { invoiceTotal } from '../src/invoice.mjs';

test('adds quantities and currency amounts', () => assert.equal(invoiceTotal([{ unitPrice: 20, quantity: 2 }, { unitPrice: 5, quantity: 3 }]), 55));
test('handles cents and zero-priced items', () => assert.equal(invoiceTotal([{ unitPrice: 0.1, quantity: 3 }, { unitPrice: 0, quantity: 2 }]), 0.3));
for (const items of [null, [], [{ unitPrice: -1, quantity: 1 }], [{ unitPrice: Infinity, quantity: 1 }], [{ unitPrice: 1, quantity: 0 }], [{ unitPrice: 1, quantity: 1.5 }]]) test(`rejects invalid items ${JSON.stringify(items)}`, () => assert.throws(() => invoiceTotal(items), TypeError));
test('stored sample total matches its line items', async () => {
  const invoice = JSON.parse(await readFile(new URL('../fixtures/invoice.json', import.meta.url), 'utf8'));
  assert.equal(invoice.total, invoiceTotal(invoice.items));
});
