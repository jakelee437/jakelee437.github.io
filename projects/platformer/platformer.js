$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the drawGrid() function call below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can help you determine specific x any y values throughout the game
     * Comment the function call out to remove the grid
     */

    //drawGrid();

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)
    createPlatform(0, 500, 500, 500);
    createPlatform(750, 400, 300, 25);
    createPlatform(500, 600, 100, 250);
    createPlatform(600, 700, 100, 250);
    createPlatform(1025, 600, 25, 500);
    createPlatform(1025, 400, 25, 50);
    createPlatform(1020, 651, 5, 4);
    createPlatform(1021, 640, 4, 4);
    createPlatform(1021, 630, 4, 4);
    createPlatform(1021, 620, 4, 4);
    createPlatform(1021, 610, 4, 4);
    createPlatform(1021, 600, 4, 4);
    createPlatform(1021, 660, 4, 4);
    createPlatform(1021, 670, 4, 4);
    createPlatform(1021, 680, 4, 4);
    createPlatform(1021, 690, 4, 4);
    createPlatform(1021, 700, 4, 4);
    createPlatform(1021, 710, 4, 4);
    createPlatform(1021, 720, 4, 4);
    createPlatform(1021, 730, 4, 4);
    createPlatform(1300, 620, 100, 4);
    createPlatform(1300, 490, 100, 4);
    createPlatform(1300, 360, 100, 4);
    createPlatform(1300, 230, 100, 4);
    createPlatform(1375, 100, 25, 4);
    createPlatform(1000, 100, 300, 4);
    createPlatform(100, 250, 1100, 4);
    createPlatform(100, 0, 4, 250);
    createPlatform(1196, 100, 4, 500);

    
    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)

    createCollectable('database', 900, 435, 0, 0);
    createCollectable('max', 1100, 150, 0, 0);
    createCollectable('grace', 150, 150, 0, 0);

    
    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)

    createCannon('left', 102, 1200, 10, 10);
    createCannon('left', 675, 1200, 10, 10);
    createCannon('bottom', 860, 1200, 10, 10);

    
    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
