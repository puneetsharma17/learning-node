let cars = ["maruti", "Ferrari", "BMW", "Audi"]
let l = console.log

l(cars)

let newcars = cars.map((element) => {
  return element + " Power"
})

l(newcars[1])
l(newcars)
