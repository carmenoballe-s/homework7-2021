var video = getElementById('player1');

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
		if (video.play) {
				var vol = document.querySelector("#slider").value;
				document.getElementById("volume").innerHTML = vol+"%";
}});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
		console.log("Pause video");
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 0.95;
		console.log("Video speed is:" + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 1.05;
		console.log("Video speed is:" + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Original location is:" + video.currentTime);
	if (video.currentTime + 15 > video.duration) {
		console.log("Back to start");
		video.currentTime = 0;
		 }

	else {
		video.currentTime = video.currentTime + 15;
		}
	console.log("New location" + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute video");
	video.muted = true; 
	document.querySelector("#mute").innerHTML = "Unmute"
		
});

var slider = document.getElementById("slider");
var output = document.getElementById("volume");

slider.oninput = function() {
	output.innerHTML = this.value+"%";
	video.volume = this.value/100;
}


document.querySelector("#vintage").addEventListener("click", function () {
	document.querySelector("Video").className='oldSchool';

});

document.querySelector("#orig").addEventListener("click", function () {
	document.querySelector("Video").classList.remove("oldSchool");

});
