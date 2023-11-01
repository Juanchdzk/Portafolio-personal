let btnDetalles = document.querySelectorAll("#botonDetalles");
let txtDetalles = document.querySelectorAll("#verDetalles");

btnDetalles.forEach(function(elemento, indice){
    elemento.addEventListener("click", function(){
        txtDetalles[indice].classList.toggle("Fver_detalles");
        if (txtDetalles[indice].classList.contains("Fver_detalles")) {
            elemento.innerHTML = "Ocultar detalles";
        } else {
            elemento.innerHTML = "Mostrar detalles";
        }

        txtDetalles.forEach(function(element, posicion){
            if (txtDetalles[posicion] != txtDetalles[indice]) {
                element.classList.remove("Fver_detalles");
                btnDetalles[posicion].innerHTML = "Mostrar detalles";
            }
        });
    });
});