// // var _this = this
//
// document.getElementById('input').addEventListener('input', function (event) {
//   _this.doSomething()
// })
//
// document.getElementById('input').addEventListener('input', event => {
//   this.doSomething()
// })
//
// let array = ['1', '2', '3', '4']
// let number = array.find(function (element) {
//   return element === '3'
// })
//
// let number = array.find(elemen => element === '3')

// function bar (width, height,color) {
//   width = width || 50
//   height = height || 60
//   color = color || 'red'
//   console.log(width, height, color)
// }
//
// function baz (width = 50, height = 60, color = 'red') {
//   console.log(width, height, color)
// }
//
// bar()
// baz()

// var text = 'Then took the other, as just as fair,\n'
//   + 'And having perhaps the better claim\n'
//   + 'Because it was grassy and wanted wear,\n'
//   + 'Though as for that the passing there\n'
//   + 'Had worn them really about the same,\n'
//
// var url  = 'http://google/' + id + '/' + category + '/'
//
// var text = `Then took the other, as just as fair,
//     And having perhaps the better claim
//     Because it was grassy and wanted wear,
//     Though as for that the passing there
//     Had worn them really about the same,`
//
// let url = `http://google/${id}/${category}/`

// document.getElementById('input').addEventListener('input', handleInputChane)

// function handleInputChane (event) {
//   console.dir(event)
//   var data = event.data
//   var type = event.type
//
//   var value = event.target.value
//   var offsetHeight = event.target.offsetHeight
//   console.log(data, type, value, offsetHeight)
// }

// function handleInputChane ({data, type, target, target: {value, offsetHeight}}) {
//   console.log(target, data, type, value, offsetHeight)
// }

// //   // Objects
// let obj1 = { foo: 'bar', x: 42 }
// let obj2 = { foo: 'baz', y: 13 }
//
// // let clonedObj = { ...obj1 }
// // console.log(clonedObj)
//
// let mergedObj = { ...obj1, ...obj2 }
// console.log(mergedObj)
// //
// let addToObj = {...mergedObj, name: 'Kina'}
// console.log(addToObj)

// function bar () {
//   var foo
//   if (!foo) {
//     foo = 10
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
//     // console.log('First', fruit)
//     let fruit = 'Orange'
//     console.log('Second', fruit)
//   }
//   console.log('Third', fruit)
// }
// fruits()
// for (var i = 0; i < 10; i++) {
//   console.log(i)
// }
// console.log('outside loop', i)
//
// for (let i = 0; i < 8; i++) {
//   console.log(i)
// }
// console.log('outside loop', i)
// //

// const array = []
// array.push(1)
//
// console.log(array)


function userUpdate (user) {
  return new Promise((resolve, reject) => {
    user.name = 'Vasya'
    if (user.age > 18) {
      user.adult = true
      resolve(user)
    } else {
      reject('To young')
    }

  })
}

userUpdate({age: 19})
  .then(user => {
    console.log(user)
  })
  .catch(err => {
    console.log(err)
  })






























































