//
//去重 操作
let s = new Set([+NaN,-NaN,+0,-0]);
console.log(s, s.size, s.length);//Set { NaN, 0 }
//输入。传进的参数
//输出。参数的返回值
//s.add();
//s.delete(obj);
//let res = s.has(obj);//falseq
//
//let ents = s.entries();//

//数组去重复
//1.把数组放到set里面
//2.set自动去重
//3.把set放回数组里
let arr = [1, 2, 3, 4, 5, 5, 2];

let newArr = new Set(arr);//new Set([...arr])

let arr2 = Array.from(newArr);

console.log(newArr,arr2);