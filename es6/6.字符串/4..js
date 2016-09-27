'use strict';
let x = `x`;
let y = `y`;
let str = tagTemplet`12${x}3${y}`;

function tagTemplet (strArr, ...other) {
    console.log(strArr, other);
    let resStr = strArr[0]*1 + strArr[1]*1;

    return resStr;
}

console.log(str);