// what century is it 
// takes in a year
// returns the century
// ex  1700 ---> 17
//     1701 ---> 18
//     1905 ---> 20



function centuryFromYear (year) {
  var stringYear = year.toString();
  var century = parseInt(stringYear.slice(0,(stringYear.length-2)));

  if (parseInt(stringYear.slice(-2)) > 0) {
    return century+1;
  } else {
      return century;
    }
  }






