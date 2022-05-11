window.addEventListener("DOMContentLoaded", navigator, false);
window.addEventListener("hashchange", navigator, false);

function navigator() {
    console.log({location})

    if (location.hash.startsWith("#trends")) {
        console.log("trends")
    } else if (location.hash.startsWith("#search=")){
        console.log("busqueda")
    } else if (location.hash.startsWith("#movie=")){
        console.log("pelicula")
    } else if (location.hash.startsWith("#category=")){
        console.log("categoria")
    } else {
        console.log("retornar home")
    }
    
    location.hash;
    
}