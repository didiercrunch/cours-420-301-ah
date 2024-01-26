function click(){
    const value = document.getElementById("input1").value;
    const li = document.createElement("li");
    li.innerText = value;
    document.getElementById("list1").appendChild(li);
}

document.getElementById("exo1").addEventListener("click", click);