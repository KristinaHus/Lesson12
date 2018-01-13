// // Default parameters
// var options = function (height, width, color) {
//   var height = height || 50
//   var width = width || 50
//   var color = color || 'red'
// }
//
// var options = function (height = 50, width = 50, color = 'red') {
//
// }
//
// //Template literals
// var greating = 'Hello, ' + firstName + lastName + '!'
// var url = 'http://google/' + id + '/' + category + '/' + title
//
// var greating = `Hello ${firstName} ${lastName}`
// var url = `http://google/${id}/${category}/${title}`
//
//
// //Multi-line strings
// var text = 'Then took the other, as just as fair,\n'
//   + 'And having perhaps the better claim\n'
//   + 'Because it was grassy and wanted wear,\n'
//   + 'Though as for that the passing there\n'
//   + 'Had worn them really about the same,\n'
//
// var text = `Then took the other, as just as fair,
//     And having perhaps the better claim
//     Because it was grassy and wanted wear,
//     Though as for that the passing there
//     Had worn them really about the same,`

//Destructing assignments
console.log(document.getElementById('input'))
document.getElementById('input').addEventListener('input', handleInputChane)

// function handleInputChane (event) {
//   console.dir(event)
//   var data = event.data
//   var type = event.type
//
//   var value = event.target.value
//   var offsetHeight = event.target.offsetHeight
//   console.log(data, type, value, offsetHeight)
// }

function handleInputChane ({data, type, target: {value, offsetHeight}}) {
  console.log(data, type, value, offsetHeight)
}

var jsonMiddleware = require('body-parser').json
var {json: jsonMiddleware} = require('body-parser')

//Block-Scoped Constructs Let and Const
// function bar () {
//   if (!foo) {
//     var foo = 10
//   }
//   console.log(foo)
// }
// bar()
//
// function baz () {
//   if (!foo) {
//     let foo = 10
//   }
//   console.log(foo)
// }
// baz()

// function fruits () {
//   var fruit = 'Apple'
//   if (true) {
//     console.log('First', fruit)
//     let fruit = 'Orange'
//     console.log('Second', fruit)
//   }
//   console.log('Third', fruit)
// }
// fruits()

// for (let i = 0; i < 2; i++) {
//   console.log(i)
// }
// console.log('outside loop', i)
//
// for (var i = 0; i < 2; i++) {
//   console.log(i)
// }
// console.log('outside loop', i)

// const one = 'one'
// one = '1'
// console.log(one)

// const arr = []
// // arr = ['one']
// arr.push('one')
// console.log(arr)

// //Spred operator
// let numbers = [1, 2, 3]
// // console.log(...numbers)
//
//   //copy array
// let newNumbers = [...numbers]
// // console.log(newNumbers)
//
//   //concat array
// let conctedNumbers = [...numbers, ...newNumbers]
// // console.log(conctedNumbers)
//
//   // Objects
// let obj1 = { foo: 'bar', x: 42 }
// let obj2 = { foo: 'baz', y: 13 }
//
// let clonedObj = { ...obj1 }
// // console.log(clonedObj)
//
// let mergedObj = { ...obj1, ...obj2 }
// // console.log(mergedObj)
//
// let addToObj = {...mergedObj, name: 'Kina'}
// console.log(addToObj)

// //Arrow functions
// var _this = this
// document.getElementById('input').addEventListener('input', function (hendleInput) {
//   _this.someFunction()
// })
//
// document.getElementById('input').addEventListener('input', function (hendleInput) {
//   this.someFunction()
// })
//
// let array = ['1', '2', '3', '4']
// let number = array.find(function (element) {
//   return element === '3'
// })
//
// let number = array.find(element => element === '3')

// //Promise
// function userUpdate (user) {
//   return new Promise((resolve, reject) => {
//     user.name = 'Vasya'
//     if (user.age > 18) {
//       user.adult = true
//       resolve(user)
//     } else {
//       reject('To young')
//     }
//
//   })
// }
//
// userUpdate({age: 19})
//   .then(user => {
//     console.log(user)
//   })
//   .catch(err => {
//     console.log(err)
//   })
