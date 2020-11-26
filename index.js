// Function to check name field filled out by the user(using length property)
function checkname() {
  let textin = document.getElementById("name").value;
  if (textin.length == 0) {
    document.getElementById("c-name").style.color = "red";
    document.getElementById("c-name").innerHTML = "This field cannot be empty!";
  }
 else if(textin.length<5){
  document.getElementById("c-name").style.color = "red";
  document.getElementById("c-name").innerHTML = "Too short";
 }
  else {
    document.getElementById("c-name").style.color = "green";
    document.getElementById("c-name").innerHTML = "Valid";
  }
}

// Function to check mobile number field filled out by the user
/*

if user has NOT filled upto 10 digit numbers then displays message->"Please fill upto 10 digits!"
otherwise  displays message->"valid"
*/
function checknum() {
  let phonenumber = document.getElementById("num").value;

  if (phonenumber.length != 10) {
    document.getElementById("number").style.color = "red";
    document.getElementById("number").innerHTML = "Please fill upto 10 digits!";
  }
  else {

    document.getElementById("number").style.color = "green";
    document.getElementById("number").innerHTML = "Valid";
  }
}

// Function to check password field filled out by the user
/* function checks 
if password field is empty it will display error message -> not valid
if its length is less than 5 then it will display the message -> poor length 
otherwise it will display message -> Good Strength*/
function checkpassword1() {
  let pass1 = document.getElementById("password1").value;

  if (pass1.length ==0) {
    document.getElementById("p1").style.color = "red";
    document.getElementById("p1").innerHTML = "Not Valid!";
  }
  else if(pass1.length <5){
    document.getElementById("p1").style.color = "red";
    document.getElementById("p1").innerHTML = "Poor Strength";
  }
  else {

    document.getElementById("p1").style.color = "green";
    document.getElementById("p1").innerHTML = "Good Strength";
  }
}

// Function to check confirm password field filled out by the user
/* 
function checks 
if confirm password field value is equal to main password field value->
 
then it will check whether main password field value is equal to 0 or not 
if so then
display error message ->"Please fill out the above password field"
otherwise display message -> Valid
if confirm password field value is NOT equal to main password field value it will display message -> "Please enter same password "
*/
function checkpassword2() {
  let pass2 = document.getElementById("password2").value;
  let mainpass = document.getElementById("password1").value;
  if (pass2 == mainpass) {
    if (mainpass.length ==0) {
      document.getElementById("p2").style.color = "red";
      document.getElementById("p2").innerHTML = "Please fill out the above password field";
    }
    else {
      document.getElementById("p2").style.color = "green";
      document.getElementById("p2").innerHTML = "Valid";
    }
  }
  else  {
    document.getElementById("p2").style.color = "red";
    document.getElementById("p2").innerHTML = "Please enter same password ";
  }
}