var assert = require("assert");
var fazzBizzBarr = require("../index.js");

describe("makeString", function() {
  it('should take a number, multiples of 3 output Fazz, multiple of 5 output Bizz, multiples of 7 output Barr. Multiples of several of these output each word in turn on the same line (for example, line 21 should output "Fazz Barr")', function() {
    assert.equal(fazzBizzBarr.makeString(21), "21: FazzBarr");
  });
});
