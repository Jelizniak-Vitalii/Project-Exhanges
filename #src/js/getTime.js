// Start Time

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
    


//  End Time

export default getTime;