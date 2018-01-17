function fazzBizzBarr(n) {
  for (var i = 0; i <= n; i++) {
    if (!(i % 3) && !(i % 5) && !(i % 7)) {
      console.log(makeString(i));
    }
  }
}

function makeString(i) {
  var out = i + ": ";

  if (!(i % 3) && !(i % 5) && !(i % 7)) {
    out += "FazzBizzBarr";
  } else if (!(i % 5) && !(i % 3)) {
    out += "FazzBizz";
  } else if (!(i % 7) && !(i % 5)) {
    out += "BizzBarr";
  } else if (!(i % 7) && !(i % 3)) {
    out += "FazzBarr";
  } else if (!(i % 3)) {
    out += "Fazz";
  } else if (!(i % 5)) {
    out += "Bizz";
  } else if (!(i % 5)) {
    out += "Barr";
  }
  return out;
}

fazzBizzBarr(105);

module.exports = {
  makeString: makeString
};
