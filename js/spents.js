const $ = (selector) => document.querySelector(selector);
/* Spent DOMs*/
const addSpent = $('.symbolPlusSpent');
const boxAdd = $('.box-add');
const spent = $('.addSpent');
const option_50 = $('#option_50');
const option_30 = $('#option_30');
const option_20 = $('#option_20');
const select = $('.select');
const labelSpent = $('#labelSpent');
const amountSpent = $('#amountSpent');
const acceptSpent = $('#accept');
const error = $('.error');
const sideSpent = $('.spent');
const boxNewsSpent = $('.boxNewsSpent');
const newSpentP = $('.newSpentP');
const totalSpent = $('.totalSpent')
const sumSpentResult = $('.sumSpent'); 

const ArraySpent = [];
//object constructor spent
function Spent(name,cost,portion){
    this.name = name;
    this.cost = cost;
    this.portion = portion;
}
/* Income DOMs*/
const addIncome = $('.symbolPlusIncome');
const income = $('.addIncome');
const labelIncome = $('#labelIncome');
const errorIncome = $('.errorIncome');
const amountIncome = $('#amountIncome');
const acceptIncome = $('#acceptIncome');
const sideIncome = $('.income');
const boxNewsIncome = $('.boxNewsIncome');
const totalIncome = $('.totalIncome');
const sumIncomeResult = $('.sumIncome');

const ArrayIncome = [];
//object constructor Income
function Income(name, cost) {
    this.name = name;
    this.cost = cost;
}

/* Sum DOMs */
const sumSymbol = $('#sumSymbol');


//Funciones para eventos Spent
const addSpentForm = ()=> {
    boxAdd.classList.remove('in-active');
    spent.classList.remove('in-active');
    income.classList.add('in-active');
    boxAdd.classList.add('active');
    labelSpent.focus();
    
} 
const activeColor = (x) => {
    error.style.display='none'
    if (x == '50%') {
        option_50.style.color = "#FFB672";
        option_30.style.color = "";
        option_20.style.color = "";
        select.value = "50%";
    } else if (x == '30%') {
        option_50.style.color = "";
        option_30.style.color = "#FAC816";
        option_20.style.color = "";
        select.value = "30%";
    } else if (x == '20%') {
        option_50.style.color = "";
        option_30.style.color ="";
        option_20.style.color = "#BBD325";
        select.value = "20%";
    }
}
const shadowBoxLabelSpent = () => {
    if (labelSpent.value != '') {
        labelSpent.style.background = '#D9D9D9';
        error.style.display = 'none';
    } else {
        labelSpent.style.background = '#fff'
    }
}
const shadowBoxAmountSpent = () => {
    if (amountSpent.value != '') {
        amountSpent.style.background = '#D9D9D9';
        error.style.display = 'none';
    } else {
        amountSpent.style.background = '#fff'
    }
}
const agreeSpent = () => {
    if (labelSpent.value == '') {
        error.style.display = 'block';
        error.innerText = 'Coloca etiqueta de gasto';
        return
    } else if (amountSpent.value == '') {
        error.style.display = 'block'
        error.innerText = 'Coloca monto de gasto'
        return
    } else if (Number(amountSpent.value) <= 0) {
        error.style.display = 'block';
        error.innerText = 'El valor debe ser mayor a 0';
        return
    } else if (select.value == undefined) {
        error.style.display = 'block';
        error.innerText = 'Seleccione valor de porcentaje';
        return
    } else {
        for (let i = 0; i < ArraySpent.length; i++) {
            if (labelSpent.value == ArraySpent[i].name) {
                error.style.display = 'block';
                error.innerText = 'Ya existe esa etiqueta';
                return
            }
        }
        error.display = 'none';
        var spent0 = new Spent(labelSpent.value, amountSpent.value, select.value);
        ArraySpent.push(spent0);
        console.log(ArraySpent);

        //Agregar a side spent
        const spentItem = document.createElement('div');
        spentItem.classList.add('newSpent');
        const divParagraph = document.createElement('div');
        divParagraph.classList.add('divParagraph');
        const titleSpent = document.createElement('p');
        titleSpent.classList.add('newSpentP');
        const porcentajeLabel = document.createElement('p');
        porcentajeLabel.classList.add('newSpentP');
        const amountSpentLabel = document.createElement('p');
        amountSpentLabel.classList.add('newSpentP');
        const symbolDelete = document.createElement('span');
        symbolDelete.classList.add('material-symbols-outlined');
        symbolDelete.innerText = 'delete';
        symbolDelete.setAttribute('onclick', 'deleteBottom(this)');

        boxNewsSpent.append(spentItem);
        spentItem.append(divParagraph, symbolDelete)
        divParagraph.append(titleSpent, porcentajeLabel, amountSpentLabel);

        const lastSpent = ArraySpent[ArraySpent.length - 1];
        titleSpent.innerText = lastSpent.name;
        porcentajeLabel.innerText = lastSpent.portion;
        amountSpentLabel.innerHTML = '$'+lastSpent.cost;

        const colorPortion = (x) => {
            if (x == '50%'){
                porcentajeLabel.classList.add('portion_50')
            }else if (x == '30%') {
                porcentajeLabel.classList.add('portion_30')
            } else {
                porcentajeLabel.classList.add('portion_20')
            }
        }

        colorPortion(lastSpent.portion);

        labelSpent.value = '';
        amountSpent.value = '';
        select.value = '';
        (option_20 && option_30 && option_50).style.color = "";

        /* show label html Total Spent */
        totalSpent.classList.remove('in-active');

        sumSpent();
        showSymbol();

        boxAdd.classList.add('in-active');
        spent.classList.add('in-active');
        boxAdd.classList.remove('active');
        return
    }
}
const outSpentAdd = () => {
    spent.onpointerleave = () => {
        boxAdd.classList.add('in-active');
        spent.classList.add('in-active');
        boxAdd.classList.remove('active');
    }
}
const deleteBottom = (x) => {
    console.log(ArraySpent);
    let element = x.parentNode.firstChild.firstChild.innerText;
    let index = ArraySpent.map(label => label.name).indexOf(element);
    console.log(index);
    ArraySpent[ArraySpent.splice(index,1)]
    console.log(ArraySpent);
    x.parentNode.remove();

    if (ArraySpent.length == 0) {
        totalSpent.classList.add('in-active');
    }

    showSymbol();
}
const sumSpent = () => {
    let costs = ArraySpent.map(spent => Number(spent.cost));
    let sum = costs.reduce((a, b) => a + b);
    
    sumSpentResult.innerText = '$' + sum;
}

//Events
addSpent.addEventListener('click', addSpentForm);
labelSpent.addEventListener('input', shadowBoxLabelSpent);
amountSpent.addEventListener('input', shadowBoxAmountSpent);
acceptSpent.addEventListener('click', agreeSpent);