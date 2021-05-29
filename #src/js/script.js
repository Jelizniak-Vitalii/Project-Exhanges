const courseActual = ('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11');
let arrayBuy = [];
let arraySale = [];
let arrayCurrency = [];


let firstCurrency = document.querySelectorAll('.currency-buy');
let secondCurrency = document.querySelectorAll('.currency-sale');
let nameValue = document.querySelectorAll('.name-value')

async function getCourse(){
    try{
        let response = await fetch(courseActual);
        let  data = await response.json();
        return getInfo(data.splice(0,3));
    }catch(err){
        console.log(err)
    }
}
getCourse()
function getInfo (val){
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
    for(let i = 0; i < val.length; i++){
        if(val[i] === 'RUR'){
            val[i] = 'RUB'
        }
        nameValue[i].textContent = (val[i]+'/UAH')
    }
}

function showCurrency (arrayValue,blockCurrency){
    for(let i = 0; i < arrayValue.length; i++){
        let valFixNumber = parseFloat(arrayValue[i]).toFixed(2);
        blockCurrency[i].textContent = valFixNumber;
    }
}

function zeroFirstFormat(value){
    if(value < 10){
        value = '0'+value;
    }
    return value;
}

function getTime(){
    let date = new Date();
    let day = zeroFirstFormat(date.getDate());
    let month = zeroFirstFormat(date.getMonth());
    let year = zeroFirstFormat(date.getFullYear());
    let hours = zeroFirstFormat(date.getHours());
    let minutes = zeroFirstFormat(date.getMinutes());
    let seconds = zeroFirstFormat(date.getSeconds());

    return `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;
}
    
setInterval(function(){
    document.querySelector('.header-time__actual').innerHTML = getTime();
},100)





















// let site = document.querySelector('.site-title__date');
// let newTime = document.createElement('span');
// let firstCurrency = document.querySelectorAll('.currency-buy');
// let secondCurrency = document.querySelectorAll('.currency-sale');
// let nameValue = document.querySelectorAll('.name-value')

// let arrayBuy = [];
// let arraySale = [];
// let arrayCurrency = [];

// const courseActual = ('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11');
// getCourse(courseActual)

// const t = ('https://api.exchangeratesapi.io/latest')
// const urlValueCurrency = ('https://v6.exchangerate-api.com/v6/d5003c17d1570e4b59f84b4a/latest/EUR');
// const urlCourse = ('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11');

// // async function getCourse (){
// //     try{
// //         let response = await fetch(urlCourse)
// //         let data = await response.json()
// //         // console.log(data)
    
// //         return getInfo(data.splice(0, 3))  //функция для добавления значений на страницу
// //     } catch (err){
// //         console.error(err);
// //     }  
// // }
// // getCourse()

// async function getValueCurrency (currency = 'EUR'){
//     try{
//         let response = await fetch(`https://v6.exchangerate-api.com/v6/d5003c17d1570e4b59f84b4a/latest/${currency}`);
//         let data = await response.json();
//         console.log(data.conversion_rates)
//         addCurrencyValue(data.conversion_rates,firstSelect);
//         addCurrencyValue(data.conversion_rates,secondSelect)
//     }catch(err){
//         console.log(err)
//     }

// }
// getValueCurrency()

// let firstSelect = document.querySelector('.currency-base__select')
// let secondSelect = document.querySelector('.currency-to-change__select')
// let firstCurrencyInput = document.querySelector('.currency-base__input')
// let secondCurrencyInput = document.querySelector('.currency-to-change__input')

// let a = document.createElement('input');
// let b = document.createElement('input');
// function addCurrencyValue(arr,select){
    
//     for(let key in arr){
//         var options = document.createElement('option');
//         options.textContent = key;  
//         options.value = key
//         select.append(options)
//     }
//         watchChange(arr,firstSelect,a)
//         watchChange(arr,secondSelect,b)
    
// }
// function watchChange (arr,select,inputSelect){
//     select.addEventListener('change',()=>{
//         for(let [key, value] of Object.entries(arr)){
//             if(key === select.value){
//                 inputSelect.value = value
//             }
//         }
//         // console.log(a.value,b.value)
//     })
    
    
// }
// let converter = document.querySelector('.converter-title')
// converter.addEventListener('change',chek)

// function chek(){
//     if(a.value.length > 0 && b.value.length > 0){
        
        
        

//         if(firstCurrencyInput.value < 1){
//             console.log('Ведите сумум для обмена')
//             firstCurrencyInput.className = 'error'
//             // secondCurrencyInput.className = 'error'
//             firstSelect.className = 'first-currency__select'
//             secondSelect.className ='second-currency__select'
            
//         }else{
//             firstCurrencyInput.className = 'first-currency__input'
//             // secondCurrencyInput.className = 'first-currency__text'
//             console.log(a.value)
//             if(a.value > b.value){
//                 let coefficient = a.value / b.value
//                 let e = firstCurrencyInput.value / coefficient
//                 secondCurrencyInput.value = e.toFixed(2)
               
//             }else{
//                 let coefficient = b.value / a.value
//                 let e = firstCurrencyInput.value * (Math.floor(coefficient * 100) / 100)
//                 secondCurrencyInput.value = e
               
//             }
//         }
        
//     }else{
//         console.log('Выберите валюту')
//         firstSelect.className = 'error'
//         secondSelect.className ='error'
//     }
    
// }

// function calcCurrency (){
//     chek()
//     // if(a.value = null){
//     //     console.log('Выберете валюту')
//     // }else{
        
//     // }
    
// }
// // console.log(a.value,b.value)




// function getInfo (val){
//     val.forEach(el=>{
//         arrayCurrency.push(el.ccy);
//         arrayBuy.push(el.buy);
//         arraySale.push(el.sale);

//         addNameCurrency(arrayCurrency);
//         showCurrency(arrayBuy,firstCurrency);
//         showCurrency(arraySale,secondCurrency);
//     })  
// }

// function addNameCurrency (val){
//     for(let i = 0; i < val.length; i++){
//         if(val[i] === 'RUR'){
//             val[i] = 'RUB'
//         }
//         nameValue[i].textContent = (val[i]+'/UAH')
//     }
// }
// function showCurrency (arrayValue,blockCurrency){
//     for(let i = 0; i < arrayValue.length; i++){
//                 let valFixNumber = parseFloat(arrayValue[i]).toFixed(2);
//                 blockCurrency[i].textContent = valFixNumber;
//             }
// }

// function zeroFirstFormat(value){
//         if (value < 10){
//             value='0'+value;
//         }
//         return value;
// }

// function getTime (){
//         let current_datetime = new Date();
//         let day = zeroFirstFormat(current_datetime.getDate());
//         let month = zeroFirstFormat(current_datetime.getMonth()+1);
//         let year = current_datetime.getFullYear();
//         let hours = zeroFirstFormat(current_datetime.getHours());
//         let minutes = zeroFirstFormat(current_datetime.getMinutes());
//         let seconds = zeroFirstFormat(current_datetime.getSeconds());

//         return day+"."+month+"."+year+" "+hours+":"+minutes+":"+seconds;
// }

// setInterval(function(){
    // document.querySelector('.new-dite').innerHTML = getTime();
//     newTime.innerHTML = getTime()
// },100)

