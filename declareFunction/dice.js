  var numberRolls = process.argv[2];
  var arrayRolls = [];

function randomRolls(numberRolls) {

  for (var i = 0; i < numberRolls; i++) {
    arrayRolls.push(Math.floor(Math.random()*6) + 1);
    /*console.log(arrayRolls.push(Math.floor(Math.random()*6)));*/
  }


  console.log('Return ' + numberRolls + ' dice: ' + arrayRolls.join(', '));
}
randomRolls(numberRolls);

