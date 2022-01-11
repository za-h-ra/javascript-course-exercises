let numbers1 = [17, 23, 21]
let numbers2 = [12, 5, -5, 0, 4]

function printForecast(arr) {
  let str = ''
  for (let i = 0; i < arr.length; i++) {
    str += `... ${arr[i]}°C in ${i + 1} days `
  }
  console.log(str + '...')
}

printForecast(numbers2)

// print "..17C in 1 days ... 21C in 2 days ... 23C in 3 days .."
// add a string everytime element added to object
