<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>수박 게임</title>
<style type="text/css">
	#background{
		width: 600px;
		height: 800px;
		background-color: #8eedb1;
		margin: auto;
		text-align: center;
	}
	#gameTitle{
		width: 200px;
		height: 100px;
		margin:auto;
	}
	#startButtonDiv{
		width: inherit;
		height: 150px;
		margin: 150px auto;
		
	}
	#startButton{
		text-decoration: none;
		font-size: 100px;
	}
</style>
<script type="text/javascript">
	function gameStartFnc(){
		let tagObjectList = document.getElementById("background").children;
		let tagObjectListLength = tagObjectList.length;
		for (var i = 0; i < tagObjectListLength; i++) {
			tagObjectList[0].remove();
		}
	}
</script>
</head>
<body>
	<div id="background">
		<h1 id="gameTitle">
			수박게임
		</h1>
		<div id="startButtonDiv">
			<a href="#" id="startButton" onclick="gameStartFnc();">
				START
			</a>
		</div>
	</div>
</body>
</html>