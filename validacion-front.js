window.addEventListener('load', function(){
    let formulario = document.querySelector('form.reservation');

        let errores = [];
        let campoNombre = document.querySelector("title")

        if(campoNombre.value == ""){
            errores.push("el campo del titulo del libro debe estar completo")
        } else if(campoNombre.value.length < 5){
            errores.push("el titulo del libro debe tener al menos 5 caracteres")
        }
        let descripcion = document.querySelector("input.description")

        if(descripcion.value == ""){
            errores.push("Debes colocar una descripción del libro")
        } else if(descripcion.value.length < 20){
            errores.push("La descripcion del libro debe tener al menos 20 caracteres")
        }

        let imagen = document.querySelector("input.image")

        if(descripcion.value == ""){
            errores.push("Debes colocar una descripción del libro")
        } else if(descripcion.value.length < 20){
            errores.push("La descripcion del libro debe tener al menos 20 caracteres")
        }
    })

    formulario.addEventListener(submit, function(e){
        if(errores.length > 0 ){e.preventDefault();
        let ulErrores = document.querySelector(".errores ul");
        errores.forEach(error =>{ulErrores.innerHTML += `<li>${error}</li>`})}
})