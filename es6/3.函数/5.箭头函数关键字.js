//function func () {
//    //setTimeout(function () {
//    //    console.log(this.id);
//    //});
//    setTimeout(() => {
//        console.log(this.id)
//    });
//}

//let obj = {
//    id:123
//}
//
//func.call(obj);

//TODO 这是箭头函数关键字的运用
let obj = {
    id:"123",
    func1:function () {
        setTimeout(function () {
            console.log(this.id);
        });
    },
    func2:function () {
        //this -> 运行时候的obj
        setTimeout(() => {
            console.log(this.id);
        });
    },
    func3:() => {
        //this -》定义时候的 window  --定义的时候obj 大环境是window
        setTimeout(() => {
            console.log(this.id);
        });
    }
}

obj.func1();
obj.func2();
obj.func3();