window.onload = function(){
   
    console.log("Conectado")
    
    let formulario = document.querySelector("#formulario")
    let form = document.querySelector(".form")
    
    form.addEventListener('submit', (e) => {

        
        let errores = [];
        
        let email = document.querySelector("#email")
        let password = document.querySelector("#password")
       
        let regEmail = /\S+@\S+\.S+/;
        if (regEmail.test(email.value)) {
            errores.push("Debes ingresar un email válido");
        }
        else if (email.value == '') {
            errores.push("Debes completar tu email")
        }
        else {
            form.password.focus();
        }

        if(password.value == ""){
            errores.push('Debes ingresar tu contraseña')
        }

        if (errores.length > 0) {
            e.preventDefault();
            let ulErrors = document.querySelector('.errores');
            ulErrors.classList.add('alert-warning');
            ulErrors.innerHTML = '';
            for (let i = 0; i < errores.length; i++) {
                ulErrors.innerHTML += `<li>  ${errores[i]} </li>`;
            };
        }else{
            alert('La validación fué exitosa')
            form.submit();
        }
  })
   }
