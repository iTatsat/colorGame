var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	setUpModeButtons();
	setUpSquares();
	reset();
}

function setUpModeButtons (){
	//mode buttons event listeners
	for(var i = 0; i< modeButtons.length; i++){

		modeButtons[i].addEventListener("click", function(){

			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();

		});
	}
}

function setUpSquares(){
	for(var i = 0; i < squares.length; i++){
		// add click listeners to square 
		squares[i].addEventListener("click" , function(){
			//grab color to clicked square
			var clickedColor = this.style.backgroundColor;
			//compare color to pickedColor
			if(clickedColor===pickedColor){
				messageDisplay.textContent = "Correct!!";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
				resetButton.textContent = "Play Again ?";
			}else{
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	}
}

function reset (){

	colors = genrateRandomColors(numSquares);
	pickedColor = pickColor();
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colors"
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor= "steelblue";

}

resetButton.addEventListener("click", function(){
	reset();

});

function changeColors(color){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}
 
 function genrateRandomColors(num){
 	var arr = [];

 	for(var i=0; i<num; i++){
 		arr.push(randomColor());
 	}

 	return arr;
 }

function randomColor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	
	return "rgb(" +r + ", " + g + ", " + b +")";

}
