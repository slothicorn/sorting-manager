const mainContainer = document.getElementById("app");

// Buttons HTML
const buttonArray = ["mix", "sort", "reset"];
const buttonEls = buttonArray
  .map(
    (button) =>
      `<button data-button="${button}" class=buttons__button>${button}</button>`
  )
  .join("");

const buttonsContainer = document.getElementById("buttons");
buttonsContainer.innerHTML = buttonEls;

// Value Output HTML
const valueArray = ["steps", "time"];
const valueEls = valueArray
  .map(
    (value) =>
      `<div data-value${value} class=value-outputs__output>${value}</div>`
  )
  .join("");

const valueContainer = document.getElementById("value-output");
valueContainer.innerHTML = valueEls;

// Sorting Field HTML
const sortingArray = [];

for (let i = 1; i < 11; i++) {
  sortingArray.push({
    id: i,
    value: i,
    currentOrder: i,
    DOMElement: null,
  });
}

const maxValue = sortingArray.length;

sortingEls = sortingArray
  .map(
    (
      item
    ) => `<div class='sorting-column sorting-columns__column' style=grid-column:${
      item.currentOrder
    } data-id=${item.id}>					
<div class=sorting-column__inner style=height:${
      (item.value / maxValue) * 100
    }%;></div>
</div>
`
  )
  .join("");

const columnCount = sortingArray.length;
const sortingContainer = document.getElementById("sorting-field");
sortingContainer.style.gridTemplateColumns = `repeat(${columnCount}, 1fr)`;
sortingContainer.innerHTML = sortingEls;

sortingArray.forEach((element) => {
  element.DOMElement = document.querySelector(`[data-id="${element.id}"]`);
});

//MICHANI SLOUPECKU
const mixButton = document.querySelector('[data-button="mix"]');

mixButton.addEventListener("click", () => {
  for (let i = 0; i < 100; i++) {
    const firstSelected =
      sortingArray[Math.floor(Math.random() * sortingArray.length)];
    let secondSelected =
      sortingArray[Math.floor(Math.random() * sortingArray.length)];

    while (firstSelected === secondSelected) {
      secondSelected =
        sortingArray[Math.floor(Math.random() * sortingArray.length)];
    }

    const orderPlaceholder = firstSelected.currentOrder;
    firstSelected.currentOrder = secondSelected.currentOrder;
    secondSelected.currentOrder = orderPlaceholder;

    firstSelected.DOMElement.style.gridColumn = `${firstSelected.currentOrder}`;
    secondSelected.DOMElement.style.gridColumn = `${secondSelected.currentOrder}`;
  }
});
