var assert = require("assert");
var Scheduler = require("../index.js");

var scheduler = new Scheduler();

describe("In the scheduler instance of class Scheduler", function() {
  describe("if try to use the scheduleAt twice with intervals that overlap with each other", function() {
    it("the first scheduleAt should return true", function() {
      var firstDate = new Date(2018, 0, 21, 15, 10, 11, 100);

      assert.equal(scheduler.scheduleAt(firstDate), true);
    });

    it("the second scheduleAt should return false", function() {
      var secondDate = new Date(2018, 0, 21, 15, 20, 11, 100);

      assert.equal(scheduler.scheduleAt(secondDate), false);

      console.log(scheduler.scheduleArr);
    });
  });

  describe("and if we tried to use scheduleAt with an interval that doesn't overlap", function() {
    it("scheduleAt should return true", function() {
      var firstDate = new Date(2018, 0, 21, 15, 30, 11, 100);

      assert.equal(scheduler.scheduleAt(firstDate), true);
    });
  });
});
