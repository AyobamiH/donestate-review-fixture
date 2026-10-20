export function invoiceTotal(items) {
  if (!Array.isArray(items) || items.length === 0) throw new TypeError('items must be a non-empty array');
  let cents = 0;
  for (const item of items) {
    if (!item || !Number.isFinite(item.unitPrice) || item.unitPrice < 0 || !Number.isInteger(item.quantity) || item.quantity < 1) throw new TypeError('invalid invoice item');
    cents += Math.round(item.unitPrice * 100) * item.quantity;
  }
  if (!Number.isSafeInteger(cents)) throw new RangeError('invoice total exceeds safe range');
  return cents / 100;
}
