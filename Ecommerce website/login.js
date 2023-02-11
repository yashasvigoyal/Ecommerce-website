function login(){
let email = document.querySelector("#email").value ;
let password = document.querySelector("#password").value;
if(email==="admin@admin.com"&&password==="123456"){
    alert("Login Successful");
}
else{
    alert("Incorrect email or password");
}
}