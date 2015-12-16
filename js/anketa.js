function anket(){
	var sum;
	var d = document;

	if(d.form1.ch1.elements[0].checked) {sum += d.form1.ch1.elements[0].value;}
	else
	if(d.form1.ch1.elements[1].checked) {sum += d.form1.ch1.elements[1].value;}

	/*if(obj.ch2.elements[0].checked) {sum = sum;}
	else
	if(obj.ch2.elements[1].checked) {sum += 1;}

	if(obj.ch3.elements[0].checked) {sum = sum;}
	else
	if(obj.ch3.elements[1].checked) {sum += 1;}

	if(obj.ch4.elements[0].checked) {sum = sum;}
	else
	if(obj.ch4.elements[1].checked) {sum += 1;}

	if(obj.ch5.elements[0].checked) {sum = sum;}
	else
	if(obj.ch5.elements[1].checked) {sum += 1;}

	if(obj.ch6.elements[0].checked) {sum = sum;}
	else
	if(obj.ch6.elements[1].checked) {sum += 1;}

	if(obj.ch7.elements[0].checked) {sum = sum;}
	else
	if(obj.ch7.elements[1].checked) {sum += 1;}

	if(obj.ch8.elements[0].checked) {sum = sum;}
	else
	if(obj.ch8.elements[1].checked) {sum += 1;}

	if(obj.ch9.elements[0].checked) {sum = sum;}
	else
	if(obj.ch9.elements[1].checked) {sum += 1;}

	if(obj.ch10.elements[0].checked) {sum = sum;}
	else
	if(obj.ch10.elements[1].checked) {sum += 1;}

	if(obj.ch11.elements[0].checked) {sum = sum;}
	else
	if(obj.ch11.elements[1].checked) {sum += 1;}

	if(obj.ch12.elements[0].checked) {sum = sum;}
	else
	if(obj.ch12.elements[1].checked) {sum += 1;}

	if(obj.ch13.elements[0].checked) {sum = sum;}
	else
	if(obj.ch13.elements[1].checked) {sum += 1;}

	if(obj.ch14.elements[0].checked) {sum = sum;}
	else
	if(obj.ch14.elements[1].checked) {sum += 1;}

	if(obj.ch15.elements[0].checked) {sum = sum;}
	else
	if(obj.ch15.elements[1].checked) {sum += 1;}

	if(obj.ch16.elements[0].checked) {sum = sum;}
	else
	if(obj.ch16.elements[1].checked) {sum += 1;}

	if(obj.ch17.elements[0].checked) {sum = sum;}
	else
	if(obj.ch17.elements[1].checked) {sum += 1;}

	if(obj.ch18.elements[0].checked) {sum = sum;}
	else
	if(obj.ch18.elements[1].checked) {sum += 1;}

	if(obj.ch19.elements[0].checked) {sum = sum;}
	else
	if(obj.ch19.elements[1].checked) {sum += 1;}
*/
d.form1.all('num').value=sum;
}