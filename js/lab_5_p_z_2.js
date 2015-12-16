function ln(obj){
	//var maxWidth = "350px";
	//var minWidth = "100px";
	//var line =  obj.getElementById('linia');
	//line.style.width = maxWidth;
	
	var d = document
	if(obj.elements[0].checked) {d.all("linia").align="LEFT"}
	else
	if(obj.elements[1].checked) {d.all("linia").align="MIDDLE"}
	else
	if(obj.elements[2].checked) {d.all("linia").align="RIGHT"}
	if(obj.elements[3].checked) {d.all("linia").style.width="100px"}
	else
	if(obj.elements[4].checked) {d.all("linia").style.width="200px"}
	else
	if(obj.elements[5].checked) {d.all("linia").style.width="300px"}
	else
	if(obj.elements[6].checked) {d.all("linia").style.color="blue"}
	else
	if(obj.elements[7].checked) {d.all("linia").style.color="black"}
	else
	if(obj.elements[8].checked) {d.all("linia").style.color="green"}
}
function rset(obj){
	var d=document
	d.all("linia").align="LEFT" 
	d.all("linia").vAlign="TOP" 
}

