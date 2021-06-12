// const {default: axios} = require('axios')
let axios = require('axios')

// ? Using fetching data from external database

let configObject = {
  method: 'get',
  url: 'https://loveapi.ml/fso/patients.json',
}

let myAsync1 = async () => {
  let response = await axios(configObject)

  console.log('have a blast day')
  console.log(response.data)
  console.log('had a blast day')
}

myAsync1()
//
