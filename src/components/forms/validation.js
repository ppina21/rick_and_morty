const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword = /^(?=.*?[a-z])(?=.*?[0-9]).{6,10}$/;

export  function validation(userData) {
    let errors = {}

    if (!regexEmail.test(userData.username)) errors.username = "El usuario debe ser un email." 
    else if (!userData.username) errors.username = "El usuario no puede estar vacio."
    else if (userData.username.length > 35) errors.username = "No se permite mas de 35 caracteres"
    if (!regexPassword.test(userData.password)) errors.password = "La contraseña debe tener al menos un numero"
    else if(userData.password.length < 6 && userData.password.length > 10) errors.password = "La contraseña debe tener minimo 6 caracteres y maximo 10"
    
    return errors;
};