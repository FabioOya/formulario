function validateForm(){

    var name = document.getElementById("name");
    var lastName = document.getElementById("lastName");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var confirmPassword = document.getElementById("confirmPassword");
    var cel = document.getElementById("cel");
    var cpf = document.getElementById("cpf");
    var cep = document.getElementById("cep");

    if (name.value == ""){
        document.getElementById("nameid").innerHTML = "*Por favor digite o Nome";
        name.focus();
        return false;
    }
    if (!/^[a-zA-Z ]*$/g.test(name.value)){
        document.getElementById("nameid").innerHTML = "*O nome deve conter apenas letras";
        name.focus();
        return false;
    }
    if (name.value.length < 3 || name.value.length > 20){
        document.getElementById("nameid").innerHTML = "*O nome deve conter de 3 a 20 caracteres"
        name.focus();
        return false;   
    } else {
        document.getElementById("nameid").innerHTML = "";
    }
    if (lastName.value == ""){
        document.getElementById("lastNameid").innerHTML = "*Por favor digite o Sobrenome";
        lastName.focus();
        return false;
    }
    if (!/^[a-zA-Z]*$/g.test(lastName.value)){
        document.getElementById("lastNameid").innerHTML = "*Sobrenome deve conter apenas letras";
        lastName.focus();
        return false;
    }
    if (lastName.value.length < 2 || lastName.value.length > 20){
        document.getElementById("lastNameid").innerHTML = "*O sobrenome conter de 2 a 20 caracteres"
        lastName.focus();
        return false;
    } else {
        document.getElementById("lastNameid").innerHTML = "";
    }
    if (email.value == ""){
        document.getElementById("emailid").innerHTML = "*Por favor digite email";
        email.focus();
        return false;
    } else {
        document.getElementById("emailid").innerHTML = "";
    }
    if (password.value == ""){
        document.getElementById("passwordid").innerHTML = "*Por favor digite a senha";
        password.focus();
        return false;
    }
    if(password.value.length < 6 || password.value.length > 20){
        document.getElementById("passwordid").innerHTML = "*Senha deve conter entre 6 a 20 caracteres";
        password.focus();
        return false;
    } else {
        document.getElementById("passwordid").innerHTML = "";
    }
    if (confirmPassword.value == ""){
        document.getElementById("confirmPasswordid").innerHTML = "*Por favor digite a confirmação da senha";
        confirmPassword.focus();
        return false;   
    }   
    if (password.value != confirmPassword.value) {
        document.getElementById("confirmPasswordid").innerHTML = "*Senhas diferentes"
        confirmPassword.focus();
        return false;
    } else {
        document.getElementById("confirmPasswordid").innerHTML = "";
    }
    if (cel.value == ""){
        document.getElementById("celid").innerHTML = "*Por favor digite o celular";
        cel.focus();
        return false;
    }
    if (cel.value.length < 15){
        document.getElementById("celid").innerHTML = "*Celular deve conter 11 digitos";
        cel.focus();
        return false;
    } else {
        document.getElementById("celid").innerHTML = "";
    }   
    if (cpf.value == ""){
        document.getElementById("cpfid").innerHTML = "*Por favor digite o CPF";
        cpf.focus();
        return false;
    }    
    if(cpf.value.length < 14){
        document.getElementById("cpfid").innerHTML = "*CPF deve conter 11 digitos"
        cpf.focus();
        return false;
    } else {
        document.getElementById("cpfid").innerHTML = "";
    }
    if (cep.value == ""){
        document.getElementById("cepid").innerHTML = "*Por favor digite o cep";
        cep.focus();
        return false;
    }
    if (cep.value.length < 10){
        document.getElementById("cepid").innerHTML = "*CEP deve conter 8 digitos";
        cep.focus();
        return false;
    } else {
        document.getElementById("cepid").innerHTML = "";
    }  
    
    alert("Cadastro Concluido!");
    
}  

