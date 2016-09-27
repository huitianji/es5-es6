//set实现js中的集合运算
//集合运算有三种  并集 交集 差集

let s1 = new Set([1, 2, 3]);

let s2 = new Set([3,4, 5]);

//并集合

let sb = new Set([...s1,...s2]);

console.log(sb);

//交集
//s1.forEach((item) => {
//    s2.has(item)
//});
//变成数组
//[...s1];
//let arr2 = Array.from(s1);
//let sss = [...s1].filter((item) => {
//    return item === 1;
//});

//let sss = [...s1].filter((item) => {
//    return s2.has(item);
//});
let sss = [...s1].filter( item =>  s2.has(item) );

let sj = new Set(sss);

console.log(sj);
//差集

let c = [...s1].filter( item => !s2.has(item));

let cj = new Set(c);

console.log(cj);