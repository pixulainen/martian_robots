module.exports = class MartianRobot {
  constructor(location, orientation, map) {
    this.location = location === undefined ? [0, 0] : location;
    this.orientation = orientation === undefined ? "N" : orientation;
    this.map = map === undefined ? [50, 50] : map;
    this.location = {
      x: this.location[0],
      y: this.location[1],
    };
    this.commands = function (commands) {
      for (let command of commands) {
        if (command === "L" || command === "R") {
          this.turn(command);
        }
        if (command === "F") {
          this.move(command);
        }
      }
      console.log(this.location);
    };
  }

  turnLeft() {
    switch (this.orientation) {
      case "N":
        this.orientation = "W";
        break;
      case "S":
        this.orientation = "E";
        break;
      case "E":
        this.orientation = "N";
        break;
      case "W":
        this.orientation = "S";
        break;
    }
  }

  turnRight() {
    switch (this.orientation) {
      case "N":
        this.orientation = "E";
        break;
      case "S":
        this.orientation = "W";
        break;
      case "E":
        this.orientation = "S";
        break;
      case "W":
        this.orientation = "N";
        break;
    }
  }

  turn(command) {
    if (command === "L") {
      this.turnLeft();
    }
    if (command === "R") {
      this.turnRight();
    }
  }

  move(command) {
    if (this.orientation === "N" && command === "F") {
      this.location.y++;
    }
    if (this.orientation === "S" && command === "F") {
      this.location.y--;
    }
    if (this.orientation === "W" && command === "F") {
      this.location.x--;
    }
    if (this.orientation === "E" && command === "F") {
      this.location.x++;
    }
  }
};
