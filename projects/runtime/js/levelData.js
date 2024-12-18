var makeLevelData = function (window) {
  window.opspark = window.opspark || {};

  window.opspark.makeDataInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;


    // this data will allow us to define all of the
    // behavior of our game

    // TODO 12: change the below data
    var levelData = [
      {
        name: "Robot Romp",
        number: 1,
        speed: -3,
        gameItems: [
          { type: "knight", x: 800, speed: 6},
          { type: "knight", x: 1500, speed: 7},
          { type: "knight", x: 2200, speed: 7},
          { type: "knight", x: 2900, speed: 6},
          { type: "knight", x: 3500, speed: 5},
          { type: "knight", x: 4400, speed: 6},
          { type: "knight", x: 5700, speed: 7},
          { type: "knight", x: 6600, speed: 5},
          { type: "knight", x: 7100, speed: 7},

          { type: "bat", x: 500, y: 291},
          { type: "bat", x: 900, y: 220},
          { type: "bat", x: 1500, y: 220},
          { type: "bat", x: 1900, y: 291},
          { type: "bat", x: 2500, y: 220},
          { type: "bat", x: 2900, y: 291},
          { type: "bat", x: 3700, y: 291},
          { type: "bat", x: 4600, y: 220},

          { type: "coin", x: 3700, y: 270},

          { type: "levelEnd", x: 10000, y: 260},
        ],


      },
      {
        name: "Robot Rampage",
        number: 2,
        speed: -3,
        gameItems: [
          { type: "knight", x: 1800, speed: 8},
          { type: "knight", x: 11300, speed: 9},
          { type: "knight", x: 12000, speed: 9},
          { type: "knight", x: 12700, speed: 8},
          { type: "knight", x: 13500, speed: 7},
          { type: "knight", x: 14400, speed: 8},
          { type: "knight", x: 15600, speed: 9},
          { type: "knight", x: 16500, speed: 7},
          { type: "knight", x: 17000, speed: 9},

          { type: "bat", x: 1500, y: 291},
          { type: "bat", x: 1900, y: 220},
          { type: "bat", x: 11500, y: 220},
          { type: "bat", x: 11900, y: 291},
          { type: "bat", x: 12500, y: 220},
          { type: "bat", x: 12900, y: 291},
          { type: "bat", x: 13700, y: 291},
          { type: "bat", x: 14600, y: 220},

          { type: "coin", x: 13700, y: 270},

          { type: "levelEnd", x: 110000, y: 260},
        ],
      },
    ];
    window.opspark.levelData = levelData;
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = makeLevelData;
}
