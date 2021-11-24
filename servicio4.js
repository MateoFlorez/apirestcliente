let uri="http://localhost:8081/casahogar/casahogar/v1/productos";

//recibir los datos del cliente (formulario)

//1. Detectar el clic del boton del formulario
let boton=document.getElementById("boton")

boton.addEventListener("click",capturarDatos)
function capturarDatos(){

    let producto=document.getElementById("producto").value
    let foto=document.getElementById("foto").value
    let precio=document.getElementById("precio").value
    let descripcion=document.getElementById("descripcion").value
    let tipo=document.getElementById("tipo").value

    let dato1="producto= "+producto
    let dato2="foto= "+foto
    let dato3="precio= "+precio
    let dato4="descripcion= "+descripcion
    let dato5="tipo= "+tipo

    let parametrosPOST={
        method:"POST",
        headers:{
            "Content-Type": 'application/x-www-form-urlencoded'
    
        },
        body:dato1+"&"+dato2+"&"+dato3+"&"+dato4+"&"+dato5
    }
    fetch(uri,parametrosPOST)
        .then(function(respuesta){
        return(respuesta.json())
    })
    .then(function(respuesta){
        console.log(respuesta)
        alert("Exito agregando el producto")
    })
    .catch(function(respuesta){
        console.log(respuesta)
    })

}