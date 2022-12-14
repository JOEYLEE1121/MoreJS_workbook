const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 800;

ctx.fillRect(230, 200, 15, 100);
ctx.fillRect(330, 200, 15, 100);
ctx.fillRect(260, 200, 60, 200);

ctx.arc(290, 140, 50, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "red";
ctx.arc(290, 140, 30, 0, 1 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "yellow";
ctx.arc(270, 120, 8, Math.PI, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "green";
ctx.arc(310, 120, 8, Math.PI, 2 * Math.PI);
ctx.fill();