document.getElementById('loan-form').addEventListener('submit', calculateResult)

// Claculate Result 

function calculateResult(e){
  // alert('Calculating...')
  let amount = document.getElementById('amount');
  let interest = document.getElementById('interest');
  let years = document.getElementById('year');
  let monthly = document.getElementById('monthly-payment')
  let total = document.getElementById('total-payment')
  let totalInterest = document.getElementById('total-interest')

  const principal = parseFloat(amount.value)
  const calculatedInterest = parseFloat(interest.value) /100 / 12
  const yearsOfPayment = parseFloat(years.value) * 12;

  // Compute monthly payment
  const x = Math.pow(1+calculatedInterest, yearsOfPayment);
  let month = (principal*x*calculatedInterest)/(x-1);

  if(isFinite(month)){
    monthly.value = month.toFixed(2);
    total.value = (month)
  }
  e.preventDefault();
}