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
	let interval = null;
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
	const deadLine = Bodies.rectangle(300, 150, 800, 10, {
		name: "deadLine",
		isStatic: true ,
		isSensor: true ,
		render: {
			fillStyle: "red"
		}
	});
	
	// Add the bodies to the world
	World.add(engine.world, [leftWall, rightWall, ground, deadLine]);
	createCircleFnc();
	
	function createCircleFnc() {
		
		const index = Math.floor(Math.random() * 3);
		
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
			},
			restitution: 0.4,
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
		const keyboardWASD = document.getElementById("keyboard").children;
		if (disableAction == false) {
			//			console.log(leftWall.position.x + selectCircle.circleRadius);
			switch (event.code) {
				case "KeyA":
					if (interval)
						return;
					interval = setInterval(() => {
						if (selectCircle.position.x - selectCircle.circleRadius > 10) {
							keyboardWASD[1].style.backgroundColor = "gray";
							Body.setPosition(selectCircle, {
								x: selectCircle.position.x - 1,
								y: selectCircle.position.y,
							});
						}
					}, 5);
					break;
				case "KeyS":
					keyboardWASD[2].style.backgroundColor = "gray";

					disableAction = true;
					selectCircle.isSleeping = false;
					//			selectCircle = null;

					setTimeout(() => {
						createCircleFnc();
					}, 1000);
					break;
				case "KeyD":
					if (interval)
						return;
					interval = setInterval(() => {
						if ((selectCircle.position.x + selectCircle.circleRadius < 590)) {
							keyboardWASD[3].style.backgroundColor = "gray";
							Body.setPosition(selectCircle, {
								x: selectCircle.position.x + 1,
								y: selectCircle.position.y,
							});
						}
					}, 5);
					break;
			}
		}
	}

	window.onkeyup = (event) => {
		const keyboardWASD = document.getElementById("keyboard").children;
		switch(event.code){
			case "KeyA":
			case "KeyS":
			case "KeyD":
				for(var i = 0; i < keyboardWASD.length; i++){
					keyboardWASD[i].removeAttribute("style");
				}
				clearInterval(interval);
				interval = null;	
		}
	}
	
}

Events.on(engine, "collisionStart", (event) => {
		event.pairs.forEach((collision) => {
			if (collision.bodyA.index === collision.bodyB.index) {
				const index = collision.bodyA.index;
				
				maxCircle = document.getElementById("maxCircle");
				let colorLoop = parseInt(maxCircle.textContent);
//				console.log("colorLoop : " + colorLoop);
				while(colorLoop >=  circleColor.length){
					colorLoop = colorLoop - parseInt(circleColor.length);
				}
				
				if(index === circleRadius.length - 1){
					maxCircle.style.backgroundColor = circleColor[colorLoop];
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
//				console.log(score);
				score.textContent = parseInt(score.textContent) + parseInt(circleRadius[index]);
				World.add(engine.world, newCircle);
			}
			
			if(!disableAction &&
				(collision.bodyA.name === "deadLine" || collision.bodyB.name === "deadLine")){
				alert("Game Over");
				window.onkeydown = null;
				window.onkeyup = null;
				alert("다시 하시려면 F5를 눌러주세요");
			}
		});
	});




