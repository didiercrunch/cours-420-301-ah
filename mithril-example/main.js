import m from "https://esm.sh/mithril@2.2.2"

function example1(){
    let div1 = m("b", {style: "font-family: monospace;"}, "didier");
    let div2 = m("div", "bonjour monde");

    return m("div", {style: "color:red;"}, "bonjour", " ", div1);
}

m.render(document.getElementById("example-1"), example1());


function example2(){
    let chien = m("li", "un chien");
    let chat = m("li", ["un ", m("a", {href: "https://example.com/chat"}, "chat")]);
    return m("ul", [chien, chat]);
}

m.render(document.getElementById("example-2"), example2());


function example3(){
    let rougeEtGros = m("div.red.big", "Rouge & Gros");
    let blueEtPetit = m("div.blue.small", "Bleu & Petit");
    return m("div", [rougeEtGros, blueEtPetit]);
}

m.render(document.getElementById("example-3"), example3());
