const form = document.getElementById('payment-form');
const cardTypeSelect = document.getElementById('card-type');
const cardNumberInput = document.getElementById('card-number');
const cardExpirationInput = document.getElementById('card-expiration');
const cardCVVInput = document.getElementById('card-cvv');
const paymentTypeSelect = document.getElementById('payment-type');
const paymentResult = document.getElementById('payment-result');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const cardType = cardTypeSelect.value;
  const cardNumber = cardNumberInput.value;
  const cardExpiration = cardExpirationInput.value;
  const cardCVV = cardCVVInput.value;
  const paymentType = paymentTypeSelect.value;

  const paymentInfo = {
    cardType: cardType,
    cardNumber: cardNumber,
    cardExpiration: cardExpiration,
    cardCVV: cardCVV,
    paymentType: paymentType
  };

  paymentResult.textContent = '¡Pago realizado con éxito!';
});
