
$("body").prepend('<button id="btn1">GET</button>');

$("#btn1").click ( () =>{
    $.getJSON("datos.json", function (respuesta, estado){
        if (estado === "success") {
            console.log(respuesta);
            let misDatos = respuesta;
            for (const dato of misDatos) {
                $("body").prepend(`<div>
                                        <h3><strong>${dato.nombre}</strong></h3>
                                        <p><img src= '${dato.imagen}'> </p>
                                        <p>${dato.precio}</p>
                                        <p>${dato.descripción}</p>
                                        </div>`);
            }
        }
    });
});



$("body").prepend('<button id="btn2">POST</button>');


$("#btn2").click ( () =>{
    $.post("datos.json", function (respuesta, estado){
        if (estado === "success") {
            console.log(respuesta);
            let misDatos = respuesta;
            for (const dato of misDatos) {
                $("body").prepend(`<div>
                                        <h3><strong>${dato.nombre}</strong></h3>
                                        <p><img src= '${dato.imagen}'> </p>
                                        <p>${dato.precio}</p>
                                        <p>${dato.descripción}</p>
                                        </div>`);
            }
        }
    });
});

$("body").prepend('<button id="btn3">AJAX</button>');


$("#btn3").click ( () =>{
    $.ajax( {
        methodo: "POST",
        url: "https://jsonplaceholder.typicode.com/posts", //"../AJAX/datos.json" para el error
        data: {nombre:"Veggiewich de Garbanzos y Calabaza", imagen: "media/hamburguesas_garbanzos_calabaza.jpg", precio: 150, descripción: "Sandwich con medallón de Garbanzos y Calabaza, pan de Salvado, rúcula, tomate y salsa de queso vegano." },
        success: function(respuestaAjax) {
            $("body").prepend(`<div>
            <h3><strong>${respuestaAjax.nombre}</strong></h3>
            <p><img src= '${respuestaAjax.imagen}'> </p>
            <p>${respuestaAjax.precio}</p>
            <p>${respuestaAjax.descripción}</p>
            </div>`);
        },
        error: function (respuestaAjax){
            $("body").prepend(`<div>
            <p>No se pudo enviar la información</p>
            </div>`);
        }
    })
});