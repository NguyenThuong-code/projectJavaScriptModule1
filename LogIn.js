const DEFAULT_EMAIL="1901040224@s.hanu.edu.vn";
const DEFAULT_PASSWORD="1234";
function validationFormLogIn(){
    let email=document.getElementById("Email").value;
    let password= document.getElementById("Password").value;
    if(email!== DEFAULT_EMAIL|| password!==DEFAULT_PASSWORD){
        alert("Please reenter email and password!");
        return false
    }else if(email=== DEFAULT_EMAIL&&password===DEFAULT_PASSWORD){
        localStorage.setItem("email", DEFAULT_EMAIL)
        alert("Enter Successfully!");
        window.location.href = 'https://62e7599d15b1306b2d893162--famous-melomakarona-99c9e2.netlify.app/';
    }
}