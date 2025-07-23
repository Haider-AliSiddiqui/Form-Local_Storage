const Username = document.getElementById("Username");
const Email = document.getElementById("Email");
const Password = document.getElementById("password");

function datasubmit() {
    localStorage.setItem("Username", JSON.stringify(Username.value));
    localStorage.setItem("Email", JSON.stringify(Email.value));
    localStorage.setItem("Password", JSON.stringify(Password.value));
    window.location.href = "./form2.html";
}