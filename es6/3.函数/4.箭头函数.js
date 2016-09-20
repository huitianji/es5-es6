"use strict";

//定义一个匿名函数

let func = function (a) {
    return a + 1;
}

let func2 = (a) => {
    return a + 1;
}

let func3 = (a) => a + 1;

let res1 = func(1);
let res2 = func2(2);
let res3 = func3(3);

//console.log(res1, res2, res3);

//
let arr = [1, 3, 4, 5];

//let involution = function (arr) {
//
//}

let r = arr.map(function (item,index,arr) {
    return item*item;
});

let r1 = arr.map((item,index,arr) => item*item);

let r2 = arr.map( item => item*item );

console.log(r,r1);


