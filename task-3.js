/*

Task-3:
Your task is to calculate the total budget required to buy electronics:

    laptop = 35000 tk
    tablet = 15000 tk
    mobile = 20000 tk
Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.

*/

function calculateElectronicsBudget(Qty1, Qty2, Qty3) {
    const laptopPrice = 35000 * Qty1;
    const tabletPrice = 15000 * Qty2;
    const mobilePrice = 20000 * Qty3;
    const totalPrice = laptopPrice + tabletPrice + mobilePrice;
    return totalPrice;
}

const result = calculateElectronicsBudget(1, 1, 1);
console.log('Total Money Required: ',result);