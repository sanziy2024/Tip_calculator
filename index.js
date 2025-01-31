let Bill = document.getElementById('bill')
let Tip = document.getElementById('tip')
let Total = document.getElementById('total')
let button = document.getElementById('btn')

function tipCalculator(){
    let billAmount = Bill.value;
    let tipPercentage = Tip.value;
    let totalValue = billAmount * (1+ (tipPercentage/100));
    Total.innerText = `Total: ${totalValue.toFixed(1)}`;
}
button.addEventListener('click', tipCalculator)

