let count = 0;
function handlerClickBtn(target){
    const selectedItemContainer = document.getElementById('selected-item');
    const itemName = target.childNodes[5].innerText;
    count ++;
    const li = document.createElement('li');
    li.innerText = `${count}. ${itemName}`;
    selectedItemContainer.appendChild(li);
}

// let total = 0;
// function handleCLikBtn(target) {
//   const selectedItemContainer = document.getElementById("selected-items");
//   const itemName = target.parentNode.childNodes[1].innerText;
//   const li = document.createElement("li");
//   li.innerText = itemName;
//   selectedItemContainer.appendChild(li);
//   const price = target.parentNode.childNodes[5].innerText.split(" ")[1];
//   total = parseInt(total) + parseInt(price);
//   document.getElementById("total").innerText = total;
// }