const MartianRobot = require("../MartianRobot");
describe("Martian Robot", () => {
  describe("you are given the initial starting point (x,y) of a robot and the direction it is facing", function () {
    it("should set starting location", function () {
      const mr = new MartianRobot();
      expect(mr.location.x).toBe(0);
      expect(mr.location.y).toBe(0);
    });
    it("should create a robot with a  starting location", function () {
      const mr = new MartianRobot([1, 1]);
      expect(mr.location.x).toBe(1);
      expect(mr.location.y).toBe(1);
    });
    it("should set the position facing north when no position is passed", function () {
      const mr = new MartianRobot([1, 1]);
      expect(mr.orientation).toEqual("N");
    });
    it("should set the corect position when position is passed", function () {
      const mr = new MartianRobot([1, 1], "E");
      expect(mr.orientation).toEqual("E");
    });
  });

  describe("You are given the initial starting point of a robot the direction  it is facing and a list of commands", function () {
    it("should change direction from N to W when command is to turn left ", function () {
      const mr = new MartianRobot([1, 1], "N");
      mr.turn("L");
      expect(mr.orientation).toEqual("W");
    });
    it("should change direction from W to S when command is to turn left ", function () {
      const mr = new MartianRobot([1, 1], "W");
      mr.turn("L");
      expect(mr.orientation).toEqual("S");
    });
    it("should change direction from S to E when command is to turn left ", function () {
      const mr = new MartianRobot([1, 1], "S");
      mr.turn("L");
      expect(mr.orientation).toEqual("E");
    });
    it("should change direction from E to N when command is to turn left ", function () {
      const mr = new MartianRobot([1, 1], "E");
      mr.turn("L");
      expect(mr.orientation).toEqual("N");
    });
    it("should change direction from N to E when command is to turn right ", function () {
      const mr = new MartianRobot([1, 1], "N");
      mr.turn("R");
      expect(mr.orientation).toEqual("E");
    });
    it("should change direction from E to S when command is to turn right ", function () {
      const mr = new MartianRobot([1, 1], "E");
      mr.turn("R");
      expect(mr.orientation).toEqual("S");
    });
    it("should change direction from S to W when command is to turn right ", function () {
      const mr = new MartianRobot([1, 1], "S");
      mr.turn("R");
      expect(mr.orientation).toEqual("W");
    });
    it("should change direction from W to N when command is to turn right ", function () {
      const mr = new MartianRobot([1, 1], "W");
      mr.turn("R");
      expect(mr.orientation).toEqual("N");
    });
  });
  describe("You are given the initial starting point of a robot the direction  it is facing and a list of commands", function () {
    it("should increase  the robot location Y  if command is forward F and orientation is N ", function () {
      const mr = new MartianRobot([1, 1], "N");
      mr.move("F");
      expect(mr.location.x).toBe(1);
      expect(mr.location.y).toBe(2);
    });
    it("should decrease  the robot location Y  if command is forward F and orientation is S ", function () {
      const mr = new MartianRobot([1, 1], "S");
      mr.move("F");
      expect(mr.location.x).toBe(1);
      expect(mr.location.y).toBe(0);
    });
    it("should decrease  the robot location X  if command is forward F and orientation is W ", function () {
      const mr = new MartianRobot([1, 1], "W");
      mr.move("F");
      expect(mr.location.x).toBe(0);
      expect(mr.location.y).toBe(1);
    });
    it("should increase  the robot location X  if command is forward F and orientation is E ", function () {
      const mr = new MartianRobot([1, 1], "E");
      mr.move("F");
      expect(mr.location.x).toBe(2);
      expect(mr.location.y).toBe(1);
    });
  });
  describe("You are given the initial starting point of a robot the direction  it is facing and a list of commands", function () {
    it("should receive list of commands and move the robot ", function () {
      const mr = new MartianRobot([1, 1], "E");
      mr.commands("RFRFRFRF");
      expect(mr.location.y).toBe(1);
      expect(mr.location.x).toBe(1);
      expect(mr.orientation).toEqual("E");
    });
  });
});
