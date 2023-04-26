//Variables
var ERROR_CODE = 0;
var pattern = null;


function limitStdno(){
	const stdnoValue = stdno.value;
	if(stdnoValue.length > 9){
		stdno.value = stdnoValue.substring(0, 9);
	}

}
function limitPin(){
	const pinValue = ienablerPin.value;
	if(pinValue.length > 6){
		ienablerPin.value = pinValue.substring(0, 6);
	}

}

function Validate(){
	//Null Check
	if (stdno.value == ''){
		ERROR_CODE = 1;
		error();
		return;
	}
	if (ienablerPin.value == ''){
		ERROR_CODE = 2;
		error();
		return;
	}
	if (pass.value == ''){
		ERROR_CODE = 3;
		error();
		return;
	}
	if (cpass.value == ""){
		ERROR_CODE = 4;
		error();
		return;
	}
	//Regex
	pattern = /^\d+$/;
	if (!pattern.test(stdno.value)){
		ERROR_CODE = 5;
		error();
		return;

	}
	if (!pattern.test(ienablerPin.value)){
		ERROR_CODE = 6;
		error();
		return;
	}
	if (pass.value.length < 7){
		ERROR_CODE = 7;
		error();
		return;
	}
	if (pass.value != cpass.value){
		ERROR_CODE = 8;
		error();
		return;
	}
	var inputs = document.getElementsByTagName("input");
	for (var i = 0; i < inputs.length; i++) {
  		if (inputs[i].type === "text" || inputs[i].type === "password") {
    			inputs[i].value = "";
		}
	}
	success_box.style.visibility = 'visible';
	setTimeout('Close();', 6000);
}

function error(){
	switch (ERROR_CODE){
		case 1:
			stdno_box.style.visibility = 'visible';
			setTimeout('Close();', 3500);
			break;
		case 2:
			ienabler_box.style.visibility = 'visible';
			setTimeout('Close();', 3500);
			break;
		case 3:
			pass_box.style.visibility = 'visible';
			setTimeout('Close();', 3500);
			break;
		case 4:
			cpass_box.style.visibility = 'visible';
			setTimeout('Close();', 3500);
			break;
		case 5:
			stdnoR_box.style.visibility = 'visible';
			setTimeout('Close();', 3500);
			break;
		case 6:
			pinR_box.style.visibility = 'visible';
			setTimeout('Close();', 3500);
			break;
		case 7:
			passN_box.style.visibility = 'visible';
			setTimeout('Close();', 5000);
			break;
		case 8:
			passR_box.style.visibility = 'visible';
			setTimeout('Close();', 3000);
			break;

	}
}

function Close(){
	stdno_box.style.visibility = 'hidden';
	ienabler_box.style.visibility = 'hidden';
	pass_box.style.visibility = 'hidden';
	cpass_box.style.visibility = 'hidden';
	stdnoR_box.style.visibility = 'hidden';
	pinR_box.style.visibility = 'hidden';
	success_box.style.visibility = 'hidden';
	passN_box.style.visibility = 'hidden';
	passR_box.style.visibility = 'hidden';
}
