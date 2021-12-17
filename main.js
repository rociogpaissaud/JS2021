//Clase 8
alert("Hola Rodri! Clase 8");

let armarFooter = document.createElement ("footer");
armarFooter.innerHTML = "<p>Hecho por Rocío González Paissaud</p>";
document.body.appendChild(armarFooter);


//Clase 6, 7 Y 8

class Medallon {
    constructor(id, tipoMedallon, precioMedallon) {
    this.id = id;
    this.tipoMedallon = tipoMedallon.toLowerCase();
    this.precioMedallon = precioMedallon;
    }
    sumaIva() {
      this.precioMedallon = this.precioMedallon * 1.21;
    }
}

const ingresoMedallones = [];

function cargarMedallones() {
    var cargaDeMedallones = JSON.parse(sessionStorage.getItem('productos'));

    if (cargaDeMedallones == null || cargaDeMedallones.length == 0) {
    const cant_medallones = parseInt(prompt('¿Cuántos medallones querés ingresar?'));

    for (let i = 1; i <= cant_medallones; i++) {
        var cargarProductoM = new Medallon(i, prompt('Ingrese los medallones'), parseInt(prompt('Ingrese el precio')));
        cargarProductoM.sumaIva();
        ingresoMedallones.push(cargarProductoM);}

        sessionStorage.setItem('productos', JSON.stringify(ingresoMedallones));
    var cargaDeMedallones = JSON.parse(sessionStorage.getItem('productos'));
    }

    console.log('Total de productos: ' + cargaDeMedallones.length);
}

cargarMedallones();
console.log('Los productos disponibles son: ' + sessionStorage.getItem('productos'));

for (var precios of ingresoMedallones) {
    console.log(ingresoMedallones.precioMedallon * 1.21);
  }
console.log(ingresoMedallones);


for (var medallon of ingresoMedallones) {
    let contenedor =document.createElement ("div");
    contenedor.innerHTML = `<h3> ID: ${medallon.id}</h3>
                            <h4> ID: ${medallon.tipoMedallon}</h4>
                            <p> ID: ${medallon.precioMedallon}</p>`;

    document.body.appendChild(contenedor);
  }
console.log(ingresoMedallones);




/*
//CONDIMENTOS
class Condimentos {
    constructor (id, tipoCondimentos, precioCondimentos) {
        this.id = id;
        this.tipoCondimentos = tipoCondimentos.toLowerCase ();
        this.precioCondimentos = precioCondimentos;
    }
}

const igresoCondimentos = [];

function cargarCondimentos() {
    const cant_condimentos = parseInt(prompt("¿Cuántos condimentos querés ingresar?"));

    for (let i = 1; i <=cant_condimentos; i++) {
        var cargarProductoC = new Condimentos (i, prompt("Ingrese los condimentos"), parseInt(prompt("Ingrese el precio")));
        igresoCondimentos.push(cargarProductoC);
    }

    localStorage.setItem("productos", JSON.stringify(igresoCondimentos));

}
cargarCondimentos();


------------------------------------------------------------------------
//PAN Y SALSAS
/*
function productos_Veggiewich () { 


    class Pan {
        constructor (tipoPan, precioPan) {
            this.tipoPan = prompt("Ingrese el tipo de pan").toLowerCase ();
            this.precioPan = parseInt(prompt("Ingrese el precio"));
        }
    }

    class Salsa {
        constructor (tipoSalsa, precioSalsa) {
            this.tipoSalsa = prompt("Ingrese el tipo de salsa").toLowerCase ();
            this.precioSalsa = parseInt(prompt("Ingrese el precio"));
        }
    }

    class Queso {
        constructor (tipoQueso, precioQueso) {
            this.tipoSalsa = prompt("Ingrese el tipo de Queso").toLowerCase ();
            this.precioQueso = parseInt(prompt("Ingrese el precio"));
        }
    }

    const ElegirMedallon = new Medallon ();
    const ElegirCondimentos = new Condimentos ();
    const ElegirPan = new Pan ();
    const ElegirSalsa = new Salsa ();
    const ElegirQueso = new Queso ();

    console.log (ElegirMedallon, ElegirCondimentos, ElegirPan, ElegirSalsa, ElegirQueso);

}

productos_Veggiewich();

*/

/*
//COMPLEMENTARIO 6
alert("Hola Rodri! Desafío Complementario Clase 6");
const sandwich = [];

do{
   let datosCliente1 = prompt("¿Cuál es tu Sandwich preferido? Ingresá los condimentos");
   sandwich.push(datosCliente1.toUpperCase());
   console.log(sandwich.string);

   var vacio = datosCliente1 == ''

}while(!(vacio));

console.table (sandwich.sort());
*/



/*
//Clase 5
alert("Hola Rodri! Desafío Clase 5");

function pedidoVeggiewich (){

let elegirmedallon= prompt("Elija el medallón: lenteja, garbanzos o porotos");
let elegirPan= prompt("Elija el pan: tradicional, salvado o centeno");
let elegirBebida= prompt("Elija la bebida: Coca, Sprite o Agua sin gas");

class Medallon {  
    constructor (tipoDeMedallon, tipoDePan, tipoDeBebida) {
        this.tipoDeMedallon = tipoDeMedallon.toLowerCase ();
        this.tipoDePan = tipoDePan.toLowerCase ();
        this.tipoDeBebida = tipoDeBebida.toLowerCase ();
        }
}

const eleccionMedallon1 = new Medallon (elegirmedallon, elegirPan, elegirBebida);
console.log (eleccionMedallon1);
}

pedidoVeggiewich ();
pedidoVeggiewich ();*/


/*
//Clase 4
alert("Hola Rodri! Desafío Clase 4 y complementario");

function veggiwich () {
    let medallonLenteja = 200;
    let pan = 50;
    let tomate = 100;
    let preguntaTomate = prompt("¿Querés tomate?");
    let producto = "";

    if ((preguntaTomate == "si")) {
        producto = medallonLenteja + pan + tomate;
    } else {
        producto = medallonLenteja + pan;
    }

    return producto;
}


function veggiwichConBebida (producto){
    let bebida = 80;
    let preguntaBebida = prompt("¿Agregamos una bebida?");
    if ((preguntaBebida == "si")) {
        producto += bebida;
    } 
    return producto;
}

function veggiwichFinal (producto) {
    alert("La hamburguesa costará: $ " + producto);
}

veggiwichFinal(veggiwichConBebida(veggiwich()));


function solicitarBebidas (){ 
    let bebidas = prompt("Elegí tu bebida: Coca, Sprite o Agua");
        while (bebidas != ""){
            switch (bebidas) {
                case "Coca": 
                    alert ("Usted solicito Coca");
                    break;
                case "Sprite": 
                    alert ("Usted solicito Sprite");
                    break;
                case "Agua": 
                    alert ("Usted solicito Agua");
                    break;
                default: 
                    alert ("Usted no solicito las bebidas ofrecidas");
                    break;
        }
            bebidas = prompt("Elegí tu bebida: Coca, Sprite o Agua");
        }

}

solicitarBebidas();


//Clase 3
/*
alert("Hola Rodri! Desafío Clase 3");

let maximoMedallon = 5;
let medallones = 0;

for (let i=0; i <=10; i++) {
    let pregunta = parseInt(prompt("¿Cuántos medallones de porotos quiere?"));
    medallones = medallones + pregunta;

    if (medallones > maximoMedallon) {

        break;
    }
}
console.log ("No hay más medallones de porotos disponibles");


let bebidas = prompt("Elegí tu bebida: Coca, Sprite o Agua");
while (bebidas != "ESC"){
    switch (bebidas) {
        case "Coca": 
            alert ("Usted solicito Coca");
            break;
        case "Sprite": 
            alert ("Usted solicito Sprite");
            break;
        case "Agua": 
            alert ("Usted solicito Agua");
            break;
        default: 
            alert ("Usted no solicito las bebidas ofrecidas");
            break;
}
    bebidas = prompt("Elegí tu bebida: Coca, Sprite o Agua");
}

function armarHamburguesa (producto, bebida, operacion){
    switch(operacion){
        case "+":
            return producto + bebida;
            break;
        case "-":
            return producto + bebida;
            break;
    }

}
alert(armarHamburguesa(producto, 150, "+"));
/*alert(armarHamburguesa(200, 50, "-"));

*/

/*
//Clase 2

alert("Hola Rodri! Desafío Clase 2");

let mayorEdad = 18;
let ingresaEdad = parseInt(prompt("Ingrese su edad"));

if (ingresaEdad >= mayorEdad)  {
    alert("Podés ingresar a la plataforma");
    let ingreseNombre = prompt("Ingrese su nombre");
    alert("El usuario ingresado es " + ingreseNombre);
} else  {
    alert("No podés ingresar a la plataforma");
}



let gustoFavorito = prompt("¿Cuál es tu gusto preferido de helado?");

if (gustoFavorito != "tramontana") {
    alert("Tu gusto preferido es " + gustoFavorito);
} else {
    alert("¡El mio también!");
}

*/

/*
//Clase 1

alert("Hola Rodrigo! Hice varias pruebas");

var numeroA = parseInt(prompt("Ingresá tu número favorito"));
let numeroB = parseInt(prompt("Ingresá tu edad"));
const numeroC = 4;

let resultadoSuma = numeroA + numeroB;
alert("El resultado de la suma es: " + resultadoSuma);

let resultadoResta = numeroA - numeroC;
console.log ("El kiosquero debe devolverme $" + resultadoResta);

let resultadoMultiplicacion = numeroA * numeroC;
alert("Cada manzana cuesta $ " + resultadoMultiplicacion);


var textoA = "CURSANDO";
var textoB = " JS";
var textoC = "TENGO "

let resultadoTexto = textoA + textoB;
console.log ("Estoy " + resultadoTexto);

let resultadoNumeroTexto = textoC + numeroC;
alert(resultadoNumeroTexto + " hermanos");


let gustoFavorito = prompt("¿Cuál es tu gusto preferido de helado?");
alert("Mi helado favorito es " + gustoFavorito);*/

