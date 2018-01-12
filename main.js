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
//

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

