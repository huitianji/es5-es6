
"use strict";

let x = 1;
function add(x,y) {
    x = 3;
    return x + y;
}

let res = add(1,2);
console.log(res,x);//5