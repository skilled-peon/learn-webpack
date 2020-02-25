console.log("hello, demo1!")

let str = require('./a.js')

console.log(str)

require('./index.css')

require('./index.less')

let fn = () => {
    console.log('log')
}

fn()

class A {
    a = 1
}