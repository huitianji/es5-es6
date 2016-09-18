//forEach(callback[,thisArg])
var arr = ["a","b","c"];
/*
arr.forEach(function(v,i,r){
    //this -> window
    console.log(v,i,r);
});
    */
var obj = {
    print:function(a,b){
        console.log(a,b);
    }
};
arr.forEach(function(v,i,r){
    //this -> obj
    this.print(v,i);
},obj);

//对于不支持es5的浏览器
if(!Array.prototype.forEach){
    Array.prototype.forEach = function(callback,thisArg){
        for(var i = 0,len = this.length;i<len;i++){
            //当thisArg为undefined时，js引擎会将window作为其掉用者
            callback.call(thisArg,this[i],i,this.toString());
        }
    }
}
//--2--filter(callback[,thisArg])
var arr = ["a","b","a","c"];
var newArr = arr.filter(function(item){
    return item == "a";
});
console.log(newArr );

//对不支持es5的浏览器 --filter
if(!Array.prototype.filter){

    Array.prototype.filter = function(callback,thisArg){
        var temp = [];
        for(var i = 0,len = this.length;i<len;i++){
            if(callback.call(thisArg,this[i])){
                //如果callback返回true,则该元素符号过滤条件，将元素压入temp中
                temp.push(this[i]);
            }
        }
        return temp;
    }

}

//--3-**- map(callback[,thisArg]);
var arr = [
    {w:10,h:10},
    {w:15,h:10},
    {w:12,h:10}
];

var newArr = arr.map(function(item){
    //根据长宽计算出面积并赋值给新属性area;
    item.area = item.w * item.h;
    return item;
});
console.log(newArr);
//对不支持es5的浏览器 --map
if(!Array.prototype.map){

    Array.prototype.map = function(callback,thisArg){
        var temp = [];
        for(var i = 0,len = this.length;i<len;i++){
            var newItem = callback.call(thisArg,this[i]);
            // 将callback返回的新元素压入temp中。。
            temp.push(newItem);
        }
        return temp;
    }

}

//--4--reduce(callback[,initialValue])
var arr = [1,2,3,4];
var newArr = arr.reduce(function(previousValue,currentValue,currentIndex,array){
    console.log(previousValue,currentValue,currentIndex);
    return previousValue + currentValue;

});

console.log(newArr + "---");
//1 2 1
//3 3 2
//6 4 3
//10---




























































