//  income input seclect 
const incomeInput =document.getElementById('income-input');

// food input seclect 
const foodInput =document.getElementById('food-input');

// rent input seclect
const rentInput =document.getElementById('rent-input');

// cloths input seclect
const clothInput =document.getElementById('cloth-input');









document.getElementById('calc-button').addEventListener('click', function(){
    const incomeInputNumber =parseInt(incomeInput.value);
    const foodInputNumber =parseInt(foodInput.value);
    const rentInputNumber =parseInt(rentInput.value);
    const clothInputNumber =parseInt(clothInput.value);


    // if(incomeInputNumber > 0){
    //    return alert('Please Enter your amount');
   let expensesAmount = foodInputNumber +rentInputNumber + clothInputNumber;
   console.log(expensesAmount);
    // }

})


