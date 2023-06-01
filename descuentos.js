const inputPrice = document.querySelector('#price');
const inputCoupon = document.querySelector('#coupon');
const btn = document.querySelector('#calculate');
const pResult = document.querySelector('#result');

btn.addEventListener('click',calcularPrecioConDescuento);

//const arrayUObjecto = undefined;
// const couponObj = {
//     'JuanDC_es_Batman':30,
//     '3451':25,
//     'XT':15
// }

const couponList = [];
couponList.push({
    name:'JuanDC_es_Batman',
    discount: 30,
})

function calcularPrecioConDescuento(){
    const price = Number(inputPrice.value);
    const coupon = inputCoupon.value;

    if(!price || !coupon){
        pResult = innerText = 'CHANCLA por favor llená el formulario';
        return
    }

    let discount;

    // if(couponObj[coupon]){
    //     discount = couponObj[coupon];
    // }else{
    //     pResult.innerText = 'El cupón no es válido';
    //     return; 
    // }

    function busquedaDeCupon(couponElement){
        return couponElement.name == coupon;
    }

    const couponInArray = couponList.find(busquedaDeCupon);

    if(couponInArray){
        discount = couponInArray.discount;
    }else{
        pResult.innerText = 'El cupón no es válido';
        return;
    }

    const newPrice = (price * (100 - discount))/100;

    pResult.innerText = 'El nuevo precio con descuento es $' + newPrice;
}