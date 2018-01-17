function anyBaseToDec(sBase, baseNumber) {
  //domain is from baseNumber 2 to baseNumber 16, if we extend key then we can make it higher

  var key = {
    "0": 0,
    "1": 1,
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15
  };

  var aBase = sBase.split("");

  var sum = 0;

  for (var i = 0; i < aBase.length; i++) {
    sum += key[aBase[i]] * Math.pow(baseNumber, aBase.length - 1 - i);
  }

  return sum;
}

function base10ToBaseX(from, to) {
  //domain is from base 2 to base 36

  var key = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z"
  ];

  var out = [];

  while (from > to) {
    out.push(key[from % to]);
    from = Math.floor(from / to);
  }

  out.push(key[from]);

  return out.reverse().join("");
}

function hexStringToBinaryString(hex) {
  return base10ToBaseX(anyBaseToDec(hex, 16), 2);
}

function binaryStringToHexString(binary) {
  return base10ToBaseX(anyBaseToDec(binary, 2), 16);
}

binaryStringToHexString("101101");

module.exports = {
  hexStringToBinaryString: hexStringToBinaryString,
  binaryStringToHexString: binaryStringToHexString
};
