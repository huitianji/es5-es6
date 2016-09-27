//

//is

//Object.is   比较严格的判断

let ap = Object.is(+0, -0);
console.log(ap);//falses
console.log(+0 === -0);//true
console.log({} === {});//false比较的是地址
console.log(Object.is({}, {}));//比较的是地址

console.log(NaN === NaN);

//