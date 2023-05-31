let cl = console.log;

function createDigitalClock(){
    
const digitalclock = document.getElementById("digitalclock")
let d=new Date();

let hr=d.getHours();

let min=d.getMinutes();

let sec=d.getSeconds();

let session="AM";

if(hr > 12){
    session = "PM";
    hr =hr - 12;

}
if(hr<10){
    hr="0"+hr;
}

if(min<10){
    min="0"+min;
}

if(sec<10){
    sec="0"+sec;
}

let result =`${hr}:${min}:${sec} ${session}`;

digitalclock.innerHTML=result;
setTimeout(createDigitalClock)

}

cl(createDigitalClock())


















