
class FatBoom{
    word(){
        return "boom de fat classe";
    }

    boom = (evt) => {
        alert(this.word())
    }
}

class Boom{
    word(){
        return "boom de classe";
    }

    boom(evt){
        alert(this.word())
    }
}

function boom(){
    alert("hello world")
}

const fatBoom = () => {
    alert("HELLO WORLD")
}

document.getElementById("button")
    .addEventListener("click", boom)

document.getElementById("button1")
    .addEventListener("click", fatBoom)

document.getElementById("button2")
    .addEventListener("click", (new Boom()).boom)

document.getElementById("button3")
    .addEventListener("click", (new FatBoom()).boom)