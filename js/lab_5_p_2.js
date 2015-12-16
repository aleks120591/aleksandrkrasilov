function vid(){
	var d=document
	var k=0;
	if (d.all("i1").checked) k=1
	else
	if (d.all("i2").checked) k=2
	else
	if (d.all("i3").checked) k=3
	else
	if (d.all("i4").checked) k=4
	d.all("resch").value=k
}
