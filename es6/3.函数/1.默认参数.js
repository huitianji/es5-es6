"use strict";

function add (x,y = 0) {

    //本质就是语法糖

    //1--
    //if  (!y) {
    //    y = 0;
    //}
    //2--
   // y = y || 0;
    //y || (y = 0);
    //3-- 最安全的写法
    //if (typeof  y === 'undefined') {
    //    y = 0;
    //}

    return x + y;
}

let res = add(1,undefined);
console.log(res);