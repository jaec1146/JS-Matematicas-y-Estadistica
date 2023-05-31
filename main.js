/*Caudrado*/
console.group('cuadrado');
console.log('Llama la función cuadrado con su parámetro que seria uno de sus lados');

function cuadrado(lado) {
    return ({
        perimetro: lado * 4,
        area: lado * lado
    })
}
console.groupEnd('cuadrado');
/*Triangulo*/
console.group('triangulo');
console.log('Llama la función triangulo con sus parámetros lado A, lado B , Altura y Base. El Lado B solo sera tomado en cuenta en el triangulo escaleno. Si no tiene la altura se sacara automáticamente si la define como undefine');

function triangulo(Lado_A, Lado_B, Altura, Base) {
    var tipo;
    if (Lado_A === Lado_B) {
        if (Lado_A === Base) {
            tipo = 'equilatero';
        } else {
            tipo = 'isosceles'
        }
    } else{
        tipo = 'escaleno';
    }

    if (tipo == 'equilatero') {
        if (Altura == undefined) {
            //aplicando teorema de Pitágoras:
            Altura = Math.sqrt(Math.pow(Lado_A, 2) - (Base / 2));
            console.log('Altura: ' + Altura)
        }
        return ({
            tipo: tipo,
            perimetro: Lado_A + Lado_B + Base,
            area: Base * Altura / 2
        })
    } else if (tipo == 'escaleno') {
        console.log('Debes ver dado como base el de mayor longitud');
        if (Altura == undefined) {
            let s = Base + Lado_A + Lado_B;
            Altura = (2 / Base) * (Math.sqrt(s * (s - Lado_A) * (s - Lado_B) * (s - Base)));
            console.log('Altura: ' + Altura)
        }
        return ({
            tipo: tipo,
            perimetro: Lado_A + Lado_B + Base,
            area: ((Math.pow(Lado_A, 2) / Base) * Altura / 2) + ((Math.pow(Lado_B, 2) / Base) * Altura / 2)
        })
        
    } else if (tipo == 'isosceles') {
        if (Altura == undefined) {
            //aplicando teorema de Pitágoras:
            Altura = Math.sqrt(Math.pow(Lado_A, 2) - (Math.pow(Base, 2) / 4))
            console.log('Altura: '+Altura)
        }
        return ({
            tipo: tipo,
            perimetro: Lado_A * 2 + Base,
            area: (1 / 2) * Base * Altura
        })
    }
}
console.groupEnd('triangulo');
/*Circulo*/
console.group('circulo');
function circulo(radio) {
    const diametro = radio * 2;
    const PI = Math.PI;
    const circunferencia = diametro * PI;
    const areaCirculo = (radio ** 2) * PI;

    return ({
        perimetro: circunferencia,
        area: areaCirculo
    })
}   
console.groupEnd('circulo');
/*Porcentajes*/
console.group('Porcentaje')
function precioDescuento(precio, descuento) {
    let resultado = (precio * (100 - descuento)) / 100
    return resultado
}

const btnCal = document.querySelector('#boton')
const resultado = document.querySelector('#resultado')
const itemsHTML = document.querySelector("#items")
const precio = document.querySelector("#precio")
const contenedorPrecio = document.querySelector("#contenedorPrecio")

const items = [];
const cupones = [];
// constructor de items 
function item (nombre,precio,img) {
    this.nombre = nombre,
    this.precio = precio,
    this.imagen = img,
    items.push(this)
}
// items
var sueter = new item("sueter", 300, "https://i.postimg.cc/xTB1pCnX/hoodie.png");
var tShirtWhite = new item("t-shirt-white", 100, "./img/t-shirt-white.png");
var tShirtBlack = new item("t-shirt-black", 110, "./img/t-shirt-black.png");

// insertar los items con sus atributos en html
for(item of items){
    var itemImg = document.createElement('img');
    itemImg.setAttribute("class","itemsImg");
    itemImg.setAttribute("src", item.imagen);
    itemImg.setAttribute("alt", item.nombre);
    itemImg.setAttribute("value", item.precio);
    itemImg.setAttribute("onclick", "escoger(" + item.precio + ")"); //evento click desde el html para llamar la función escoger
    itemsHTML.appendChild(itemImg);
}

// constructor de cupones
function cupon (nombre, vigencia, descuento) {
    this.nombre = nombre,
    this.vigencia = vigencia,
    this.descuento = descuento,
    cupones.push(this)
}

// función que inserta el precio del item seleccionado
escoger = (x) => {
    if (document.querySelector("#simbolo") !== null ) {
        document.querySelector("#simbolo").remove();
        const simPrecio = document.createElement("span");
        simPrecio.setAttribute("id", "simbolo");
        precio.insertAdjacentElement("beforebegin",simPrecio);
        simPrecio.innerText = "$";
    } else {
        const simPrecio = document.createElement("span");
        simPrecio.setAttribute("id", "simbolo");
        precio.insertAdjacentElement("beforebegin",simPrecio);
        simPrecio.innerText = "$";
    }
    precio.innerText = x;
    resultado.innerText = "";
}

// cupones
var platzifest = new cupon("platzifest", "13/02/2024", 35);
var hotsale = new cupon("hotsale", "31/05/2023", 50);
console.log(cupones);

//función para hacer el calculo del porcentaje a disminuir del cupón
const calculo = () => {
    const precio = parseInt(document.querySelector('#precio').innerText);
    const descuento = document.querySelector('#cupon').value;
    console.log(precio);
    for (cupon of cupones) {
        if (cupon.nombre === descuento) {
            console.log(cupon.descuento)
            let r = precioDescuento(precio, cupon.descuento)
            resultado.innerHTML = "Cupón valido: &#128526 <br>" +"$" + r;
            return
        } else if(isNaN(precio)) {
            resultado.innerHTML = "Escoge un item &#128579";
            return
        }else {
            resultado.innerHTML = "Cupón invalido: &#128557 <br>" + "$" + precio;
        }
    }
} 

btnCal.addEventListener('click', calculo)


console.groupEnd('Porcentaje')