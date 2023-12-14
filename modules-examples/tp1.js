import m from "https://esm.sh/mithril@2.2.2"

const BLACK = "000000";
/**
 * Classe qui représente un point sur
 * un plan cartésien.  Le point est donc
 * représenté par deux coordonnées x et y.
 */
export class Point{
    #x;
    #y;
    constructor(x, y) {
        this.#x = x;
        this.#y = y;
    }
    getX(){
        return this.#x;
    }

    getY(){
        return this.#y;
    }
}

/**
 * Classe qui représente un cercle.  Le cercle est
 * définit par un Point et un rayon.
 *
 * Par défaut, le cercle est noir.  Mais le cercle peut
 * changer de couleur.
 */
export class Circle{
    #center;
    #radius;
    #color;
    #id;

    /**
     *
     * @param {Point} center le point au centre du cercle
     * @param {number} radius le rayon du cercle
     * @param {number} id l'id unique du cercle.  C'est au
     *         créateur de l'instance de s'assurer de l'unicité
     *         de l'id.
     */
    constructor(center, radius, id) {
        this.#center = center;
        this.#radius = radius;
        this.#color = BLACK;
        this.#id = id;
    }

    /**
     * @returns {Point} le point au centre au cercle
     */
    getCenter(){
        return this.#center;
    }

    /**
     *
     * @returns {number} le rayon du cercle
     */
    getRadius(){
        return this.#radius;
    }

    /**
     *
     * @returns {string} la couleur (hexadécimal) du cercle
     */
    getColor(){
        return this.#color;
    }

    /**
     * @param {String} color la nouvelle couleur du cercle
     */
    setColor(color){
        this.#color = color;
    }

    setCenter(center){
        this.#center = center;
    }

    /**
     * @returns {number} l'id du cercle
     */
    getId(){
        return this.#id;
    }
}

/**
 * Dessine tous les cercles dans un svg.  Cette fonction
 * nettoye le svg avant d'ajouter les cercles.
 *
 * @param node {HTMLElement} un element svg
 * @param circles {Circle[]} Les cercles à dessiner
 */
export function drawCircles(node, circles){
    let svgCircles = [];
    for(const circle of circles){
        const attr = {
            cx: circle.getCenter().getX(),
            cy: circle.getCenter().getY(),
            r: circle.getRadius(),
            fill: `#${circle.getColor()}`,

        };
        svgCircles.push(m("circle", attr))
    }
    m.render(node, svgCircles);
}

function identity(x){
    return x;
}

function functionOrDefault(fn){
    if(typeof fn === 'function'){
        return fn;
    }
    return identity;
}

function drawIcons(circle,
                   onClickUp,
                   onClickDown,
                   onClickLeft,
                   onClickRight,
                   onClickPaint){
    return [
        m("i.fa-solid.fa-arrow-up.is-clickable", {onclick: () => onClickUp(circle.getId())}),
        m("i.fa-solid.fa-arrow-down.is-clickable", {onclick: () => onClickDown(circle.getId())}),
        m("i.fa-solid.fa-arrow-left.is-clickable", {onclick: () => onClickLeft(circle.getId())}),
        m("i.fa-solid.fa-arrow-right.is-clickable", {onclick: () => onClickRight(circle.getId())}),
        m("i.fa-solid.fa-paint-roller.is-clickable", {onclick: () => onClickPaint(circle.getId())}),
    ]
}

/**
 * @param node {HTMLElement} un element tbody
 * @param circles {Circle[]} Les cercles
 * @param pointToString Argument optionnel qui doit être une fonction
 *        qui prend en paramêtre un Point et retourne un String qui
 *        représente le point.
 * @param onClickUp Argument optionnel qui doit être une fonction
 *        qui sera appelée lorsque la flèche pointant vers le haut
 *        sera cliquée.  L'id du cercle sera passé en argument de
 *        la fonction.
 * @param onClickDown Argument optionnel qui doit être une fonction
 *        qui sera appelée lorsque la flèche pointant vers le bas
 *        sera cliquée.  L'id du cercle sera passé en argument de
 *        la fonction.
 * @param onClickLeft Argument optionnel qui doit être une fonction
 *        qui sera appelée lorsque la flèche pointant vers la gauche
 *        sera cliquée.  L'id du cercle sera passé en argument de
 *        la fonction.
 * @param onClickRight Argument optionnel qui doit être une fonction
 *        qui sera appelée lorsque la flèche pointant vers la droite
 *        sera cliquée.  L'id du cercle sera passé en argument de
 *        la fonction.
 * @param onClickPaint Argument optionnel qui doit être une fonction
 *        qui sera appelée lorsque l'icone peinture
 *        sera cliquée.  L'id du cercle sera passé en argument de
 *        la fonction.
 */
export function populateTable(node,
                              circles,
                              pointToString= undefined,
                              onClickUp=undefined,
                              onClickDown=undefined,
                              onClickLeft=undefined,
                              onClickRight=undefined,
                              onClickPaint=undefined){
    const rows = [];
    pointToString = functionOrDefault(pointToString)
    for(const circle of circles){
        const row =[m("td", circle.getId()),
                          m("td", pointToString(circle.getCenter())),
                          m("td", circle.getRadius()),
                          m("td", drawIcons(circle,
                                            functionOrDefault(onClickUp),
                                            functionOrDefault(onClickDown),
                                            functionOrDefault(onClickLeft),
                                            functionOrDefault(onClickRight),
                                            functionOrDefault(onClickPaint)))];
        rows.push(m("tr", row))
    }
    m.render(node, rows);

}

/**
 * Retourne une couleur de gris aléatoire à partir d'un nombre entier.
 * @param i {number} (entier) qui sera utilisé comme "seed".
 * @returns {string} une couleur hexadécimale
 */
export function randomColor(i){
    const base = (i % 256).toString(16);
    return `${base}${base}${base}`
}