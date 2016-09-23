//对象是无序的。是哈希的。。
//$.ajax(type,url);//记参数的顺序--记这两个参数    记不住 ，所以用对象。。这是有序的。。
/*
$.ajax({
    type:"get",
    url:"baidu.com"//前面要部一下https://     ,如果不补说明是  当前路径下的目录 里面的baidu.com
});
    &*/
//--1
//function ajax(params) {
//    params.type = params.type || 'get';
//    params.url = params.url || "default_url" ;
//
//    //params.cache   的时候会把后面的东西给激活   ‘default_url'
//
//}
//--2--正确--
function ajax({method = 'get',url = "default_url"} = {}) {//提倡用这个
    //params.type = params.type || 'get';
    //params.url = params.url || "default_url" ;

    //params.cache   的时候会把后面的东西给激活   ‘default_url'
    console.log(method,url);
}

function ajax2({method,url} = {method : 'get',url:"default_url"}) {//不要用这个
    console.log(method,url);
}
ajax({
    method:"post"
});
ajax2({
    method:"post"
});




















