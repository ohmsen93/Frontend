// Require and instantiate the classes
import Bank from './Bank.js';
const bankInstance = new Bank(100,0,0);

import Work from './Work.js';
const workInstance = new Work(0,100, bankInstance);

import Laptops from './Laptops.js';
const laptopsInstance = new Laptops('https://hickory-quilled-actress.glitch.me/');

// Load DOM objects

const loadBalance = document.getElementById("balance");
const loadLoanBalance = document.getElementById("loanBalance");
const loadWorkBalance = document.getElementById("workBalance");
const repayLoanBtn = document.getElementById("repayLoanBtn");
const loanBtn = document.getElementById("loanBtn");
const workBtn = document.getElementById("workBtn");
const bankBtn = document.getElementById("bankBtn");
const laptopSelect = document.getElementById("laptopSelect");
const laptopFeatures = document.getElementById("laptopFeatures");
const productImg = document.getElementById("productImg");
const productTitle = document.getElementById("productTitle");
const productDesc = document.getElementById("productDesc");
const productPrice = document.getElementById("productPrice");
const productBtn = document.getElementById("productBtn");


// Here we write the function to populate our html objects with the values from our javascript
function loadPageValues(){
    
    // we access the banking values through the id on the different div's that we set in our dom section
    loadBalance.innerText = bankInstance.getBalance();
    loadLoanBalance.innerText = bankInstance.getLoanBalance();
    loadWorkBalance.innerText = workInstance.getWorkBalance();
    repayLoanBtn.style.display = 'none';


    if(bankInstance.loanBalance < 0){
        repayLoanBtn.style.display = 'block';

    }

    console.log("Script Postinitialization");
}


function loanPrompt(){
    bankInstance.getLoan(bankInstance.getBalance(),parseInt(prompt()));
}

console.log("Script Preinitialization");

loadPageValues();



loanBtn.addEventListener("click", loanPrompt);
workBtn.addEventListener("click", () => workInstance.work(100));
bankBtn.addEventListener("click", () => workInstance.bankTransfer());
repayLoanBtn.addEventListener("click", () => workInstance.loanTransfer());




await laptopsInstance.laptopApi();

let laptopOptions = ``;

laptopsInstance.data.forEach(element => {
    laptopOptions += `<option value='${element.id-1}'>${element.title}</option>`;
});

laptopSelect.innerHTML = laptopOptions;



let features = `<ul>`;

let laptop = laptopsInstance.data[0];
laptop.specs.forEach(element => {
    features +=`<li><p>${element}</p></li>`;
});

productImg.src = laptopsInstance.apiUrl+laptop.image;
productTitle.innerHTML = laptop.title;
productDesc.innerHTML = laptop.description;
productPrice.innerHTML = laptop.price+" DKK";

features += `</ul>`;

console.log(features);

laptopFeatures.innerHTML = features;



laptopSelect.addEventListener("change", (event) => {
    let features = `<ul>`;

    console.log(event.target.value);
    
    let laptop = laptopsInstance.data[event.target.value];
    laptop.specs.forEach(element => {
        features +=`<li><p>${element}</p></li>`;
    });

    productImg.src = laptopsInstance.apiUrl+laptop.image;
    productTitle.innerHTML = laptop.title;
    productDesc.innerHTML = laptop.description;
    productPrice.innerHTML = laptop.price+" DKK";
    
    features += `</ul>`;

    console.log(features);

    laptopFeatures.innerHTML = features;

}, false);

productBtn.addEventListener("click", (event) => {
    let id = laptopSelect.value;

    laptopsInstance.laptopPurchase(id);

});



    





console.log(laptopsInstance.data);