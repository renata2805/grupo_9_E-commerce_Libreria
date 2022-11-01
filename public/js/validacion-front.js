window.onload = function(){
    
    
    let formulario = document.querySelector('#formulario');
    let form = document.querySelector('.form')

    form.addEventListener('submit', (e) => {

        let errores = [];
        let campoNombre = document.querySelector("#title")
        let descripcion = document.querySelector("#description")
        let imagen= document.querySelector("#image")

        console.log(campoNombre)
        if(campoNombre.value == ""){
            errores.push("el campo del titulo del libro debe estar completo")
        } else if(campoNombre.value.length < 5){
            errores.push("el titulo del libro debe tener al menos 5 caracteres")
        }

        if(descripcion.value == ""){
            errores.push("Debes colocar una descripción del libro")
        } else if(descripcion.value.length < 20){
            errores.push("La descripcion del libro debe tener al menos 20 caracteres")
        }

        // let imagen = document.querySelector("input.image")

        // if(descripcion.value == ""){
        //     errores.push("Debes colocar una descripción del libro")
        // } else if(formulario.descripcion.value.length < 20){
        //     errores.push("La descripcion del libro debe tener al menos 20 caracteres")
        // }
    

//     formulario.addEventListener(submit, function(e){
//         if(errores.length > 0 ){e.preventDefault();
//         let ulErrores = document.querySelector(".errores ul");
//         errores.forEach(error =>{ulErrores.innerHTML += `<li>${error}</li>`})}
// }
if (errores.length > 0) {
    e.preventDefault();
    let ulErrors = document.querySelector('.errores');
    ulErrors.classList.add('alert-warning');
    ulErrors.innerHTML = '';
    for (let i = 0; i < errores.length; i++) {
        ulErrors.innerHTML += `<li >  ${errores[i]} </li>`;
    };
}else{
    alert('La validación fué exitosa')
    form.submit();
}

});

};