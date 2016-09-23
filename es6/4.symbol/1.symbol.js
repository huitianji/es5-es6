//mdn symbol   是javascript第7个数据类型
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol
//https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol
//http://caniuse.com/#feat=webgl
//can i use   兼容性网站

//解决js的缺陷问题
//dom 任何类库都可以修改  写一个动画里面用到x,y..别人写一个移动的。也用到x,y这样就容易把人家的x,y给覆盖。。、symbol就是解决这个问题

//let ele = document.querySelector('#li');
//
//ele.x = 123;
//ele.y = 456;

//
let sybx = Symbol('subx');
let syby = Symbol('suby');
//console.log(syb1,syb2,syb2 == syb1);
//console.log(typeof syb1,syb1.toString() === syb2.toString());
//let ele = document.querySelector("#li");
let ele = {};

ele[sybx] = 123;
ele[syby] = 456;
console.log(ele);

