let userData = require('./userdata')

// console.log(userData)
let l = console.log

// array.filter method : It fillters data
let catsNameUsers = userData.filter((element) => {
  //l(element)
  return element.secondName.toLowerCase() === 'cat'
  //                            ^ this converts to lower case
})

l('cats name users', catsNameUsers)
