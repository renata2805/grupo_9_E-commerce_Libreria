window.onload = function(){
    
    
    let formulario = document.querySelector('#formulario');
    let form = document.querySelector('.form')
    

    form.addEventListener('submit', function(event) {
        
        //Array de errores y selectores

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
        let regEmail = /\S+@\S+\.\S+/;
        if (!regEmail.test(email.value)) {
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

        campoImg.addEventListener('change', (e)=> {

            let extensiones = /(.jpg|.jpeg|.png|.gif|.webp)$/i.test(campoImg.value);
    
            if(!extensiones){
                smallImg.innerHTML = "Solo imagenes con extension jpg, png, gif, webp"
                campoImg.classList.add("is-invalid")
            } else {
                campoImg.classList.remove("is-invalid");
                campoImg.classList.add("is-valid");
                smallImg.innerHTML = "";
            }
        })

        //Control de errores
        console.log(errors)
        if (errors.length > 0) {
            event.preventDefault();
            let ulErrors = document.querySelector('.errores');
            ulErrors.classList.add('alert-warning');
            ulErrors.innerHTML = '';
            for (let i = 0; i < errors.length; i++) {
                ulErrors.innerHTML += `<li >  ${errors[i]} </li>`;
            };
        } else {
            form.submit();
        }
                        
    })
}





