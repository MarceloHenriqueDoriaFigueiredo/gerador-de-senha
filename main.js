let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let spanElement = document.querySelector("#valor");
let passwordElement = document.querySelector("#password");
let containerPassword = document.querySelector("#container-passowrd");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!#$%&*+-/<=>?@[]^_{|}";
let novaSenha = "";

spanElement.innerHTML = sliderElement.value;

slider.oninput = function(){
    spanElement.innerHTML = this.value;
}
function generatePassword() {
    let pass = "";
    for (let i = 0, n = charset.length; i < sliderElement.value; i++){
        pass += charset.charAt(Math.floor(Math.random() * n));
    }
    containerPassword.classList.remove("hide");
    passwordElement.innerHTML = pass;
    novaSenha = pass;

}
function copyPassword(){
    alert("Senha copiada com sucesso");
    navigator.clipboard.writeText(novaSenha);
}