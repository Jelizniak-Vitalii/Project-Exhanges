import getTime from './getTime.js';


const courseActual = ('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11');
const courseAllCurrency = ('https://v6.exchangerate-api.com/v6/d5003c17d1570e4b59f84b4a/latest/');

let arrayBuy = [];
let arraySale = [];
let arrayCurrency = [];

window.onload = () => {
    getCourse()
    getValueCurrency()
}

setInterval(function(){
    document.querySelector('.header-time__actual').innerHTML = getTime();
},100)

// Start Board Currency

async function getCourse(){
    try{
        let response = await fetch(courseActual);
        let  data = await response.json();
        return getInfo(data.splice(0,3));
    }catch(err){
        console.log(err)
    }
}

function getInfo (val){
    let firstCurrency = document.querySelectorAll('.currency-buy');
    let secondCurrency = document.querySelectorAll('.currency-sale');
    val.forEach(el=>{
        arrayCurrency.push(el.ccy);
        arrayBuy.push(el.buy);
        arraySale.push(el.sale);
    
        addNameCurrency(arrayCurrency);
        showCurrency(arrayBuy,firstCurrency);
        showCurrency(arraySale,secondCurrency);
    })  
}

function addNameCurrency (val){
    let nameValue = document.querySelectorAll('.rates-currency__title')
    for(let i = 0; i < val.length; i++){
        if(val[i] === 'RUR'){
            val[i] = 'RUB'
        }
        nameValue[i].textContent = (val[i]+'/UAH')
    }
}

function showCurrency (arr,currency){
    for(let i = 0; i < arr.length; i++){
        let valFixNumber = parseFloat(arr[i]).toFixed(2);
        currency[i].textContent = valFixNumber;
    }
}
// End Board Currency


// Start Converter


let firstSelect = document.querySelector('.currency-base__select')
let secondSelect = document.querySelector('.currency-to-change__select')
let firstCurrencyInput = document.querySelector('.currency-base__input')
let secondCurrencyInput = document.querySelector('.currency-to-change__input')

async function getValueCurrency (currency = 'EUR'){
    try{
        let response = await fetch(`${courseAllCurrency}${currency}`);
        let data = await response.json();
        console.log(data.conversion_rates)
        addCurrencyValue(data.conversion_rates,firstSelect);
        addCurrencyValue(data.conversion_rates,secondSelect)
    }catch(err){
        console.log(err)
    }
}


let a = document.createElement('input');
let b = document.createElement('input');

function addCurrencyValue(arr,select){
    
    for(let key in arr){
        var options = document.createElement('option');
        options.textContent = key;  
        options.value = key
        select.append(options)
    }
        watchChange(arr,firstSelect,a)
        watchChange(arr,secondSelect,b)
}

function watchChange (arr,select,inputSelect){
    select.addEventListener('change',()=>{
        for(let [key, value] of Object.entries(arr)){
            if(key === select.value){
                inputSelect.value = value
            }
        }
    })
}

document.querySelector('.converter-button').addEventListener('click',()=>{
    if(a.value.length > 0 && b.value.length > 0){
        if(firstCurrencyInput.value < 1){
            console.log('Ведите сумум для обмена')
            firstCurrencyInput.className = 'error'
            firstSelect.className = 'first-currency__select'
            secondSelect.className ='second-currency__select'
            
        }else{
            firstCurrencyInput.className = 'first-currency__input'
            console.log(a.value)
            if(a.value > b.value){
                let coefficient = a.value / b.value
                let e = firstCurrencyInput.value / coefficient
                secondCurrencyInput.value = e.toFixed(2)
               
            }else{
                let coefficient = b.value / a.value
                let e = firstCurrencyInput.value * (Math.floor(coefficient * 100) / 100)
                secondCurrencyInput.value = e  
            }
        }
        
    }else{
        console.log('Выберите валюту')
        firstSelect.className = 'error'
        secondSelect.className ='error'
    }
})

// End Converter




