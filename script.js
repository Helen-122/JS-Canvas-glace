var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(125, 230);
ctx.lineTo(375, 230);
ctx.lineTo(250, 470);
ctx.lineTo(125, 230);
ctx.fillStyle = "pink";
ctx.fill();

ctx.beginPath();
ctx.moveTo(125,230);
ctx.quadraticCurveTo(300,2,375,230);
ctx.fillStyle='#BC8F8F';
ctx.fill();











/*
ctx.beginPath();
ctx.lineWidth = '5';
ctx.strokeStyle = '#A4A';
ctx.moveTo(125, 230);
ctx.arcTo(125, 230, 250, 50, 50);
ctx.stroke();

//Arc de cercle bleu
ctx.beginPath();
ctx.lineWidth = '5';
ctx.arc(125,230,35,0.2*Math.PI, Math.PI, true);
ctx.fillStyle = '#A0522D';
ctx.fill();
ctx.closePath();
*/
