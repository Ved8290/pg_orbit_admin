
       
const togglePassword = document.getElementById("togglePassword");
const passwordField = document.getElementById("password");

togglePassword.addEventListener("click", function() {
    
    const type = passwordField.type === "password" ? "text" : "password";
    passwordField.type = type;


    this.classList.toggle("fa-eye");
    this.classList.toggle("fa-eye-slash");
});
const loginForm= document.getElementById("loginForm");
const loginButton = document.getElementById("floginbtn");
loginButton.addEventListener('click',()=>{
    loginForm.style.display="block";
    loginButton.style.display="none";
})

