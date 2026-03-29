export function formatCurrency(price) {
  return price.toLocaleString('en-IN', {
    style: 'currency',
    currency: 'INR'
  });
}