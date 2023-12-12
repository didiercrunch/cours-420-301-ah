
function question1(){
    let date = new Date()
    console.log(date.toLocaleString())
    console.log(date.toLocaleTimeString());
}

function getMonthName(monthIndex){
    const months = ["janvier", "fevrier", "mars", "avril", "mai", "juin", "juillet", "aout", "sept", "oct", "nov", "dec"];
    return months[monthIndex];
}

function question2(){
    let date = new Date()
    let zeroIndexedMonth = date.getMonth();
    console.log(getMonthName(zeroIndexedMonth))
}

function question3(){
    let date = new Date();
    console.log(date.getFullYear())
}

function question4(){
    let date = new Date();
    console.log(date.getTime())
}


function question5(){
    let date = new Date();
    console.log(date.getMinutes())
}


function question6(){
    let date = new Date();
    console.log(date.getTimezoneOffset() / 60)
}

function question7(){
    let date = new Date();
    date.setFullYear(date.getFullYear() + 1);
    console.log(date.getTime())
}

function question8(){
    let date = new Date();
    date.setMonth(date.getMonth() - 1);
    console.log(date.toString())
}


question1();
question2();
question3();
question4();
question5();
question6();
question7();
question8();