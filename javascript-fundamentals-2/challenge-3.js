const mark = {
  firstName: 'Mark',
  lastName: 'Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2
    return this.BMI
  },
}

const john = {
  firstName: 'John',
  lastName: 'Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2
    return this.BMI
  },
}

if (mark.calcBMI() > john.calcBMI()) {
  console.log(`${mark.firstName}'s BMI (${mark.BMI}) is higher than ${john.firstName}'s (${john.BMI})`)
} else if (john.calcBMI() > mark.calcBMI()) {
  console.log(`${john.firstName}'s BMI (${john.BMI}) is higher than ${mark.firstName}'s (${mark.BMI})`)
}
