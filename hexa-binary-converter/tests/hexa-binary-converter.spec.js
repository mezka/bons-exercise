var assert = require("assert");
var converter = require("../index.js");

describe("binaryStringToHexString", function() {
  it('should output "7F" with input "1111111"', function() {
    assert.equal(converter.binaryStringToHexString("1111111"), "7F");
  });
});

describe("hexStringToBinaryString", function() {
  it('should output "111111110100" with input "FF4"', function() {
    assert.equal(converter.hexStringToBinaryString("FF4"), "111111110100");
  });
});
