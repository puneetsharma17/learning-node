const {default: axios} = require('axios')

// Using fetching data from external database
let configObject = {
  method: 'get',
  url: 'https://loveapi.ml/fso/patients.json',
}

axios(configObject).then((response) => {
  console.log('have a blast day')
  console.log(response.data)
  console.log('had a blast day')
})
