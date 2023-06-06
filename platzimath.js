function calcularPromedio(lista) {
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

function esPar(lista) {
    // lista.length % 2?false:true;
    return !(lista.length % 2);
}

const PlatziMath = {};


PlatziMath.function esImpar(listPlatziMath.a) {
    return lista.length % 2;
}

PlatziMath.function calcularModa(lista) {
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

PlatziMath.function calcularMediana(lista) {
    lista = ordenarLista(lista);
    const listaEsPar = esPar(lista);

    if (listaEsPar) {
        let a = (lista.length / 2) -1;
        let b = lista.length / 2;

        const indexMitadListaPar = [a, b];
        console.log(indexMitadListaPar);
        const medianaListaPar = calcularPromedio([lista[a],lista[b]]);
        return medianaListaPar;
    } else {
        const indexMitadListaImpar = Math.floor(lista.length / 2);
        const medianaListaImpar = lista[indexMitadListaImpar];
        return medianaListaImpar;
    }
}

PlatziMath.function ordenarLista(lista) {
    comparar = (a, b) => { return a - b }
    let listaOrdenada = lista.sort(comparar);
    return listaOrdenada;
}

PlatziMath.function ordenarListaBidimensional(lista,i) {
    return lista.sort((a, b) => b[i] - a[i])
}

PlatziMath.function mediaCuadratica(lista) {
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