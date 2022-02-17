const incomeInput =document.getElementById('income-input');
const foodInput =document.getElementById('food-input');
const rentInput =document.getElementById('rent-input');
const clothInput =document.getElementById('cloth-input');
const balanceText =document.getElementById('balance-amount')


// calculate function
function getCalculate(){
    const incomeInputNumber =parseInt(incomeInput.value);
    const foodInputNumber =parseInt(foodInput.value);
    const rentInputNumber =parseInt(rentInput.value);
    const clothInputNumber =parseInt(clothInput.value);

    let expensesAmount = foodInputNumber +rentInputNumber + clothInputNumber;

   if(isNaN(incomeInput.value) == false && isNaN(foodInput.value) == false && isNaN(rentInput.value) == false && isNaN(clothInput.value) == false ){
       if(foodInput.value >=0 && rentInput.value >=0 && clothInput.value>=0 ){
        if(expensesAmount < incomeInputNumber ){
           
        document.getElementById('total-expenses').innerText= expensesAmount;
     
        let balanceAmount = incomeInputNumber - expensesAmount;
        balanceText.innerText= balanceAmount;
        }
        else{
            alert('Your expenses more then total income');
            removeValue()
        }
       }
       else{
           alert('Wrong input! Please enter positive value');
           removeValue()
       }
   }
   else{
       alert('Wrong input! Please enter number');
       removeValue();
   }  

};

//  save function 
 function getSavingAmount(){
    const saveInput =document.getElementById('save-input');
    const saveInputNumber =parseInt(saveInput.value);
    // console.log(saveInputNumber)
  const incomeInputNumber =parseInt(incomeInput.value);
  const savingPercentage = (saveInputNumber/100) * incomeInputNumber ;

  if(isNaN(saveInput.value) ==false){
    if(saveInputNumber >=0 ){
        if(savingPercentage < parseInt(balanceText.innerText) ){
            const savingAmount =document.getElementById('save-amount');
        savingAmount.innerText =savingPercentage;
     
      const remainingBalance = parseInt(balanceText.innerText) - savingPercentage;
      document.getElementById('remaining-amount').innerText =remainingBalance;
      incomeInput.value='';
      saveInput.value='';
        }
        else{
            alert('Your saving amount more then your available balance');
            incomeInput.value='';
         saveInput.value='';
        }

    }
    else{
        alert('Please! Enter positive value');
        incomeInput.value='';
       saveInput.value='';
    }
      
  }
  else{
      alert('Wrong input! Please Enter number');
      incomeInput.value='';
      saveInput.value='';
  }
  
 }

 function savingErrorHandle(){
    const incomeInputNumber =parseInt(incomeInput.value);
 }

 function removeValue(){
    foodInput.value="";
    rentInput.value="";
    clothInput.value="";
}

 // income event 
document.getElementById('calc-button').addEventListener('click', function(){
        getCalculate();
        removeValue()
    });
    
 //saving event 
document.getElementById('save-button').addEventListener('click', function(){
   getSavingAmount();
        
      
});