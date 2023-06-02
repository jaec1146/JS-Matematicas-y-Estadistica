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

function esImpar(lista) {
    return lista.length % 2;
}

function calcularMediana(lista) {
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

function ordenarLista(lista) {
    comparar = (a, b) => { return a - b }
    let listaOrdenada = lista.sort(comparar);
    return listaOrdenada;
}