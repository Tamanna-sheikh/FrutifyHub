document.addEventListener('DOMContentLoaded', function () {
  const pricePerKg = document.getElementById('price-per-kg');
  const quantityInput = document.getElementById('quantity');
  const totalPriceEl = document.getElementById('total-price');

  function updateTotalPrice() {
    const price = parseFloat(pricePerKg.textContent);
    const quantity = parseInt(quantityInput.value) || 1;
    const total = price * quantity;
    totalPriceEl.textContent = total.toFixed(2);
  }

  quantityInput.addEventListener('input', updateTotalPrice);
});
