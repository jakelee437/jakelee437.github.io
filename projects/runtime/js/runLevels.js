var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE

    var hitZoneSize = 25;
    var damageFromObstacle = 10;
    var knightHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);

    knightHitZone.x = 900;
    knightHitZone.y = 350;
    game.addGameItem(knightHitZone);

    var obstacleImage = draw.bitmap("img/knight.png");
    obstacleImage.x = 300;
    obstacleImage.y = 900;
    obstacleImage.scaleX = -0.25;
    obstacleImage.scaleY = 0.25;
    knightHitZone.addChild(obstacleImage);

    function startLevel() {
      // TODO 13 goes below here



      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
