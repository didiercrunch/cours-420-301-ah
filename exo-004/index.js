import {isValidIsbn, isValidIsbn10, isValidIsbn13} from "https://cdn.jsdelivr.net/gh/didiercrunch/cours-420-301-ah@latest/modules-examples/books.js";
import {isBalanced} from "./util.js";

function question1(){
    let input1 = document.getElementById("input-1")
    let inputText = input1.value;
    document.getElementById("output-1").innerText = inputText;
}

function question4(){
    let input1 = document.getElementById("input-1")
    let inputText = input1.value;
    if(isValidIsbn(inputText)){
        document.getElementById("output-1").innerText = "Isbn est valide";
    } else {
        document.getElementById("output-1").innerText = "Isbn n'est pas valide";
    }
}

function getQuestion5Message(text){
    if(isValidIsbn13(text)){
        return "Ceci est un isbn-13 valide";
    }
    if(isValidIsbn10(text)){
        return "Ceci est un isbn-10 valide";
    }
    return "Ceci n'est pas un isbn";
}

function question5(){
    let input1 = document.getElementById("input-1")
    let inputText = input1.value;
    document.getElementById("output-1").innerText = getQuestion5Message(inputText);

}


function getQuestion6Message(text){
    if(isBalanced(text)){
        return "Les parantheses sont balancées";
    }
    return "Les parantheses ne sont pas balancées";
}

function question6(){
    let input1 = document.getElementById("input-1")
    let inputText = input1.value;
    document.getElementById("output-1").innerText = getQuestion6Message(inputText);

}




document.getElementById("button-1")
    .addEventListener("click", question1);

document.getElementById("button-2")
    .addEventListener("click", question4);

document.getElementById("button-3")
    .addEventListener("click", question5);

document.getElementById("button-4")
    .addEventListener("click", question6);