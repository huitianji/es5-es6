"use strict";

//function add(...arg) {
//    let res = 0;
//    for (let i = 0, len = arg.length; i< len; i++) {
//        res += i;
//    }
//    return res;
//}
//
//let res = add(1,2,3,4,5);
//console.log(res);

//function add(a,...arg) {
//    let res = 0;
//   //8 res += a;
//    for (let i = 0, len = arguments.length; i<= len; i++) {
//        res += i;
//    }
//    return res;
//}
//
//let res = add(1,3,4,5);
//console.log(res);



///--3--
function add(a, ...arg) {
    let res = 0;
    res += a;
    for (let i = arg.length - 1; i>=0; i--) {
        res += arg[i];
    }
    return res;
}

let res = add(1, 3, 4, 5);
//
// console.log(res);

//--求最大值


//let s = Math.max(1, 2, 3);

let arr = [1,5,10,2];
//let a = Math.max.apply(null, arr);

let a = Math.max(...arr);

console.log(a);











