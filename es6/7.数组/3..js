//Array.copyWith
//功能就是把数组的某一块复制到另一块
//target  是被覆盖的的下标
//start 截取的开始下标
//end   截取结束的下标的后一个
//Array.prototype.copyWithin(target, start = 0,end = this.length);

let arr = [1, 2, 3, 4, 5];

arr.copyWithin(0,0,2);
console.log(arr);

