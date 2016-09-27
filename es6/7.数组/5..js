//
let arr = [1, 'a', '1', 2];
let res = arr.indexOf(8);

let res2 = arr.includes("a");

if(res == -1){

}

//console.log(res,res2);

//迭代器
let arrKeys = arr.keys();
for (let item of arrKeys) {
        console.log(item)
}