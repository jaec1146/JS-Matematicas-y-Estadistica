const PlatziMath = {};

PlatziMath.calcularPromedio = function calcularPromedio(lista) {
    //let sumaLista = 0;

    // for(let i = 0; i < lista.length;i++){
    //     sumaLista = sumaLista + lista[i];
    // }

    // const sumaDeValores = (valorAcumulado, nuevoValor)=>valorAcumulado + nuevoValor;
    // const sumaLista = lista.reduce(sumaDeValores);

    const sumaLista = lista.reduce((a,b) => a + b);

    const promedio =  sumaLista / lista.length;
    return promedio;
}

PlatziMath.esPar= function esPar(lista) {
    // lista.length % 2?false:true;
    return !(lista.length % 2);
}

PlatziMath.esImpar = function esImpar(lista) {
    return lista.length % 2;
}

PlatziMath.calcularModa = function calcularModa(lista) {
    const listaCount = {};
    
    for (let i = 0; i < lista.length; i++) {
        const elemento = lista[i];

        if (listaCount[elemento]) {
            listaCount[elemento] += 1
        } else {
            listaCount[elemento] = 1;
        }
    }

    const listaArray = Object.entries(listaCount);
    const listaOrdenada = ordenarListaBidimensional(listaArray,1);
    const moda = listaOrdenada[0][0];
    
    return moda; 
}

PlatziMath.calcularMediana = function calcularMediana(lista) {
    lista = PlatziMath.ordenarLista(lista);
    const listaEsPar = PlatziMath.esPar(lista);

    if (listaEsPar) {
        const a = (lista.length / 2) -1;
        const b = lista.length / 2;
        const listaMitades = [];
        listaMitades.push(lista[a]);
        listaMitades.push(lista[b]);

        const medianaListaPar = PlatziMath.calcularPromedio(listaMitades);
        return medianaListaPar;
    } else {
        const indexMitadListaImpar = Math.floor(lista.length / 2);
        const medianaListaImpar = lista[indexMitadListaImpar];
        return medianaListaImpar;
    }
}

PlatziMath.ordenarLista = function ordenarLista(lista) {
    comparar = (a, b) => { return a - b }
    let listaOrdenada = lista.sort(comparar);
    return listaOrdenada;
}

PlatziMath.ordenarListaBidimensional = function ordenarListaBidimensional(lista,i) {
    return lista.sort((a, b) => b[i] - a[i])
}

PlatziMath.mediaCuadratica = function mediaCuadratica(lista) {
    var listUpTwo = lista.map((x) => x ** 2)
    console.log(listUpTwo)
    var sum = listUpTwo.reduce(
        (sum = 0, newVal)=>{
            return sum + newVal
        }
    )
    console.log(sum)
    var result = Math.sqrt(sum / lista.length)
    return result
}

PlatziMath.mediaGeo = function mediaGeo(list){
    let sum = list.reduce((accumulator,currentValue) => accumulator * currentValue, 1)
    console.log(sum);
    return Number(Math.pow(sum,1/list.length).toFixed(2));
}