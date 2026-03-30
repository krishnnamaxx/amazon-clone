export function formatCurrency(price) {
  return (price/100).toLocaleString('en-IN', {
    style: 'currency',
    currency: 'INR'
  });
}
