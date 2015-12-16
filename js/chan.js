function chan(obj){
	  var r1=Number(obj.a1.value)
	  var r2=Number(obj.a2.value)
	  if ((r1<1)||(r1>3)||(r2<1)||(r2>3))
	  alert ("Неверно заданы номера рисунков!")
	  else{ 
	  var z=document.images[r1-1].src
	  document.images[r1-1].src=document.images[r2-1].src;
	  document.images[r2-1].src=z
	}
  }