const fillbtn = document.getElementById("fill-btn");
const strokebtn = document.getElementById("stroke-btn");

const color = document.getElementById("color");
const lineWidth = document.getElementById("line-width");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = lineWidth.value;
let isPainting = false;
let isFilling = false;

function onMovePainting(event) {
  if (isPainting) {
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    return;
  }
  ctx.moveTo(event.offsetX, event.offsetY);
  ctx.beginPath();
}

function onMoveFilling(event) {
  if (isFilling) {
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.fill();
    return;
  }
  ctx.moveTo(event.offsetX, event.offsetY);
  ctx.beginPath();
}

function startPainting() {
  isPainting = true;
}

function startFilling() {
  isFilling = true;
}

function cancelPainting() {
  isPainting = false;
  ctx.beginPath();
}

function cancelFilling() {
  isFilling = false;
  ctx.beginPath();
}

function onLineWidthChange(event) {
  ctx.lineWidth = event.target.value;
}

function onColorChange(event) {
  ctx.strokeStyle = event.target.value;
  ctx.fillStyle = event.target.value;
}

function onStrokeClick() {
  isFilling = false;
  canvas.addEventListener("mousemove", onMovePainting);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", cancelPainting);
  canvas.addEventListener("mouseleave", cancelPainting);
  lineWidth.addEventListener("change", onLineWidthChange);
  color.addEventListener("change", onColorChange);
}

function onFillClick() {
  isPainting = false;
  canvas.addEventListener("mousemove", onMoveFilling);
  canvas.addEventListener("mousedown", startFilling);
  canvas.addEventListener("mouseup", cancelFilling);
  canvas.addEventListener("mouseleave", cancelFilling);
  lineWidth.addEventListener("change", onLineWidthChange);
  color.addEventListener("change", onColorChange);
}

strokebtn.addEventListener("click", onStrokeClick);
fillbtn.addEventListener("click", onFillClick);