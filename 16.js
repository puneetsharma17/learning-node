let a
let b = true
let c = 3
let d = 'Luxmi Enclave'
let e = 2n ** 53n
let f = Symbol('Sam')
let myobject = {firstname: 'Sahil', lastname: 'Raput'}
let mynull = null

let l = console.log

l('a', typeof a)
l('b', typeof b)
l('c', typeof c)
l('d', typeof d)
l('e', typeof e)
l('f', typeof f)
l('myobject', typeof myobject)
l('mynull', typeof mynull)

// equality operator ===
l(typeof a === 'undefined')
l(typeof b === 'boolean')
l(typeof c === 'number')
l(typeof d === 'string')
l(typeof e === 'bigint')
l(typeof f === 'symbol')
l(typeof myobject === 'object')
l(typeof mynull === 'object')
l(mynull === null)
