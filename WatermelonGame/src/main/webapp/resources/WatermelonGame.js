window.onload = function() {
	const circleList = document.getElementsByClassName("circleImg");
	const str = "px";
	for (var i = 0; i < circleList.length; i++) {
		circleList[i].style.width = (i + 2) * 10 + str;
		circleList[i].style.height = (i + 2) * 10 + str;
	}
}

const engine = Matter.Engine.create(),
    world = Matter.World;

const render = Matter.Render.create({
	element: document.body,
	engine: engine,
	options: {
		width: 600,
		height: 800,
		wireframes: false,
		background: "#8eedb1"
	}
});

Matter.Render.run(render);

const runner = Matter.Runner.create();
Matter.Runner.run(runner, engine);

function gameStartFnc() {
	const startButtonDiv = document.getElementById("startButtonDiv");

	startButtonDiv.remove();

	createCircleFnc();
}

function createCircleFnc() {
	const randomNum = Math.floor(Math.random() * 7) + 1;
	const circleList = document.getElementsByClassName("circleImg");
	const newCircle = circleList[randomNum].cloneNode(true);
	newCircle.style.margin = "0";
	const background = document.getElementById("background");
	background.appendChild(newCircle);


	window.onkeydown = () => {
//		var userKeyCode = "";
		const num = event.keyCode;
		const keyboardWASD = document.getElementById("keyboard").children;
		if (num == 65) {
			userKeyCode = "A";
			keyboardWASD[1].style.backgroundColor = "gray";
		} else if (num == 83) {
			userKeyCode = "S";
			keyboardWASD[2].style.backgroundColor = "gray";
		} else if (num == 68) {
			userKeyCode = "D";
			keyboardWASD[3].style.backgroundColor = "gray";
		}
		// 			return console.log(userKeyCode);
	}

	window.onkeyup = () => {
		const keyboardWASD = document.getElementById("keyboard").children;
		for (var i = 0; i < keyboardWASD.length; i++) {
			keyboardWASD[i].removeAttribute("style");
		}
	}

}