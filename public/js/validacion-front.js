window.onload = function(){
    
    
    let formulario = document.querySelector('#formulario');
    let form = document.querySelector('.form')

    form.addEventListener('submit', (e) => {

        let errores = [];
        let campoNombre = document.querySelector("#title")
        let descripcion = document.querySelector("#description")

        console.log(campoNombre)
        if(formulario.campoNombre.value == ""){
            errores.push("el campo del titulo del libro debe estar completo")
        } else if(formulario.campoNombre.value.length < 5){
            errores.push("el titulo del libro debe tener al menos 5 caracteres")
        }

        if(formulario.descripcion.value == ""){
            errores.push("Debes colocar una descripción del libro")
        } else if(descripcion.value.length < 20){
            errores.push("La descripcion del libro debe tener al menos 20 caracteres")
        }

        let imagen = document.querySelector("input.image")

        if(formulario.descripcion.value == ""){
            errores.push("Debes colocar una descripción del libro")
        } else if(formulario.descripcion.value.length < 20){
            errores.push("La descripcion del libro debe tener al menos 20 caracteres")
        }
    

    formulario.addEventListener(submit, function(e){
        if(errores.length > 0 ){e.preventDefault();
        let ulErrores = document.querySelector(".errores ul");
        errores.forEach(error =>{ulErrores.innerHTML += `<li>${error}</li>`})}
}

)})};