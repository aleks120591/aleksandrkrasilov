function CircumferenceAtAPredeterminedRadius_1(){
	var s = Number(document.TForm.s.value);
	return document.TForm.r.value = Math.sqrt(s/Math.PI);
}
function care (a, h){ 
	var s= (a* h) / 2;
	//alert ("Площадь прямоугольного треугольника равна ",s);
	return form1.st3.value = s;
}
function carel (a, h ){ 
	var s= (a.value* h.value) / 2;
	document.write ("Площадь равна ",s);
	return s;
}
function care2 (obj ){
	var a=obj.st1.value;
	var h=obj.st2.value;
	var s= (a* h) /2;
	document.write ("Площадь равна ", s); 
	return s;
}
function val(obj){
	var a1=1*obj.num1.value;
	var a2=1* obj.num2.value;
	var a3=1* obj.num3.value;
	var a4=1*obj.num4.value;
	var a5=1* obj.num5.value;
	var a6=1* obj.num6.value;
	var s =(a1+a2+a3+a4+a5+a6)/6;
	obj.res.value = s;
}
function srec_1(obj){
	obj.res.value=obj.num1.value * obj.num1.value
}
function srec_2(){
	form7.res.value=form7.num1.value* form7.num1.value
}
function srec_3(){
	form8.res.value=form8.num1.value* form8.num1.value
}
function srec_4(){
	form9.res.value=form9.num1.value* form9.num1.value
}
function chpict (){ 
	var d=document;
	var l=d.pm1.src;
	d.pm1.src=d.pm2.src;
	d.pm2.src=l;
}
function care_2 (obj){
	var a=obj.st1.value;
	var b=obj.st2.value; 
	var c=obj.st3.value; 
	var s; 
	p=a*1+b*1+c*1;
	document.writeln ("Периметр треугольника равен ",p,"<br>"); 
	p=p/2;
	s=Math.sqrt(p*(p-a)*(p-b)*(p-c));
	document.write ("Площадь треугольника равна ",s); 
}
function circle(obj){
	var r = obj.radius.value;
	var l = 2 * Math.PI * r;
	var s = Math.PI * Math.pow(r, 2);
	obj.сircumference.value = l;
	obj.area.value = s;
}
function square_ring(obj){
	var r_1 = Math.pow(obj.radius_1.value, 2);
	var r_2 = Math.pow(obj.radius_2.value, 2);
	var s = Math.PI * (r_1 - r_2);
	obj.square.value = s;
}
function pemutation(obj){
	var buf = obj.first.value;
	obj.first.value = obj.second.value;
	obj.second.value = buf;
}