//操作DOM元素，将content显示到网页上
function show(){
	window.document.getElementById('app').innerText='Hello,'+content;
}
//通过CommonJS规范到处show函数
module.exports=show;


