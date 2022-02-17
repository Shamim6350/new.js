

// event handler for calculate button
document.getElementById('calculate-btn').addEventListener('click', function () {
    //get capital income
    const incomeValue = document.getElementById('income');
    const getIncomeValue = incomeValue.value;

    //check validation, 
    if (isNaN(getIncomeValue) || getIncomeValue < 0) {
        alert('please, give only number');
    }
    else {

        //Expenses Value
        const foodValue = document.getElementById('food').value;
        const rentValue = document.getElementById('rent').value;
        const clothesValue = document.getElementById('cloth').value;

        //total expenses 
        const totalExpensesValue = parseInt(foodValue) + parseInt(rentValue) + parseInt(clothesValue);
        const updateTotalExpensesValue = document.getElementById('total-expense');
        updateTotalExpensesValue.innerText = totalExpensesValue;


        //calculate balance
        const totalBalanceCalc = parseInt(getIncomeValue) - totalExpensesValue;
        const totalBalanceUpdate = document.getElementById('total-balance');
        totalBalanceUpdate.innerText = totalBalanceCalc;

        //validation, totalExpensesValue not more than getIncomeValue
        validation(getIncomeValue < totalExpensesValue, true);
    }
})

// validation
function validation(amount, isEqual) {
    if (amount && isEqual == true) {
        alert('your have spend money more than your income');
    }
    else if (amount && isEqual == false) {
        alert("you don't have enough money to saving");

    }
}


// event handler for save button
document.getElementById('save-btn').addEventListener('click', function () {

    //calculate saving amount
    const incomeValue = document.getElementById('income');
    const getIncomeValue = incomeValue.value;

    const savingValue = document.getElementById('saving').value;
    const savingPercentage = (getIncomeValue * parseInt(savingValue) / 100)

    // update saving amount
    const savingAmount = document.getElementById('saving-amount');
    savingAmount.innerText = savingPercentage
    const totalBalance = document.getElementById('total-balance').innerText

    //validation, savingAmount not more than totalBalance
    validation(savingAmount.innerText > totalBalance, false);

    //update remaining balance
    const remainingBalance = totalBalance - savingAmount.innerText
    const remainBalance = document.getElementById('remain-balance');
    remainBalance.innerText = remainingBalance
})