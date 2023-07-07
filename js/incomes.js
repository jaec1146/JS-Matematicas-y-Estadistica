


addIncomeForm = () => {
    boxAdd.classList.remove('in-active');
    income.classList.remove('in-active');
    spent.classList.add('in-active')
    boxAdd.classList.add('active');
}

addIncome.addEventListener('click', addIncomeForm);