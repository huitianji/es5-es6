"use strict";


//对象结构赋值
let obj = {
    a:"a",
    b:"b",
    c:"c",
    arr:[1, 2, 3]
};

let {a, b, c, arr:[, , x]} = obj;
//let {a:x, b:y, c:z} = obj;
console.log(a, b, c, x);
