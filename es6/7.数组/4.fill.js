//Array.fill
let arr = [1, 2, 3, 4, 5];

arr.fill('a',2,4);

console.log(arr);

// find  findIndex

let arr2 = [1, 2, 3, 4];

let res = arr.find((item, index,array) => {
    return item === "1";
});

let res2 = arr.findIndex((item, index,array) => {
    return item === 1;
});

console.log(res2);