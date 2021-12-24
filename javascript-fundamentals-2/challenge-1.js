const calcAverage = (x, y, z) => {
  return (x + y + z) / 3
}

const dolphins = calcAverage(44, 23, 71)
const dolphins2 = calcAverage(85,54,41)
const koalas = calcAverage(65, 54, 49)
const koalas2 = calcAverage(23, 34, 27)

console.log(dolphins, dolphins2, koalas, koalas2)

// Check the winner 

function checkWinner(avgDolphins, avgKoalas) {

  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win!`)
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win!`)
  } else {
    console.log('No one wins!')
  }
}

checkWinner(dolphins)
checkWinner(koalas)
checkWinner(dolphins2)
checkWinner(koalas2)
