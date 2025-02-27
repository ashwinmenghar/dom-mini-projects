// 7250
const moveAllRightBtn = document.querySelector(".move-all-right");
const moveAllLeftBtn = document.querySelector(".move-all-left");
const moveToRightBtn = document.querySelector(".move-to-right");
const moveToLeftBtn = document.querySelector(".move-to-left");
const rightSection = document.querySelector(".right-section");
const leftSection = document.querySelector(".left-section");
const transferList = document.querySelector(".transfer-list");

// Update button state based on childrens
const updateBtn = () => {
  const leftChecked = leftSection.querySelectorAll("div").length > 0;
  const rightChecked = rightSection.querySelectorAll("div").length > 0;

  const leftIsEmpty = leftSection.querySelectorAll("input:checked").length > 0;
  const rightIsEmpty = rightSection.querySelectorAll("input:checked").length > 0;

  moveAllRightBtn.disabled = !leftChecked;
  moveAllLeftBtn.disabled = !rightChecked;

  moveToLeftBtn.disabled = !rightIsEmpty;
  moveToRightBtn.disabled = !leftIsEmpty;
};

// Update button state based on checked checkboxes
transferList.addEventListener("change", () => updateBtn());

// Move selected items from left to right
moveToRightBtn.addEventListener("click", () => {
  moveCheckedItems(leftSection, rightSection);
});

// Move selected items from right to left
moveToLeftBtn.addEventListener("click", () => {
  moveCheckedItems(rightSection, leftSection);
});

// Move all items from left to right
moveAllRightBtn.addEventListener("click", () => {
  moveAllItems(leftSection, rightSection);
});

// Move all items from right to left
moveAllLeftBtn.addEventListener("click", () => {
  moveAllItems(rightSection, leftSection);
});

const moveCheckedItems = (fromThisSide, toThisSide) => {
  const checkedItems = fromThisSide.querySelectorAll("input:checked");
  checkedItems.forEach((item) => {
    item.checked = false;
    const element = item.parentNode;
    toThisSide.appendChild(element);
  });

  updateBtn();
};

const moveAllItems = (fromThisSide, toThisSide) => {
  let allItems = Array.from(fromThisSide.children);
  allItems.forEach((child) => toThisSide.appendChild(child));

  updateBtn();
};
