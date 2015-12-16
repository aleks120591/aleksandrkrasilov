//площадь сектора и проверка принадлежности сектору
function sector(obj){
	var R = obj.radius_1.value;
	var r = obj.radius_2.value;
	var alpha = 90;
	var str = "";
	var x0 = 0;
	var y0 = 0;
	var x1 = obj.x1.value;
	var y1 = obj.y1.value;
	
	var ra = Math.pow(Math.pow((x1-x0), 2) + Math.pow((y1-y0), 2), 1/2);
	var phi = Math.atan((y1 -y0) / (x1 - x0))*(Math.PI/180);
	document.getElementById("str_2").innerHTML = 1;
	if((ra = R)||(ra = r)){
			str = "Пренадлежит секторам!!!";
			document.getElementById("str_2").innerHTML = 1;
			obj.str_1.value = str;
		}
	} else{
		str = "НЕ пренадлежит секторам!!!";
		document.getElementById("str_2").innerHTML = 0;
		obj.str_1.value = str;
	}
}