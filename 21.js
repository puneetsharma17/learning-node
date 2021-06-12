let userData = require("./userdata")

// console.log(userData)
let l = console.log

// array.filter method : It fillters data
let aboveFortyUsers = userData.filter((element) => {
  //l(element)
  return element.age > 40
})

l("aboveFortyUsers", aboveFortyUsers)
