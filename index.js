// Create a new Date object, which represents the current date and time
const currentDate = new Date();
const ink = document.querySelector('#Input');
const inLength=ink.value;
const Year =document.querySelector('.year');
const mon =document.querySelector('.mon');
const dayy =document.querySelector('.day');
const tog = document.querySelector('.tog').querySelectorAll('c');
const currentYear = currentDate.getFullYear();

 let uInputYear = '';


function checker(){
    const ink = document.querySelector('#Input');
const inLength=ink.value;
uInputYear=inLength.split("-");

    console.log(uInputYear);
    // console.log(inLength);
    if(inLength.length<5){
        ink.select();

        alert('Please enter full date of birth');
    }
    else if(parseInt(uInputYear[0])>31){
        alert ("please enter valid date");
        ink.select();

    }
    else if(parseInt(uInputYear[1])>12){
        alert ("please enter valid month");
        ink.select();

    }
    else if(parseInt(uInputYear[2])<4 || parseInt(uInputYear[2])>year){
        alert ("please enter valid year");
        ink.select();

    }
    else{
        const input = document.querySelector('#Input').value;
const inpu = document.querySelector('#Input');

const Year =document.querySelector('.year');
const mon =document.querySelector('.mon');
const dayy =document.querySelector('.day');
 inpu.select();

     const yDiff =year-parseInt(uInputYear[2]);
    Year.innerHTML=yDiff;
    const mdiff=month-parseInt(uInputYear[1]);
    mon.innerHTML=mdiff>0 ? mdiff : -mdiff;
    const ydiff=day-parseInt(uInputYear[0]);
    dayy.innerHTML=ydiff>0 ? ydiff : -ydiff;

    }
}


function reset(){


}



function hyp(){
    console.log("claaed on change");
const input = document.querySelector('#Input');
let y = input.value;
    if(y.length === 2){
        input.value=`${y}-`;
        // uInputYear=y;
        // console.log(uInputYear);
        }

     else if(y.length === 5){
        input.value=`${y}-`;
        
     }   
     else if(y.length ===7){
        input.value=`${y}`;

     }
     
     Year.innerHTML='0';
mon.innerHTML='0';
dayy.innerHTML='0';
}




// Get the current date in the format "YYYY-MM-DD"
const year = currentDate.getFullYear();
const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based
const day = String(currentDate.getDate()).padStart(2, '0');
const currentDateFormatted = `${year}-${month}-${day}`;

console.log('Current Year:', currentYear);
console.log('Current Date:', currentDateFormatted);



// function diff(){
    

// }