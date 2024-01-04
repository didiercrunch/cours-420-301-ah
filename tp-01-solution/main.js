
import {drawCircles, populateTable, Circle, Point, randomColor} from "https://cdn.jsdelivr.net/gh/didiercrunch/cours-420-301-ah@tp1.1/modules-examples/mod.js";

const circles = []

function getCircleById(circleId){
    for(const circle of circles){
        if(circle.getId() === circleId){
            return circle;
        }
    }
}

function onClickUp(circleId){
    const circle = getCircleById(circleId);
    const center = circle.getCenter();
    const newCenter = new Point(center.getX(), center.getY() - 10);
    circle.setCenter(newCenter);
    renderCircles();
}

function onClickDown(circleId){
    const circle = getCircleById(circleId);
    const center = circle.getCenter();
    const newCenter = new Point(center.getX(), center.getY() + 10);
    circle.setCenter(newCenter);
    renderCircles();
}

function onClickLeft(circleId){
    const circle = getCircleById(circleId);
    const center = circle.getCenter();
    const newCenter = new Point(center.getX() - 10, center.getY());
    circle.setCenter(newCenter);
    renderCircles();
}

function onClickRight(circleId){
    const circle = getCircleById(circleId);
    const center = circle.getCenter();
    const newCenter = new Point(center.getX() + 10, center.getY());
    circle.setCenter(newCenter);
    renderCircles();
}



function onClickPaint(circleId){
    const circle = getCircleById(circleId);
    circle.setColor(randomColor(Date.now()))
    renderCircles();
}

function pointToString(point){
    return `(${point.getX()}, ${point.getY()})`;
}

function drawNewCircle(){
    const x = parseInt(document.getElementById("cx").value)
    const y = parseInt(document.getElementById("cy").value)
    const r = parseInt(document.getElementById("cr").value)
    const p = new Point(x, y);
    const circle = new Circle(p, r, Date.now());
    circles.push(circle);
    renderCircles();
}

function inverseCircles(){
    circles.reverse();
    renderCircles();
}

function clearCircles(){
    circles.length = 0;
    renderCircles();
}

function drawSimpleCircle(){
    circles.length = 0;
    const circle = new Circle(new Point(250, 250), 50, Date.now());
    circles.push(circle);
    renderCircles();
}

function renderCircles(){
    drawCircles(document.getElementById("canvas"), circles);
    populateTable(document.getElementById("table-body"),
        circles,
        pointToString,
        onClickUp,
        onClickDown,
        onClickLeft,
        onClickRight,
        onClickPaint);
}



document.getElementById("draw-circle").addEventListener("click", drawNewCircle);
document.getElementById("clear-drawing").addEventListener("click", clearCircles);
document.getElementById("inverse-drawing").addEventListener("click", inverseCircles);
document.getElementById("draw-simple-circle").addEventListener("click", drawSimpleCircle);

