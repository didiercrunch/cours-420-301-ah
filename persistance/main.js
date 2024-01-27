
function addItemInList(name){
    const li = document.createElement("li");
    li.innerText = name;
    document.getElementById("list1").appendChild(li);
}

function click(){
    const value = document.getElementById("input1").value;
    addItemInList(value);
    addToLocalStorage(value);
}

function addToLocalStorage(value) {
    let listeStockage = getListFromLocalStorage();
    listeStockage.push(value);
    localStorage.setItem("elm", JSON.stringify(listeStockage));
}

function clear(){
    localStorage.removeItem("elm");
    // const listElement = document.getElementById("list1");
    // const children = new Array(listElement.children);
    // for(const child of children){
    //     listElement.removeChild(child);
    // }
}

function getListFromLocalStorage() {
    let serialized = localStorage.getItem("elm");
    if(!serialized){
        return []
    }
    return JSON.parse(serialized);
}

function initializeList(){
    const items = getListFromLocalStorage();
    for(const item of items){
        addItemInList(item);
    }
}

document.getElementById("exo1").addEventListener("click", click);
document.getElementById("effacer").addEventListener("click", clear);
initializeList();