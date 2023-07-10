
//functions
const addIncomeForm = () => {
    boxAdd.classList.remove('in-active');
    income.classList.remove('in-active');
    spent.classList.add('in-active')
    boxAdd.classList.add('active');
    labelIncome.focus();
}
const shadowBoxLabelIncome = () => {
    if (labelIncome.value != '') {
        labelIncome.style.background = '#D9D9D9';
        errorIncome.style.display = 'none';
    } else {
        labelIncome.style.background = '#fff'
    }
}
const shadowBoxAmountIncome = () => {
    if (amountIncome.value != '') {
        amountIncome.style.background = '#D9D9D9';
        errorIncome.style.display = 'none';
    } else {
        amountIncome.style.background = '#fff'
    }
}
const agreeIncome = () => {
    if (labelIncome.value == '') {
        errorIncome.style.display = 'block';
        errorIncome.innerText = 'Coloca etiqueta de gasto';
        return
    } else if (amountIncome.value == '') {
        errorIncome.style.display = 'block'
        errorIncome.innerText = 'Coloca monto de gasto'
        return
    } else if (Number(amountIncome.value) <= 0) {
        errorIncome.style.display = 'block';
        errorIncome.innerText = 'El valor debe ser mayor a 0';
        return
    } else {
        for (let i = 0; i < ArrayIncome.length; i++) {
            if (labelIncome.value == ArrayIncome[i].name) {
                errorIncome.style.display = 'block';
                errorIncome.innerText = 'Ya existe esa etiqueta';
                return
            }
        }
        errorIncome.display = 'none';
        var income0 = new Income(labelIncome.value, amountIncome.value);
        ArrayIncome.push(income0);
        console.log(ArrayIncome);

        //Agregar a side Income
        const incomeItem = document.createElement('div');
        incomeItem.classList.add('newIncome');
        const divParagraphIncome = document.createElement('div');
        divParagraphIncome.classList.add('divParagraphIncome');
        const titleIncome = document.createElement('p');
        titleIncome.classList.add('newIncomeP');
        const amountIncomeLabel = document.createElement('p');
        amountIncomeLabel.classList.add('newIncomeP');
        const symbolDeleteIncome = document.createElement('span');
        symbolDeleteIncome.classList.add('material-symbols-outlined');
        symbolDeleteIncome.innerText = 'delete';
        symbolDeleteIncome.setAttribute('onclick', 'deleteBottomIncome(this)');

        boxNewsIncome.append(incomeItem);
        incomeItem.append(divParagraphIncome, symbolDeleteIncome)
        divParagraphIncome.append(titleIncome, amountIncomeLabel);

        const lastIncome = ArrayIncome[ArrayIncome.length - 1];
        titleIncome.innerText = lastIncome.name;
        amountIncomeLabel.innerHTML = '$'+lastIncome.cost;

        labelIncome.value = '';
        amountIncome.value = '';

        /* show totalIncome label */
        totalIncome.classList.remove('in-active');

        sumIncome();

        boxAdd.classList.add('in-active');
        income.classList.add('in-active');
        boxAdd.classList.remove('active');
        return
    }
}
const outIncomeAdd = () => {
    income.onpointerleave=()=>{
        boxAdd.classList.add('in-active');
        income.classList.add('in-active');
        boxAdd.classList.remove('active');
    }
}
const deleteBottomIncome = (x) => {
    console.log(ArrayIncome);
    let element = x.parentNode.firstChild.firstChild.innerText;
    let index = ArrayIncome.map(label => label.name).indexOf(element);
    console.log(index);
    ArrayIncome[ArrayIncome.splice(index,1)]
    console.log(ArrayIncome);
    x.parentNode.remove();

    if (ArrayIncome.length == 0) {
        totalIncome.classList.add('in-active');
    }
}
const sumIncome = () => {
    let costs = ArrayIncome.map(income => Number(income.cost));
    let sum = costs.reduce((a, b) => a + b);
    
    sumIncomeResult.innerText = '$'+sum;
}
//Events
addIncome.addEventListener('click', addIncomeForm);
labelIncome.addEventListener('input', shadowBoxLabelIncome);
amountIncome.addEventListener('input', shadowBoxAmountIncome);
acceptIncome.addEventListener('click', agreeIncome);