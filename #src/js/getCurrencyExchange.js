const courseActual = ('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11');

let priceBuy = [];
let priceSale = [];
let currencyName = [];

async function getCourse() {
    try {
        let response = await fetch(courseActual);
        let data = await response.json();
        getInfo(data.splice(0,3))
    } catch(err) {
        console.log(err)
    }
}

function getInfo (value) {
    let firstCurrency = document.querySelectorAll('.currency-buy');
    let secondCurrency = document.querySelectorAll('.currency-sale');
    value.forEach(item => {
        currencyName.push(item.ccy);
        priceBuy.push(item.buy);
        priceSale.push(item.sale);
    })
    addCurrencyName(currencyName);
    printCurrency(priceBuy,firstCurrency);
    printCurrency(priceSale,secondCurrency);
}

function addCurrencyName (val) {
    let nameValue = document.querySelectorAll('.currency__title')
    for(let i = 0; i < val.length; i++) {
        if(val[i] === 'RUR') {
            val[i] = 'RUB'
        }
        nameValue[i].textContent = (val[i]+'/UAH')
    }
}

function printCurrency (arr,currency) {
    for(let i = 0; i < arr.length; i++) {
        let valFixNumber = parseFloat(arr[i]).toFixed(2);
        currency[i].textContent = valFixNumber;
    }
}

export default getCourse();


