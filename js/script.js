let site = document.querySelector('.date');
let newTime = document.createElement('span');
let firstCurrency = document.querySelectorAll('.first-currency');
let secondCurrency = document.querySelectorAll('.second-currency');

let arrayBuy = [];
let arraySale = [];

async function getApi (){
   await fetch('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11')
        .then(response => response.json()).then(el =>{
            el.forEach(el =>{
                arrayBuy.push(el.buy)
                arraySale.push(el.sale)
    })
    return (arrayBuy,arraySale);
})
}

function addPrice (arrayValue,blockCurrency){
    for(let i = 0; i < arrayValue.length; i++){
        let valFixNumber = parseFloat(arrayValue[i]).toFixed(2);
        blockCurrency[i].innerHTML = valFixNumber;
    }
}

async function go (){
    await getApi();
    addPrice(arrayBuy,firstCurrency);
    addPrice(arraySale,secondCurrency)
    
}
go()
// function addPric (arra,blockCurrency){
//     for(let i = 0; i < arraySale.length; i++){
//         let valFixNumber = parseFloat(arraySale[i]).toFixed(2);
//         secondCurrency[i].innerHTML = valFixNumber;
//     }
// }


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

