function set(obj){
	var d=document
	if(obj.elements[0].checked) {d.all("itab").align="LEFT"} 
	else
	if(obj.elements[1].checked) {d.all("itab").align="MIDDLE"} 
	else
	if(obj.elements[2].checked) {d.all("itab").align="RIGHT"} 
	if(obj.elements[3].checked) {d.all("itab").vAlign="TOP"} 
	else
	if(obj.elements[4].checked) {d.all("itab").vAlign="MIDDLE"} 
	else
	if(obj.elements[5].checked) {d.all("itab").vAlign="BOTTOM"} 
}
function rset(obj){
	var d=document
	d.all("itab").align="LEFT" 
	d.all("itab").vAlign="TOP" 
}
