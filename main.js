
var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
var user= document.getElementById("user").value.checked;
if ( username == "Shubhangi" && password == "Shubhi1@1"){
alert("Login successful");
if(user== "A")
{
	alert(user);
	window.location = "admin.html"; // Redirecting to other page.
}
else if(user== "S")
{	
	alert(user);
	window.location= "student.html";
}
else
{
	window.location = "volunteer.html";
}
return false;
}
else{
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}