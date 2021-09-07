const apiAllCurrency = ('https://v6.exchangerate-api.com/v6/d5003c17d1570e4b59f84b4a/latest/');

const currencySelectFrom = document.querySelector('.currency__from_select')
const currencySelectTo = document.querySelector('.currency__to_select')
const firstCurrencyInput = document.querySelector('.currency__from_input')
const secondCurrencyInput = document.querySelector('.currency__to_input')

let currency = {};

async function getValueCurrency(currency = 'EUR') {
    try {
        const response = await fetch(`${apiAllCurrency}${currency}`);
        const {conversion_rates} = await response.json();
        addCurrencyName(conversion_rates, currencySelectFrom);
        addCurrencyName(conversion_rates, currencySelectTo)
    } catch (err) {
        console.log(err)
    }
}

function addCurrencyName(iterableObject, select) {
    const { EUR, USD, RUB, UAH, PLN, GBP, CZK } = iterableObject;
    currency = { EUR, USD, RUB, UAH, PLN, GBP, CZK };

    for (let [key, value] of Object.entries(currency)) {
        const options = document.createElement('option');
        options.textContent = key;
        options.value = value;
        select.append(options);
    }
}

function convertCurrency() {
    let coefficient, value;
    if(!firstCurrencyInput.value) return
    if (currencySelectFrom.value > currencySelectTo.value) {
        coefficient = currencySelectFrom.value / currencySelectTo.value
        value = firstCurrencyInput.value / coefficient
        return secondCurrencyInput.value = value.toFixed(2)
    } else {
        coefficient = currencySelectTo.value / currencySelectFrom.value
        value = firstCurrencyInput.value * (Math.floor(coefficient * 100) / 100)
        return secondCurrencyInput.value = value.toFixed(2)
    }
}

function changeCurrencyValue() {
    let valOne = currencySelectFrom.value;
    currencySelectFrom.value = currencySelectTo.value;
    currencySelectTo.value = valOne;
}

(function choiceModal() {
    const btnCurrencyRates = document.querySelector('.btn__currencyRates');
    const btnConvertor = document.querySelector('.btn__convertor');
    const rates = document.querySelector('.rates');
    const converter = document.querySelector('.converter');
    btnCurrencyRates.addEventListener('click', ()=> {
        btnConvertor.classList.remove('active');
        btnCurrencyRates.classList.add('active');
        rates.style.display = 'block';
        converter.style.display = 'none';
    })
    btnConvertor.addEventListener('click', ()=> {
        btnConvertor.classList.add('active');
        btnCurrencyRates.classList.remove('active');
        rates.style.display = 'none';
        converter.style.display = 'flex';
    })
})()

document.querySelector('.exchange').addEventListener('click', () => {
    changeCurrencyValue()
    convertCurrency()
})

currencySelectFrom.addEventListener('change', convertCurrency)
currencySelectTo.addEventListener('change', convertCurrency);
firstCurrencyInput.addEventListener('input', convertCurrency);

export default getValueCurrency();




