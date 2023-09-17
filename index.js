let msgEl = document.getElementById("msg");
let saveBtnEl = document.getElementById("saveBtn");
let clearBtnEl = document.getElementById("clearBtn");
let ParagraphEl = document.getElementById("Paragraph");

let storageVal = "userInput";

saveBtnEl.onclick = function () {
  let msgVal = msgEl.value;
  ParagraphEl.textContent = msgVal;
  localStorage.setItem(storageVal, msgVal);
};

clearBtnEl.onclick = function () {
  msgEl.value = "";
  localStorage.removeItem(storageVal);
};

let fromLocalStorageGetItem = localStorage.getItem(storageVal);

if (fromLocalStorageGetItem !== null) {
  msgEl.value = fromLocalStorageGetItem;
} else {
  msgEl.value = "";
}
