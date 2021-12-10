document.getElementById('loan-form').addEventListener('submit', function(e){
  // show loader 
  document.getElementById('loading').style.display = 'block';
  // hide loader 
  document.getElementById('result').style.display = 'none';

  setTimeout(calculate, 2000);

  e.preventDefault();
});

// calculatResult
function calculate() {
  console.log('calculating...');


  // create var 
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');


  const loanAmount = parseFloat(amount.value);
  const interestRate = parseFloat(interest.value) / 100;
  const periodCovered = parseFloat(years.value) * 12;

  // compute 
  const totalIncome = (loanAmount * interestRate);

  if (isFinite(totalIncome)) {
    totalInterest.value = totalIncome.toFixed(2);
    totalPayment.value = (totalIncome + loanAmount).toFixed(2);
    monthlyPayment.value = ((totalIncome + loanAmount) / periodCovered).toFixed(2);

  // hide loader 
  document.getElementById('loading').style.display = 'none';
  // show loader 
  document.getElementById('result').style.display = 'block';
  } else {
    showError('Please Check Your Numbers');

    document.getElementById('loading').style.display = 'none';
  }
  
};

function showError(error) {
  // create element 
  const errorDiv = document.createElement('div');

  // add class 
  errorDiv.className = 'alert';

  // get element where the div go 
  const container = document.querySelector('.container');
  const header = document.querySelector('.header');

  // append child (makes the error note appears)
  errorDiv.appendChild(document.createTextNode(error));

  // Insert error above heading 
  container.insertBefore(errorDiv, header)

  // clear error 
  setTimeout(clearError, 2000);
}

function clearError(){
  document.querySelector('.alert').remove();
}