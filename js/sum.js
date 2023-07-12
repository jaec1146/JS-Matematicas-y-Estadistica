const showSymbol = () => {
    if (ArraySpent.length != 0 && ArrayIncome.length != 0) {
        sumSymbol.style.display = "flex";
        sumSymbol.classList.add('enlarge');
    } else {
        sumSymbol.style.display = "none";
    }
}
const calculate = () => {
    const sumSpent = ArraySpent.map(a => Number(a.cost)).reduce((x, y) => x + y);
    const sumIncomeX = ArrayIncome.map(a => Number(a.cost)).reduce((x, y) => x + y);
    const totalSum = sumIncomeX - sumSpent;
    
    let arrayPercentage_50 = ArraySpent.filter(percentage_50 => percentage_50.portion == '50%');
    if (arrayPercentage_50 != 0) {
        var sum_50 = arrayPercentage_50.map(a => Number(a.cost)).reduce((x, y) => x + y);
    } else {
        sum_50 = 0;
    }

    let arrayPercentage_30 = ArraySpent.filter(percentage_30 => percentage_30.portion == '30%');
    if (arrayPercentage_30 != 0) {
        var sum_30 = arrayPercentage_30.map(a => Number(a.cost)).reduce((x, y) => x + y);
    } else {
        sum_30 = 0;
    }

    let arrayPercentage_20 = ArraySpent.filter(percentage_20 => percentage_20.portion == '20%');
    if (arrayPercentage_20 != 0) {
        var sum_20 = arrayPercentage_20.map(a => Number(a.cost)).reduce((x, y) => x + y);
    } else {
        sum_20 = 0;
    }

    ArraySums = {
        total: totalSum,
        forced:sum_50,
        own:sum_30,
        saving:sum_20
    }
    
    $('#calculate').innerText = '';
    sumSymbol.classList.add('transformCalc');
    sumSection.classList.remove('in-active');
    sumSection.style.display = 'flex';


    total.innerText = '$'+ArraySums.total;
    forced.innerText = '$'+ArraySums.forced;
    own.innerText = '$'+ArraySums.own;
    saving.innerText = '$'+ArraySums.saving;

    if (ArraySums.forced > (sumIncomeX * 50 / 100)) {
        forced.classList.remove('green');
        forced.classList.add('red');
    } else {
        forced.classList.remove('red');
        forced.classList.add('green');
    }
    
    if (ArraySums.own > (sumIncomeX * 30 / 100)) {
        own.classList.remove('green');
        own.classList.add('red');
    } else {
        own.classList.remove('red');
        own.classList.add('green');
    }
    if (ArraySums.saving > (sumIncomeX * 20 / 100)) {
        saving.classList.remove('green');
        saving.classList.add('red');
    } else {
        saving.classList.remove('red');
        saving.classList.add('green');
    }

}

