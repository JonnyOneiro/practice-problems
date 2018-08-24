var board = {
  a:0,
  b:1,
  c:2,
  d:3,
  e:4,
  f:5,
  g:6,
  h:7
};

function getColorOfSquare (coordinatesOfSquare) {
  var coord1 = board[coordinatesOfSquare.charAt(0)];
  var coord2 = parseInt(coordinatesOfSquare.charAt(1));
  var square = coord1 + coord2;
  
  if (square % 2) {
    return "white"
  } else {
    return "black"
  }
}

console.log (getColorOfSquare("b2"));
