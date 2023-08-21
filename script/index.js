let count = 0;
let total = 0;
function handlerClickBtn(target) {
    const selectedItemContainer = document.getElementById('selected-item');
    const itemName = target.childNodes[5].innerText;
    count++;
    const li = document.createElement('li');
    li.innerText = `${count}. ${itemName}`;
    selectedItemContainer.appendChild(li);
    const price = target.childNodes[7].innerText.split(' ')[0];
    total = parseFloat(total) + parseFloat(price);
    const totalFinal = total.toFixed(2);
    const firstTotal = document.getElementById('total').innerText = totalFinal;
    // Discount
    const discount = firstTotal / 100 * 20; 
    const discountUpdate = document.getElementById('discountId');
    const discountFinal = discount.toFixed(2);
    discountUpdate.innerText = discountFinal;
    // Total
    const totalPri = firstTotal - discount;
    const totalFiled = document.getElementById('final-price');
    const totalPriceFinal = totalPri.toFixed(2);
    totalFiled.innerText = totalPriceFinal;
}

// const applyBtn = document.getElementById('applyId');
// applyBtn.addEventListener('click',function(){

// })