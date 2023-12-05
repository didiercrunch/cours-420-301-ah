import {std as average} from "https://cdn.jsdelivr.net/gh/didiercrunch/cours-420-301-ah@main/modules-examples/stats.js";
import {isValidIsbn} from "https://cdn.jsdelivr.net/gh/didiercrunch/cours-420-301-ah@main/modules-examples/books.js";
export function toto(){
    console.log(average([10, 15]));
    console.log("say toto");
}

alert(isValidIsbn("ddd"))

export function hello(){
    console.log("say hello");
}

document.querySelector('#foo').addEventListener('click', toto);
document.querySelector('#foo').addEventListener('click', hello);