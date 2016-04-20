var video = $("#video")[0];
var canvas = $("#canvas")[0];
	canvas.width = document.body.clientWidth;
	canvas.height = document.body.clientHeight;
var ctx = canvas.getContext('2d');

function animate(){
	ctx.drawImage(video,0,0,canvas.width,canvas.height);
	window.requestAnimationFrame(animate);
}

$("#playButton").on("click",function(e){
	video.play();
	animate();
});