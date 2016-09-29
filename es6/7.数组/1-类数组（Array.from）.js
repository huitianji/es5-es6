//把类数组转化成数组   Array.from
//同时也可以复制数组,引用类型的问题 --改变arr 也同时改变arr2
//复制数组。。改变arr 也同时改变arr2
//let arr = [1, 2, 3];
//arr[0] = 'f';
//let arr2 = arr;
//
//console.log(arr2,arr);//[ 'f', 2, 3 ] [ 'f', 2, 3 ]

//数字的复制。。

//
//let arr = [1, 2, 3];
//let arr2 = arr.slice(0);//复制数组
//
//arr[0] = "f";
//console.log(arr,arr2);

//前copy
//复制有深copy和浅copy
//
//let arr = [1, 2, 3];
////挂在静态类上的
//let arr2 = Array.from(arr);
//
//arr[0] = "ff";
//console.log(arr,arr2);
/*2*/
let obj = {
    a: "a",
    b: "b"
}
let arr = [1, 2, obj];//1,2是第一层。所以叫浅copy
//挂在静态类上的
let arr2 = Array.from(arr);

//arr[0] = "ff";
obj.c = "c";

console.log(arr,arr2);
//
//let bdEle = document.querySelectorAll('body');
//
//let bdEle2 = Array.from(bdEle || []);
