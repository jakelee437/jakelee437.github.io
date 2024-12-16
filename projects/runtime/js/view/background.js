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
            
            var wallA = draw.bitmap("img/wallTexture.png");
            wallA.x = 0;
            wallA.y = groundY;
            wallA.scaleX = 0.75;
            wallA.scaleY = 0.75;
            background.addChild(wallA);

            var wallB = draw.bitmap("img/wallTexture.png");
            wallB.x = 1080;
            wallB.y = groundY;
            wallB.scaleX = 0.75;
            wallB.scaleY = 0.75;
            background.addChild(wallB);

            var wallC = draw.bitmap("img/wallTexture.png");
            wallC.x = 1080 * 2;
            wallC.y = groundY;
            wallC.scaleX = 0.75;
            wallC.scaleY = 0.75;
            background.addChild(wallC);

            // TODO 3: Part 1 - Add a tree
            
            var blockA = draw.bitmap("img/wallBlock.png");
            blockA.x = 67.5;
            blockA.y = groundY - 67.5;
            blockA.scaleX = 0.75;
            blockA.scaleY = 0.75;
            background.addChild(blockA);

            var blockB = draw.bitmap("img/wallBlock.png");
            blockB.x = 67.5 * 3;
            blockB.y = groundY - 67.5;
            blockB.scaleX = 0.75;
            blockB.scaleY = 0.75;
            background.addChild(blockB);

            var blockC = draw.bitmap("img/wallBlock.png");
            blockC.x = 67.5 * 5;
            blockC.y = groundY - 67.5;
            blockC.scaleX = 0.75;
            blockC.scaleY = 0.75;
            background.addChild(blockC);

            var blockD = draw.bitmap("img/wallBlock.png");
            blockD.x = 67.5 * 7;
            blockD.y = groundY - 67.5;
            blockD.scaleX = 0.75;
            blockD.scaleY = 0.75;
            background.addChild(blockD);

            var blockE = draw.bitmap("img/wallBlock.png");
            blockE.x = 67.5 * 9;
            blockE.y = groundY - 67.5;
            blockE.scaleX = 0.75;
            blockE.scaleY = 0.75;
            background.addChild(blockE);

            var blockF = draw.bitmap("img/wallBlock.png");
            blockF.x = 67.5 * 11;
            blockF.y = groundY - 67.5;
            blockF.scaleX = 0.75;
            blockF.scaleY = 0.75;
            background.addChild(blockF);

            var blockG = draw.bitmap("img/wallBlock.png");
            blockG.x = 67.5 * 13;
            blockG.y = groundY - 67.5;
            blockG.scaleX = 0.75;
            blockG.scaleY = 0.75;
            background.addChild(blockG);

            var blockH = draw.bitmap("img/wallBlock.png");
            blockH.x = 67.5 * 15;
            blockH.y = groundY - 67.5;
            blockH.scaleX = 0.75;
            blockH.scaleY = 0.75;
            background.addChild(blockH);

            var blockI = draw.bitmap("img/wallBlock.png");
            blockI.x = 67.5 * 17;
            blockI.y = groundY - 67.5;
            blockI.scaleX = 0.75;
            blockI.scaleY = 0.75;
            background.addChild(blockI);

            var blockJ = draw.bitmap("img/wallBlock.png");
            blockJ.x = 67.5 * 19;
            blockJ.y = groundY - 67.5;
            blockJ.scaleX = 0.75;
            blockJ.scaleY = 0.75;
            background.addChild(blockJ);

            var blockK = draw.bitmap("img/wallBlock.png");
            blockK.x = 67.5 * 21;
            blockK.y = groundY - 67.5;
            blockK.scaleX = 0.75;
            blockK.scaleY = 0.75;
            background.addChild(blockK);

            var blockL = draw.bitmap("img/wallBlock.png");
            blockL.x = 67.5 * 23;
            blockL.y = groundY - 67.5;
            blockL.scaleX = 0.75;
            blockL.scaleY = 0.75;
            background.addChild(blockL);

            var blockM = draw.bitmap("img/wallBlock.png");
            blockM.x = 67.5 * 25;
            blockM.y = groundY - 67.5;
            blockM.scaleX = 0.75;
            blockM.scaleY = 0.75;
            background.addChild(blockM);

        } // end of render function - DO NOT DELETE
        
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            // TODO 3: Part 2 - Move the tree!
            wallA.x = wallA.x - 1;
            wallB.x --;
            wallC.x --;
            
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
