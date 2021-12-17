/* Mi objtivo final:
Armar el sitio con bootstrap y css. 
Cargar datos en las cards.
Armar una función para poder sumar las selecciones.
Una vez cargado lo seleccionado, mostrar la compra
Confirmar la compra.
Ir al formulario para cargar los datos.
Enviar información y guardar en el session o local.*/

//Cargar Información

class productosSandwich {
    constructor (nombre, imagen, precio){
        this.nombre = nombre;
        this.imagen = imagen;
        this.precio = precio;
    }
}

const productosVeggiewich = [
        {nombre: "Falafe al morrón", 
        imagen: "../media/humus, tomte, morron y falafel.jpg", 
        precio: 450,
        id:1 }, 

        {nombre: "Garbanzo con lechuga y salsa de tomate", 
        imagen: "../media/Garbanzos y lechuga.jpg", 
        precio: 380,
        id:2 }, 
        
        {nombre: "Calabaza con rúcula", 
        imagen: "../media/rucula, cebolla y calabaza.jpg", 
        precio: 400,
        id:3 }
    ];


var contenido = "";



for (let productos of productosVeggiewich){ 
    contenido += "<div class= 'col-3' id='columna__producto'>";
    contenido += "<div class='card' style='width: 18rem;'>";
    contenido += "<img src= " + productos.imagen + "' class='card-img-top' alt='" + productos.nombre + "'>";
    contenido += "<div class='card-body'>";
    contenido += "<h5 class='card-title'>" + productos.nombre + "</h5>";
    contenido += "<p class='card-text'> <strong> $" + productos.precio + "</p>";
    contenido += "<button class='btn btn-primary' id='btn" + productos.id +"'>" + 'Seleccionar' + "</button>";
    contenido += "</div>";
    contenido += "</div>";
    contenido += "</div>";

}

var contenedorProductos = document.getElementById("contenedor_productos");
contenedorProductos.innerHTML = contenido;

productosVeggiewich.forEach((producto) => {
    let boton = document.getElementById("btn" + producto.id);
    boton.addEventListener("click", respuestaSeleccion);
    console.log ("Selección de producto");
  });

  
let guardarSeleccion = [];

function respuestaSeleccion(e) {
    let seleccionado =  productosVeggiewich.find(element => `btn${element.id}` == e.target.id); 
    console.log(seleccionado);
}

//Formulario y JSON

let boton = document.getElementById("btnEnviar");
boton.addEventListener("click", respuestaClick);

boton.onmousemove = () => { console.log ("Deslicé el mouse por arriba")};

let guardarDatos = [];

function respuestaClick(e) {
    e.preventDefault();
    var cargaDeDatos = JSON.parse(sessionStorage.getItem('resultados'));

    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let telefono = document.getElementById("telefono").value;
    let consulta = document.getElementById("consulta").value;

   //document.getElementById("resultado").innerHTML = "<p>Tu nombre es: " + nombre + "</p> " + "<p>Tu email es: " + email + "</p> " + "<p>Tu número de teléfono es: " + telefono + "</p>" + "<p>Tu consulta es: " + consulta + "</p>";

    for (let formulario of guardarDatos){
        guardarDatos.push(document.getElementById("resultado"))
        sessionStorage.setItem('resultados', JSON.stringify(guardarDatos));
    }

    console.log(guardarDatos);
}
console.log("Respuesta enviada");



//Agregué el footer con JQuery

$('footer').append(`<div class="backFooter">
            <a href="https://www.linkedin.com/in/roc%C3%ADo-gonz%C3%A1lez-paissaud/">LinkedIn</a>
            <a href="https://github.com/rociogpaissaud">GitHub</a>
            <a href="https://www.instagram.com/rocio.paissaud/">Instagram</a>
            <p>Hecho por Rocío González Paissaud</p>
            </div>`);

$(".backFooter").css ( {
        "background-color": "#fdf6eb",
        "display": "flex",
        "flex-wrap": "nowrap",
        "padding": "50px",
        "justify-content": "center",
        "align-content":"space-between",
})



$("footer").prepend(`<div id="resultadoNewsletter" style="display:none">
                    <form id="newsletter">
                        <label for="formGroupExampleInput" class="form-label">¿Querés recibir el Newsletter?</label>
                        <input id='nombreApellido' type="text" class="form-control" placeholder="Escribí tu nombre y apellido">
                        <input id='mail' type="mail" class="form-control" placeholder="Escribí tu email">
                        <input id='enviarNewsletter' type="button" class="form-control" value='Quiero recibir el Newletter'>
                        <input id='noNewsletter' type="button" class="form-control" value='No, gracias'>
                    </form> 
                    </div>`);

$("#resultadoNewsletter").fadeIn(500);

$("#enviarNewsletter").click(function(e) {
    e.preventDefault();
    console.log($("#nombreApellido"). val());
    console.log($("#mail"). val());
    alert("Tus datos fueron enviado correctamente");
    $("#newsletter").submit();
});

$("#resultadoNewsletter").css ( {
    "margin": "100px",
    "padding": "10px",
    "justify-content": "center",
    "align-content":"space-between",
})


//Animación con JQUERY del H1 en el inicio
$(".animacionTituloJs").css({
    "font-weight": "bold",
    
})








