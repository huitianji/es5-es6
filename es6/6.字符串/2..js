"use strict";

let str = "javascript is the best language!";
//注意这里是4不是5，用从0开始降落
let [isStartWidth, isEndWidth]
    = [str.startsWith("s", 4), str.endsWith('!')];

console.log()