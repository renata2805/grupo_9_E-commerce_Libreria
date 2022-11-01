window.addEventListener('load', function(){
    let form = document.querySelector('.form');

    form.name.focus();
    form.addEventListener('submit', function(event) {
        
        //Array de errores

        let errors =[];

        let nombre = document.querySelector('#nombre');
        let email = document.querySelector('#email');
        let password = document.querySelector('#password');
        let imagen = document.querySelector('#imagen');


        //Validaciones del nombre
        if (nombre.value == '') {
            errors.push("Debes completar tu nombre y apellido")
        }
        else if (nombre.value.length <2) {
            errors.push("Tu nombre debe tener al menos dos caracteres")
        }
        else {
            form.email.focus();
        };

        //Validaciones del email
        let regEmail = /\S+@\S+\.S+/;
        if (regEmail.test(email.value)) {
            errors.push("Debes ingresar un email válido");
        }
        else if (email.value == '') {
            errors.push("Debes completar tu email")
        }
        else {
            form.password.focus();
        }

       
        //Validaciones de la contraseña
        if(password.value == '') {
            errors.push("Debes seleccionar una contraseña")
        }
        else if (password.value.length <8) {
            errors.push("La contraseña debe contener al menos 8 caracteres")
        }
        
        //Validaciones de la imagen
        
        event.preventDefault();

        
    })
})





