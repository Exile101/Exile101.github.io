$(document).ready(function(){


	var n=100; // number of bloks 
	var target=$('#bloks');
	var bullet="<div class='blok' style='background:#000;margin:1px;'></div>";
	for (var i =1; i <= n; i++) {
	 	target.append(bullet);
	 }; 


});