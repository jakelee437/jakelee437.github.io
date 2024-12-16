var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        /* Error Checking - DO NOT DELETE */
        if(!app) {
            throw new Error("Invalid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }
        
        // useful variables
        var canvasWidth = app.canvas.width;
        var canvasHeight = app.canvas.height;
        var groundY = ground.y;
        
        // container which will be returned
        var background;
        
        //////////////////////////////////////////////////////////////////
        // ANIMATION VARIABLES HERE //////////////////////////////////////
        //////////////////////////////////////////////////////////////////
        // TODO (several):
      
        var tree
      
        // called at the start of game and whenever the page is resized
        // add objects for display in background. draws each image added to the background once
        function render() {
            background.removeAllChildren();

            // TODO 1:
            // this currently fills the background with an obnoxious yellow;
            // you should modify both the height and color to suit your game
            var backgroundFill = draw.rect(canvasWidth,canvasHeight,'midnightBlue');
            background.addChild(backgroundFill);


            
            // TODO 2: - Add a moon and starfield

            for(var count = 0; count <= 275; count++){
                var circle = draw.circle(Math.random(), "seaShell", "bisque", 2);
                circle.x = canvasWidth * Math.random();
                circle.y = groundY * Math.random();
                background.addChild(circle);
            }

            var moon = draw.bitmap("img/moon.png");
            moon.x = 1400;
            moon.y = 75;
            moon.scaleX = 0.25;
            moon.scaleY = 0.25;
            background.addChild(moon);
    

            
            // TODO 4: Part 1 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
            
            var walls = [];
            for(var i = 0; i < 4; i++){
                var wall = draw.bitmap("img/wallTexture.png");
                wall.x = i * 1080;
                wall.y = groundY;
                wall.scaleX = 0.75;
                wall.scaleY = 0.75;
                background.addChild(wall);
                walls.push(wall);
            }


            // TODO 3: Part 1 - Add a tree

            var blocks = [];
            for(var i = 0; i < 14; i++){
                var block = draw.bitmap("img/wallBlock.png");
                if(i === 0){block.x = 67.5}
                    else{block.x = blocks[i - 1].x + 67.5 * 2}
                block.y = groundY - 67.5;
                block.scaleX = 0.75;
                block.scaleY = 0.75;
                background.addChild(block);
                blocks.push(block);
            }


        } // end of render function - DO NOT DELETE
        
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            // TODO 3: Part 2 - Move the tree!
            
            if(blocks[1].x === 67.5){
                for(var i = 0; i < blocks.length; i++){
                    if(i === 0){block.x = 67.5}
                        else{block.x = blocks[i - 1].x + 67.5 * 2}
                }
            } else{
                for(var i = 0; i < blocks.length; i++){blocks[i].x --;}
            }

            if(walls[1].x === 0){
                for(var i = 0; i < walls.length; i++){wall.x = i * 1080;}
            } else{
                for(var i = 0; i < walls.length; i++){walls[i].x --;}
            }


            // TODO 4: Part 2 - Parallax
            

        } // end of update function - DO NOT DELETE
        
        
        
        /* Make a createjs Container for the background and let it know about the render and upate functions*/
        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        /* make the background able to respond to resizing and timer updates*/
        app.addResizeable(background);
        app.addUpdateable(background);
        
        /* render and return the background */
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}
