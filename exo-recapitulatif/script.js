
export function toto(){
    console.log("say toto");
}

export function hello(){
    console.log("say hello");
}

document.querySelector('#foo').addEventListener('click', toto);
document.querySelector('#foo').addEventListener('click', hello);