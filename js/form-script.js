
function validateform(){
	// Retrieve values from the form
		first_name = document.forms["contact_form"].first_name;
		last_name = document.forms["contact_form"].last_name;
		email = document.forms["contact_form"].email;
		age = document.forms["contact_form"].age;
		interests = document.forms["contact_form"].interests;
	//Reset Error Messages
		document.getElementById("first_name_error").innerHTML = "";
		document.getElementById("last_name_error").innerHTML = "";
		document.getElementById("email_error").innerHTML = "";
		document.getElementById("age_error").innerHTML = "";
	
	// Checks for required inputs		
		if (first_name.value == "") {
			document.getElementById("first_name_error").innerHTML = "* This field is required";
		}
		if (last_name.value == "") {
			document.getElementById("last_name_error").innerHTML = "* This field is required";
		}
		if (age.value == "") {
			document.getElementById("age_error").innerHTML = "* This field is required";
		}
				
		if (email.value == "") {
			document.getElementById("email_error").innerHTML = "* This field is required";
		}
		
		if ((first_name.value != "") && (last_name.value != "") && (age.value != "") && (email.value != "")){
			document.getElementById("submit_button").innerHTML = "<span style='color:green;'>Thank you for your message. We will get back to you soon.</span>";
		}


} //end of validation function
