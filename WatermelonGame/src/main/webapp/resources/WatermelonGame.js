//matter 초기 데이터 작업
	const Engine = Matter.Engine;
	const Render = Matter.Render;
	const Runner = Matter.Runner;
	const Body = Matter.Body;
	const Bodies = Matter.Bodies;
	const World = Matter.World;
	const Events = Matter.Events;
	
	
	
	let selectCircle = null;
	let disableAction = false;
	let endlessGame = false;
	const circleRadius = [10, 20, 30, 40, 50, 60, 70];
	const circleColor = ["red", "orange", "yellow", "green", "blue", "navy", "purple"];
	
	
	// create an engine
	const engine = Engine.create();
	let score = null;
	let maxCircle = null;


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
		
		const index = Math.floor(Math.random() * 5);
		
		const radius = circleRadius[index];
		const color = circleColor[index];
	
		// bodies.circle(x축의 시작점, y축의 시작점, 반지름)
		const newCircle = Bodies.circle(300, 0 + radius, radius, {
			index: index,
			isSleeping: true,
			render: {
					fillStyle: color,
//					text: {
//						content: "text",
//						color: "black",
//					}
			}
		});
	
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
//			console.log(leftWall.position.x + selectCircle.circleRadius);
			if (userKeyCode == "KeyA" && (selectCircle.position.x - selectCircle.circleRadius > 10)) {
			keyboardWASD[1].style.backgroundColor = "gray";
			Body.setPosition (selectCircle, {
				x: selectCircle.position.x - 10,
				y: selectCircle.position.y,
			});
			
		}
		if (userKeyCode == "KeyS") {
			keyboardWASD[2].style.backgroundColor = "gray";
			
			disableAction = true;
			selectCircle.isSleeping = false;
//			selectCircle = null;
			
			setTimeout(() => {				
				createCircleFnc();
			}, 1);
		}
		if (userKeyCode == "KeyD" && (selectCircle.position.x + selectCircle.circleRadius < 590)) {
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

Events.on(engine, "collisionStart", (event) => {
		event.pairs.forEach((collision) => {
			if (collision.bodyA.index === collision.bodyB.index) {
				const index = collision.bodyA.index;
				
				if(index === circleRadius.length - 1){
					maxCircle = document.getElementById("maxCircle");
					maxCircle.style.backgroundColor = circleColor[maxCircle.textContent];
					maxCircle.textContent = parseInt(maxCircle.textContent) + 1;
					if(endlessGame == false){
						alert("수박 완성!!!");
						endlessGame = true;		
					}
				}
					World.remove(engine.world, [collision.bodyA, collision.bodyB]);
				
				const newCircle = Bodies.circle(
					collision.collision.supports[0].x,
					collision.collision.supports[0].y,
					circleRadius[index + 1],
					{
						index: index + 1,
						render:{
							fillStyle: circleColor[index + 1],
						}
					}
					
				)
				score = document.getElementById("score");
				console.log(score);
				score.textContent = parseInt(score.textContent) + parseInt(circleRadius[index]);
				World.add(engine.world, newCircle);
			}
		});
	});



