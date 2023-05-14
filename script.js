function test()
{

var un = document.getElementById("fullname").value;
var email = document.getElementById("email").value;
var password = document.getElementById("password").value;

var address = document.getElementById("address").value;


var name=localStorage.setItem("un",un);
var em=localStorage.setItem("email",email);
var pass=localStorage.setItem("password",password);
var add=localStorage.setItem("address",address);

var name=localStorage.getItem("un",un);
var em=localStorage.getItem("email",email);
var pass=localStorage.getItem("password",password);
var add=localStorage.getItem("address",address);
}
