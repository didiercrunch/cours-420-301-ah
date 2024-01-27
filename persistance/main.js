
function addItemInList(name){
    const li = document.createElement("li");
    li.innerText = name;
    document.getElementById("list1").appendChild(li);

}

function click(){
    const value = document.getElementById("input1").value;
    addItemInList(value);
}

document.getElementById("exo1").addEventListener("click", click);