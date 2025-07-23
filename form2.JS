var divEL = document.getElementById("cointainer");
var h1EL = document.createElement("h1");

var nameEl = JSON.parse(localStorage.getItem("Username"));
var emailEl = JSON.parse(localStorage.getItem("Email"));

var h1T = document.createTextNode(
  "Welcome " + nameEl + "!" + " Your email is " + emailEl + "."
);

divEL.appendChild(h1EL);
h1EL.appendChild(h1T);