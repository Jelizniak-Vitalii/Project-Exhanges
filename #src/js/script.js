import getTime from './getTime.js';
import getCourse from './getCurrencyExchange.js';
import getValueCurrency from './currencyConverter.js';


setInterval(() => {
    document.querySelector('.time__date').innerHTML = getTime();
},100)





