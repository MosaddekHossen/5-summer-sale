let count = 0;
function prod1(element){
    const selectedItemContainer = document.getElementById('selected-item');
    const itemName = document.getElementById('Accessories').innerText;
    count ++;
    const li = document.createElement('li');
    li.innerText = `${count}. ${itemName}`;
    // li.innerHTML = `${count + 1}. ${areaType} ${area} cm<sup>2</sup> <button class="btn btn-sm btn-success">Convert</button>`;  
    selectedItemContainer.appendChild(li);    
}

// let count = 0; // Initialize the count variable
// function prod1(element) {
//     const selectedItemContainer = document.getElementById('selected-item');
//     const itemName = document.getElementById('Accessories').innerText;
    
//     count++; // Increment the count variable
    
//     const li = document.createElement('li');
//     li.innerText = `${count}. ${itemName}`;
//     // You can add more content or modify the formatting of the list item here

//     selectedItemContainer.appendChild(li);
// }

// function addToCalculationEntry(areaType, area) {
//     console.log(areaType + " " + area)
//     const calculationEntry = document.getElementById('calculation-entry');

//     const count = calculationEntry.childElementCount;

//     const p = document.createElement('p');
//     p.classList.add('my-4');
//     // p.innerHTML = areaType + " " + area;
//     p.innerHTML = `${count + 1}. ${areaType} ${area} cm<sup>2</sup> <button class="btn btn-sm btn-success">Convert</button>`;

//     calculationEntry.appendChild(p);
// }

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