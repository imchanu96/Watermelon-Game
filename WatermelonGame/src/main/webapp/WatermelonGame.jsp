<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>수박 게임</title>
<link rel="stylesheet" href="/WatermelonGame/resources/WatermelonGame.css" type="text/css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.12.0/matter.min.js"></script>

<!-- </script> -->
<script type="text/javascript" src="/WatermelonGame/resources/WatermelonGame.js"></script>
</head>
<body>
	<div id="screen">
		
		<div id="gameDescription">
			<div id="scoreAndKeyboard">
				<div id="scoreBoard">
					<span>SCORE</span>
					<div id="score">1010100</div>
				</div>
				<div id="keyboard">
					<div id="keyboardW">W</div>
					<div id="keyboardA">A</div>
					<div id="keyboardS">S</div>
					<div id="keyboardD">D</div>
				</div>
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