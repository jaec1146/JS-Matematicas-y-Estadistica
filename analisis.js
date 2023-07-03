console.log(salarios)

function personaBusqueda(personaBuscada) {
    return salarios.find(persona => persona.name == personaBuscada) 
}

function medianaPorPersona(nombre) {
    const trabajos = personaBusqueda(nombre).trabajos;

    const salarios = trabajos.map(elemento => { return elemento.salario });

    const medianaSalarios = PlatziMath.calcularMediana(salarios);

    return medianaSalarios; 
    
}

function proyecccionPorPersona(nombre) {
    const trabajos = personaBusqueda(nombre).trabajos;
    let porcentajesCrecimiento = [];

    
    for (let i = 1; i < trabajos.length; i++) {
        const salarioActual = trabajos[i].salario;
        const salarioPasado = trabajos[i - 1].salario;
        const crecimiento = salarioActual - salarioPasado;
        const porcentajeCrecimiento = crecimiento / salarioPasado;

        porcentajesCrecimiento.push(porcentajeCrecimiento);
    }

    
    
    const medianaPorcentajesCrecimiento = PlatziMath.calcularMediana(porcentajesCrecimiento)
    
    console.log({ porcentajesCrecimiento, medianaPorcentajesCrecimiento });

    const ultimoSalario = trabajos[trabajos.length - 1].salario;
    const aumento = ultimoSalario * medianaPorcentajesCrecimiento;
    const nuevoSalario = aumento + ultimoSalario;
    
    return nuevoSalario;
}

//análisis empresarial
empresas = {};


for (persona of salarios) {
    for (trabajo of persona.trabajos) {
        if (!empresas[trabajo.empresa]) {
            empresas[trabajo.empresa] = {};
        }

        if (!empresas[trabajo.empresa][trabajo.year]) {
            empresas[trabajo.empresa][trabajo.year] = [];
        }

        empresas[trabajo.empresa][trabajo.year].push(trabajo.salario);
        
    }
}

console.log({ empresas })

function medianaPorEmpresa(empresa) {
    var medianaPorAnho = [];
    var medianaEmpresa = [];
    if (!empresas[empresa]) {
        return "no hay empresa con ese nombre"
    } else {
        for (let anho = 2018; anho <= 2023; anho++) {
            var mediana = PlatziMath.calcularMediana(empresas[empresa][String(anho)]);
            medianaPorAnho.push(mediana);
        }
        return PlatziMath.calcularMediana(medianaPorAnho)
    }
}

function medianaPorAnhoEnEmpresa(empresa,anho) {
    if (!empresas[empresa]) {
        return "no hay empresa con ese nombre"
    } else if(!empresas[empresa][anho]){
        return "no hay existe ese año en la empresa"
    } else {
        var mediana = PlatziMath.calcularMediana(empresas[empresa][anho]); 
        return  mediana
    }
}

function proyecccionPorEmpresa(nombre) {
    if (!empresas[nombre]) {
        return "no se encuentra la empresa"
    } else {
        const empresaYears = Object.keys(empresas[nombre]);
        const listaMedianaYears = empresaYears.map((year) => { return medianaPorAnhoEnEmpresa(nombre, year) });
        console.log(listaMedianaYears)

        let porcentajesCrecimiento = [];

        for (let i = 1; i < listaMedianaYears.length; i++) {
            const salarioActual = listaMedianaYears[i];
            const salarioPasado = listaMedianaYears[i - 1];
            const crecimiento = salarioActual - salarioPasado;
            const porcentajeCrecimiento = crecimiento / salarioPasado;
            porcentajesCrecimiento.push(porcentajeCrecimiento)
        }

        const medianaPorcentajesCrecimiento = PlatziMath.calcularMediana(porcentajesCrecimiento);

        const ultimaMediana = listaMedianaYears[listaMedianaYears.length - 1];
        const aumento = ultimaMediana * medianaPorcentajesCrecimiento;
        const nuevoMediana = ultimaMediana + aumento;

        return nuevoMediana;
    }
}

function medianaGeneral() {
    const listaMedianas = salarios.map(persona => medianaPorPersona(persona.name));
    
    const mediana = PlatziMath.calcularMediana(listaMedianas);

    return mediana;
}

function medianaTop10() {
    const listaMedianas = salarios.map(
        persona => medianaPorPersona(persona.name)
    );

    const medianasOrdenadas = PlatziMath.ordenarLista(listaMedianas);
    const cantidad = listaMedianas.length / 10;
    const limite = listaMedianas.length - cantidad;

    const top10 = medianasOrdenadas.slice(limite, medianasOrdenadas.length);

    const medianaTop10 = PlatziMath.calcularMediana(top10);
    return medianaTop10;
    
}

function mediaDeIngresosNoFijos(empresa) {
    
}