<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>수박 게임</title>
<style type="text/css">
#screen{
	width: 1200px;
	height: 900px;
	margin: auto;
}

#background {
	width: 600px;
	height: 800px;
	background-color: #8eedb1;
	margin: auto;
	text-align: center;
}

#gameTitle {
	width: 200px;
	height: 250px;
	margin: auto;
}

#startButtonDiv {
	width: inherit;
	height: 150px;
	margin: auto;
}

#startButton {
	text-decoration: none;
	font-size: 100px;
}
#gameDescription{
	width: 300px;
	height: 800px;
	float: left;
}

#scoreBoard {
	width: 100px;
	height: 20px;
	border: 1px solid black;
	text-align: right;
	margin-top: 20px;
	margin: auto;
	padding: 10px;
	
}

#score {
	color: red;
	margin-right: 10px;
}

#gameRule{
	text-align: center;
}

#circleExample{
	width: 300px;
	height: 500px;
}

.circleImg{
	border: 1px solid black;
	border-radius: 100px;
	text-align: center;
	margin: 10px 90px;
	float: left;
}
</style>
<script type="text/javascript">
	
	window.onload = function() {
		var circleList = document.getElementsByClassName("circleImg");
		let str = "px";
		for (var i = 0; i < circleList.length; i++) {
			circleList[i].style.width = (i+2) * 10 + str;
			circleList[i].style.height = (i+2) * 10 + str;
		}
	}
	
	function gameStartFnc() {
		let startButtonDiv = document.getElementById("startButtonDiv");

		startButtonDiv.remove();
		
		createCircleFnc();			
	}
	
	function createCircleFnc(){
		let randomNum = Math.floor(Math.random() * 7) + 1;
		const circleList = document.getElementsByClassName("circleImg");
		const newCircle = circleList[randomNum].cloneNode(true);
		newCircle.style.margin = "0";
		const background = document.getElementById("background");
		background.appendChild(newCircle);
		
		window.onkeydown = () => {
			var userKeyCode = "ss";
			const num = event.keyCode;
			if (num == 65) {
				userKeyCode = "A";
			}else if (num == 83) {
				userKeyCode = "S";
			}else if (num == 68) {
				userKeyCode = "D";
			}
			return console.log(userKeyCode);
		};

	}
	
</script>
</head>
<body>
	<div id="screen">
		
		<div id="gameDescription">
			<div id="scoreBoard">
				<span id="score">100</span>점
			</div>
			<div id="gameRule">
				<h3>
					게임 룰
				</h3>
				<p>
					1. 동그라미의 종류는 1~7가 있습니다.
				</p>
				<p>
					2. A, S, D로 작동 합니다.
				</p>
				<p>
					3. 같은 크기의 동그라미가 붙게되면 좀 더 커다란 동그라미가 됩니다.
				</p>
				<p>
					4. 7번째의 동그라미를 만들면 이기게 됩니다.
				</p>
			</div>
			<div id="circleExample">
				<div class="circleImg" style="background-color: red;"></div>
				<div class="circleImg" style="background-color: orange;"></div>
				<div class="circleImg" style="background-color: yellow;"></div>
				<div class="circleImg" style="background-color: green;"></div>
				<div class="circleImg" style="background-color: blue;"></div>
				<div class="circleImg" style="background-color: navy;"></div>
				<div class="circleImg" style="background-color: purple;"></div>
			</div>
		</div>
		<div id="background">
			<div id="startButtonDiv">
				<h1 id="gameTitle">
					수박게임
				</h1>
				<a href="#" id="startButton" onclick="gameStartFnc();">
					START
				</a>
			</div>
			<div id="gameScreen">
			
			</div>
		</div>
		
	</div>
</body>
</html>