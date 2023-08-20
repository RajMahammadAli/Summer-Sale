let count = 0;
let total = 0;

function getCartInfo(data) {
  const purchaseButton = document.getElementById("Purchase-button");
  const keyWordInput = document.getElementById("keyWordInput");
  const submitButton = document.getElementById("submitButton");
  const totalPrice = document.getElementById("total-price");
  const grandTotal = document.getElementById("grandTotal");
  const itemsName = data.childNodes[3].childNodes[3].innerText;

  const price = parseFloat(
    data.childNodes[3].childNodes[5].innerText.split(" ")[0]
  );

  total = total + price;

  totalPrice.innerText = total;

  //Creating New elements
  const ol = document.createElement("ol");
  const li = document.createElement("li");
  li.innerText = `${(count += 1)} ${itemsName}`;
  ol.appendChild(li);
  const selectedItems = document.getElementById("selected-items");
  selectedItems.classList.add("p-4");
  selectedItems.appendChild(ol);

  //enabling make purchase button active
  if (total > 0) {
    purchaseButton.removeAttribute("disabled");
  } else {
    purchaseButton.setAttribute("disabled", true);
  }

  //enabling apply button active

  if (total >= 200) {
    submitButton.removeAttribute("disabled");
  } else {
    submitButton.setAttribute("disabled", true);
  }

  //calculating discount

  let discount = 0;
  submitButton.addEventListener("click", function () {
    const discountText = document.getElementById("discountText");
    if (keyWordInput.value === "SELL200") {
      discount = (total * 20) / 100;
      grandTotal.innerText = (total - discount).toFixed(2);
      console.log(discount);
      discountText.innerText = discount.toFixed(2);
    }
    keyWordInput.value = " ";
  });

  const grandTotalValue = total.toFixed(2);

  grandTotal.innerText = grandTotalValue;
  console.log(total.toFixed(2));
}

//reloader
const closeButton = document.getElementById("closeButton");
closeButton.addEventListener("click", function () {
  location.reload();
});
