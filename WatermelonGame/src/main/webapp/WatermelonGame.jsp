<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>수박 게임</title>
<link rel="stylesheet" href="/WatermelonGame/resources/WatermelonGame.css" type="text/css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.17.1/matter.js"></script>
<script type="text/javascript" src="/WatermelonGame/resources/WatermelonGame.js"></script>

</head>
<body>
	<div id="screen">
		<div id="gameDescription">
			<div id="scoreAndKeyboard">
				<div id="scoreBoard">
					<span>SCORE</span>
					<div id="score">0</div>
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
					<br>
					&nbsp;&nbsp;&nbsp;&nbsp; - A : 좌로 이동
					<br>
					&nbsp;&nbsp;&nbsp;&nbsp; - S : 동그라미 떨구기
					<br>
					&nbsp;&nbsp;&nbsp;&nbsp; - D : 우로 이동
				</p>
				<p>
					3. 같은 크기의 동그라미가 붙게되면 좀 더 커다란 동그라미가 됩니다.
				</p>
				<p>
					4. 7번째의 동그라미 두개가 합치면됩니다.
				</p>
			</div>
			<div id="circleExample">
				<div class="circleImgDescription">1단계 : 빨간색
					<div class="circleImg" style="background-color: red;"></div>
				</div>
				<div class="circleImgDescription">2단계 : 주황색
					<div class="circleImg" style="background-color: orange;"></div>
				</div>
				<div class="circleImgDescription">3단계 : 노란색
					<div class="circleImg" style="background-color: yellow;"></div>
				</div>
				<div class="circleImgDescription">4단계 : 초록색
					<div class="circleImg" style="background-color: green;"></div>
				</div>
				<div class="circleImgDescription">5단계 : 파란색
					<div class="circleImg" style="background-color: blue;"></div>
				</div>
				<div class="circleImgDescription">6단계 : 남색
					<div class="circleImg" style="background-color: navy;"></div>
				</div>
				<div class="circleImgDescription">7단계 : 보라색
					<div class="circleImg" style="background-color: purple;"></div>
				</div>
				<div class="circleImgDescription">7단계 합친 수
					<div id="maxCircle">0</div>
				</div>
			</div>
		</div>
		<img alt="" src="">
		<div id="background">
			<div id="startButtonDiv">
				<h1 id="gameTitle">
					수박게임
				</h1>
				<a href="#" id="startButton" onclick="gameStartFnc();">
					START
				</a>
			</div>
		</div>
		
	</div>
</body>

</html>