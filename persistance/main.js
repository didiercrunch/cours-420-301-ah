
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

function getListFromLocalStorage() {
    let serialized = localStorage.getItem("elm");
    if(!serialized){
        return []
    }
    return JSON.parse(serialized);
}

document.getElementById("exo1").addEventListener("click", click);