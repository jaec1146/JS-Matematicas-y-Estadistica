const $ = (selector) => document.querySelector(selector);

const addSpent = $('.symbolPlusSpent');
const boxAdd = $('.box-add');
const spent = $('.addSpent');
const option_50 = $('#option_50');
const option_30 = $('#option_30');
const option_20 = $('#option_20');
const select = $('.select');
const labelSpent = $('#labelSpent');
const amountSpent = $('#amountSpent');


const addSpentForm = ()=> {
    boxAdd.classList.remove('in-active');
    spent.classList.remove('in-active');
    boxAdd.classList.add('active');
} 

const activeColor = (x) => {
    if (x == '50%') {
        option_50.style.color = "#FFB672";
        option_30.style.color = "#D9D9D9";
        option_20.style.color = "#D9D9D9";
        select.value = "50%";
    } else if (x == '30%') {
        option_50.style.color = "#D9D9D9";
        option_30.style.color = "#FAC816";
        option_20.style.color = "#D9D9D9";
        select.value = "30%";
    } else if (x == '20%') {
        option_50.style.color = "#D9D9D9";
        option_30.style.color ="#D9D9D9";
        option_20.style.color = "#BBD325";
        select.value = "20%";
    }
    console.log(select.value)
}

const shadowBoxLabelSpent = () => {
    if (labelSpent.value != '') {
        labelSpent.style.background = '#D9D9D9'
    } else {
        labelSpent.style.background = '#fff'
    }
}
const shadowBoxAmountSpent = () => {
    if (amountSpent.value != '') {
        amountSpent.style.background = '#D9D9D9'
    } else {
        amountSpent.style.background = '#fff'
    }
}

addSpent.addEventListener('click', addSpentForm);
labelSpent.addEventListener('input', shadowBoxLabelSpent);
amountSpent.addEventListener('input',shadowBoxAmountSpent)