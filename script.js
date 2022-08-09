const calculateButton = document.querySelector("button#calculate");
const output = document.querySelector("#output");
const billField = document.querySelector("#bill");
const tipField = document.querySelector("#tip-percent");

calculateButton.addEventListener("click", (event) => {
    // console.log('bill: ',billField.value);
    const bill = parseFloat(billField.value);
    const tipPercent = parseInt(tipField.value);
    const tip = round(bill * tipPercent * 0.01);
    const total = round(bill + tip);

    // output.innerHTML = `A ${tipPercent}% tip on $${bill.toFixed(2)} is $${tip.toFixed(2)}.  <br />Your total is $${total.toFixed(2)}.`;

    output.innerHTML = `A <strong>${tipPercent}% tip</strong> on <strong>${USDformatter.format(bill)}</strong> is <strong>${USDformatter.format(tip)}</strong>.  <br />Your total is <strong>${USDformatter.format(total)}</strong>.`;
    output.classList.add('opaque');
});

billField.addEventListener('input',(event)=>{
    output.classList.remove('opaque');
});
tipField.addEventListener('input',(event)=>{
    output.classList.remove('opaque');
});


const round = (num) => {
    // console.log('num: ',currencyFormatter(num));
    return Math.round(num * 100) / 100;
};
var USDformatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
});

// const currencyFormatter = (input) => {
//     return new Intl.NumberFormat("en", {
//         style: "currency",
//         currency: "USD"
//     }).format(input);
// }
