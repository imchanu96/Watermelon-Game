//matter 초기 데이터 작업
	const Engine = Matter.Engine;
	const Render = Matter.Render;
	const Runner = Matter.Runner;
	const Body = Matter.Body;
	const Bodies = Matter.Bodies;
	const World = Matter.World;
	
	
	let selectCircle = null;
	let disableAction = false;
	
	// create an engine
	const engine = Engine.create();

window.onload = function() {
	const circleList = document.getElementsByClassName("circleImg");
	const str = "px";
	for (var i = 0; i < circleList.length; i++) {
		circleList[i].style.width = (i + 2) * 10 + str;
		circleList[i].style.height = (i + 2) * 10 + str;
	}
	
	
}

function gameStartFnc() {
	const startButtonDiv = document.getElementById("startButtonDiv");

	startButtonDiv.remove();
	
	
	// create a renderer
	const render = Render.create({
	    element: document.querySelector("#background"),
	    engine: engine,
	    options: {
	        width: 600,
	        height: 800,
	        wireframes: false,
	        background: "#8eedb1"
	    }
	});
	
	// bodies.rectangle(x축의 시작점, y축의 시작점, 길이, 높이)
	const leftWall = Bodies.rectangle(5, 400, 10, 800, {
	 	isStatic: true ,
		render: {
			fillStyle: "brown"
		}
	});
	const rightWall = Bodies.rectangle(595, 400, 10, 800, {
	 	isStatic: true ,
		render: {
			fillStyle: "brown"
		}
	});
	const ground = Bodies.rectangle(300, 800, 800, 20, {
	 	isStatic: true ,
		render: {
			fillStyle: "brown"
		}
	});
	
	// Add the bodies to the world
	World.add(engine.world, [leftWall, rightWall, ground]);
	createCircleFnc();
	
	function createCircleFnc() {
	const circleRadius = [10, 20, 30, 40, 50];
	const index = Math.floor(Math.random() * 5);
	
	const radius = circleRadius[index];

	// bodies.circle(x축의 시작점, y축의 시작점, 반지름)
	const newCircle = Bodies.circle(300, 0 + radius, radius, {
		isSleeping: true
		}
	);
	
	selectCircle = newCircle;
	
	World.add(engine.world, newCircle);
	disableAction = false;
	} // 새로운 구 생성

	// Run the engine
	Engine.run(engine);
	
	// Run the renderer
	Render.run(render);
	
	window.onkeydown = (event) => {
		const userKeyCode = event.code;
		const keyboardWASD = document.getElementById("keyboard").children;
		if(disableAction == false){
			if (userKeyCode == "KeyA") {
			keyboardWASD[1].style.backgroundColor = "gray";
			Body.setPosition (selectCircle, {
				x: selectCircle.position.x - 10,
				y: selectCircle.position.y,
			});
			
		} else if (userKeyCode == "KeyS") {
			keyboardWASD[2].style.backgroundColor = "gray";
			
			disableAction = true;
			selectCircle.isSleeping = false;
			selectCircle = null;
			
			setTimeout(() => {				
				createCircleFnc();
			}, 1000);
		} else if (userKeyCode == "KeyD") {
			Body.setPosition (selectCircle, {
				x: selectCircle.position.x + 10,
				y: selectCircle.position.y,
			});
			keyboardWASD[3].style.backgroundColor = "gray";
		}
		// 			return console.log(userKeyCode);
		}
	}

	window.onkeyup = () => {
		const keyboardWASD = document.getElementById("keyboard").children;
		for (var i = 0; i < keyboardWASD.length; i++) {
			keyboardWASD[i].removeAttribute("style");
		}
	}
}




