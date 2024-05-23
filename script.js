let menuVisible =false;

//funcion que muestra u oculta el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible =false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}


function seleccionar(){
    //oculto el menu una vez que se seleciono una opcion
    document.getElementById("nav").classList ="";
    menuVisible = false;
}