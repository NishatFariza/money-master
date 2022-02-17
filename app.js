//  income input seclect 
const incomeInput =document.getElementById('income-input');

// food input seclect 
const foodInput =document.getElementById('food-input');

// rent input seclect
const rentInput =document.getElementById('rent-input');

// cloths input seclect
const clothInput =document.getElementById('cloth-input');

const balanceText =document.getElementById('balance-amount')

// calculate function
function getCalculate(){
    const incomeInputNumber =parseInt(incomeInput.value);
    const foodInputNumber =parseInt(foodInput.value);
    const rentInputNumber =parseInt(rentInput.value);
    const clothInputNumber =parseInt(clothInput.value);

  /*  error handle start */
    if(expensesAmount > incomeInputNumber){
       console.log('Your account does not have this sufficient balance');
    }
  /*  error handle end */
   let expensesAmount = foodInputNumber +rentInputNumber + clothInputNumber;
   document.getElementById('total-expenses').innerText= expensesAmount;

   let balanceAmount = incomeInputNumber - expensesAmount;
   balanceText.innerText= balanceAmount;
}


document.getElementById('calc-button').addEventListener('click', function(){
  getCalculate();
})

 //saving event 
 document.getElementById('save-button').addEventListener('click', function(){
     getSavingAmount();
  
 });



//  save function 
 function getSavingAmount(){
    const saveInput =document.getElementById('save-input');
    const saveInputNumber =parseInt(saveInput.value);
    // console.log(saveInputNumber)
  const incomeInputNumber =parseInt(incomeInput.value);

  const savingPercentage = (saveInputNumber/100) * incomeInputNumber ;
  const savingAmount =document.getElementById('save-amount');
  savingAmount.innerText =savingPercentage;
   
  const remainingBalance = parseInt(balanceText.innerText) - savingPercentage;
    document.getElementById('remaining-amount').innerText =remainingBalance;

 }