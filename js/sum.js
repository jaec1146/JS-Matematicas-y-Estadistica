const showSymbol = () => {
    if (ArraySpent.length != 0 && ArrayIncome.length != 0) {
        sumSymbol.style.display="flex"
        console.log('si es diferente de 0', sumSymbol)
    } else {
        sumSymbol.style.display = "none";
        console.log('es 0')
    }
}