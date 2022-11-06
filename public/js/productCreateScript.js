window.onload = function(){
    let formulario = document.querySelector('#formulario');
    let form = document.querySelector('.form')
   
    

    form.addEventListener('submit', (e) => {

        let errores = [];
        let campoNombre = document.querySelector("#title")
        let descripcion = document.querySelector("#description")
        let imagen= document.querySelector("#image")

    
        if(campoNombre.value == ""){
            errores.push("El campo del titulo debe estar completo")
        } else if(campoNombre.value.length < 5){
            errores.push("El titulo del libro debe tener al menos 5 caracteres")
        }

        if(descripcion.value == ""){
            errores.push("Debes colocar una descripción del libro")
        } else if(descripcion.value.length < 20){
            errores.push("La descripcion del libro debe tener al menos 20 caracteres")
        }


if (errores.length > 0) {
    e.preventDefault();
    let ulErrors = document.querySelector('.errores');
    ulErrors.classList.add('alert-warning');
    ulErrors.innerHTML = '';
    for (let i = 0; i < errores.length; i++) {
        ulErrors.innerHTML += `<li >  ${errores[i]} </li>`;
    };
}else{
    form.submit();
}

});

};