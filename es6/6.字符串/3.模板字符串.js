let str = "";
//单引号需要转义。双引号不需要转义
let htmlStr = '<div>123\<\
        /div>\
        ';
//es6  字符串   ``  特殊的写法
//${}\这三个需要专业
let es6Str = `\$\{
            \}\\fafafaf`;
//console.log(es6Str,htmlStr);

let a = `abc`;

let es6Str1 = `123${a}345`;
console.log(es6Str1);//123abc345
