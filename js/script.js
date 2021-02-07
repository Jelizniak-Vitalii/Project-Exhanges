let site = document.querySelector('.date');
let newTime = document.createElement('span');
let firstCurrency = document.querySelectorAll('.first-currency');
let secondCurrency = document.querySelectorAll('.second-currency');

let arrayBuy = [];
let arraySale = [];


fetch('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11')
.then(response => response.json()).then(el =>{
    el.forEach(el =>{
        arrayBuy.push(el.buy)
        arraySale.push(el.sale)
    })
})


function addPrice (arra,blockCurrency){
    for(let i = 0; i < arrayBuy.length; i++){
        let valFixNumber = parseFloat(arrayBuy[i]).toFixed(2);
        firstCurrency[i].innerHTML = valFixNumber;
    }
}
function addPric (arra,blockCurrency){
    for(let i = 0; i < arraySale.length; i++){
        let valFixNumber = parseFloat(arraySale[i]).toFixed(2);
        secondCurrency[i].innerHTML = valFixNumber;
    }
}

setTimeout(addPrice,800)
setTimeout(addPric,800)
console.log(arrayBuy)
console.log(arraySale)

function zero_first_format(value){
        if (value < 10){
            value='0'+value;
        }
        return value;
}

function getTime (){
    var current_datetime = new Date();
        var day = zero_first_format(current_datetime.getDate());
        var month = zero_first_format(current_datetime.getMonth()+1);
        var year = current_datetime.getFullYear();
        var hours = zero_first_format(current_datetime.getHours());
        var minutes = zero_first_format(current_datetime.getMinutes());
        var seconds = zero_first_format(current_datetime.getSeconds());

        return day+"."+month+"."+year+" "+hours+":"+minutes+":"+seconds;
}

setInterval(function(){
    newTime.className = 'new-date'
    newTime.innerHTML = getTime()
    site.appendChild(newTime)
},100)
