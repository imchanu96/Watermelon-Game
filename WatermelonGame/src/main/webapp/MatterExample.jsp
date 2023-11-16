<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script src="https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.17.1/matter.js"></script>
</head>
</head>
<body>
    <!-- Your canvas element for rendering Matter.js objects -->
    <canvas id="myCanvas" width="800" height="600"></canvas>

    <script>
        // Matter.js setup
        const Engine = Matter.Engine;
        const Render = Matter.Render;
        const World = Matter.World;
        const Bodies = Matter.Bodies;

        // Create an engine
        const engine = Engine.create();

        // Create a renderer
        const render = Render.create({
            element: document.body,
            engine: engine,
            options: {
                width: 800,
                height: 600,
            }
        });

        // Create some bodies (e.g., rectangles)
        const boxA = Bodies.rectangle(400, 200, 80, 80);
        const boxB = Bodies.rectangle(450, 50, 80, 80);
        const ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

        // Add the bodies to the world
        World.add(engine.world, [boxA, boxB, ground]);

        // Run the engine
        Engine.run(engine);

        // Run the renderer
        Render.run(render);
    </script>
</body>
</html>