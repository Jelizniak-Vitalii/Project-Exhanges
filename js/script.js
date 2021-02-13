let site = document.querySelector('.date');
let newTime = document.createElement('span');
let firstCurrency = document.querySelectorAll('.first-currency');
let secondCurrency = document.querySelectorAll('.second-currency');
let nameValue = document.querySelectorAll('.name-value')

let arrayBuy = [];
let arraySale = [];
let arrayCurrency = [];

// async function getApi (){
//    await fetch('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11')
//         .then(response => response.json()).then(el =>{
//             el.forEach(el =>{
//                 arrayBuy.push(el.buy)
//                 arraySale.push(el.sale)
//                 console.log(el)
//     })
//     return (arrayBuy,arraySale)
// })
// }

// function addValueCurrency (arrayValue,blockCurrency){
//     for(let i = 0; i < arrayValue.length; i++){
//         let valFixNumber = parseFloat(arrayValue[i]).toFixed(2);
//         blockCurrency[i].innerHTML = valFixNumber;
//     }
// }
// function addPric (arra,blockCurrency){
//     for(let i = 0; i < arraySale.length; i++){
//         let valFixNumber = parseFloat(arraySale[i]).toFixed(2);
//         secondCurrency[i].innerHTML = valFixNumber;
//     }
// }
// async function go (){
//     await getApi()
//     addValueCurrency()
//     addPric();
    
// }
// go()


let url = ('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11')

async function getApi (){
    try{
        let response = await fetch(url)
        let data = await response.json()
        console.log(data)
        return getInfo(data)  //функция для добавления значений на страницу
    } catch (err){
        console.error(err);
    }
    
}
getApi()

function getInfo (val){
    val.forEach(el=>{
        arrayCurrency.push(el.ccy)
        arrayBuy.push(el.buy)
        arraySale.push(el.sale)

        addNameCurrency(arrayCurrency);
        showCurrency(arrayBuy,firstCurrency);
        showCurrency(arraySale,secondCurrency);
        console.log(arrayCurrency)
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
                blockCurrency[i].innerHTML = valFixNumber;

            }
}


// function sendRequest (method){
//     return new Promise((resolve,reject)=>{

//     const xhr = new XMLHttpRequest();

//     xhr.open(method, url);

//     xhr.responseType = 'json';

//     xhr.onload = () =>{
//     if(xhr.status >= 400){
//         console.error(xhr.response)
//     }
//     else{
//         resolve(xhr.response)
//     }
    
// }
//     xhr.onerror = ()=>{
//     reject(xhr.response)
// }
//     xhr.send();
// })
// }
// sendRequest('GET').then(data => console.log(data))


function zero_first_format(value){
        if (value < 10){
            value='0'+value;
        }
        return value;
}

function getTime (){
        let current_datetime = new Date();
        let day = zero_first_format(current_datetime.getDate());
        let month = zero_first_format(current_datetime.getMonth()+1);
        let year = current_datetime.getFullYear();
        let hours = zero_first_format(current_datetime.getHours());
        let minutes = zero_first_format(current_datetime.getMinutes());
        let seconds = zero_first_format(current_datetime.getSeconds());

        return day+"."+month+"."+year+" "+hours+":"+minutes+":"+seconds;
}

setInterval(function(){
    newTime.className = 'new-date'
    newTime.innerHTML = getTime()
    site.appendChild(newTime)
},100)

