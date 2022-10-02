var x="How";
console.log(x);
var a=function ()
{
	var x="are";
	console.log(x);
	b();
	function b(){
        var x="you ?"
		console.log(x);}

}
a();
