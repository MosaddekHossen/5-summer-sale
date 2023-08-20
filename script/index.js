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
    const firstTotal = document.getElementById('total').innerText = total;
}