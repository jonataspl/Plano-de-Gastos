const desc = document.querySelector(".inputDesc");
const value = document.querySelector(".inputValue");
const gainButton = document.querySelector(".addGain");
const lossButton = document.querySelector(".addLoss");
const totalValue = document.querySelector(".totalBank");
const listAll = document.querySelector(".listAll");
const listAllLoss = document.querySelector(".listAllLoss");

let allItens = [];
let allItensLoss = [];
let totalGain = 0;
let totalLoss = 0;
let mounthTotal = 0;

function getInfo() {
  allItens.push([value.value, desc.value]);

  desc.value = "";
  value.value = "";

  showValues();
}

function showValues() {
  let newItem = "";
  totalGain = 0;

  allItens.forEach((valor, index) => {
    totalGain += Number(valor[0]);
    newItem =
      newItem +
      `<li class="valueBar">
          <p>
            R$ ${valor[0]} - ${valor[1]}
          </p>
          <div class="closeButton" onclick="deleteItem(${index})">
            x
          </div>
        </li>`;
  });

  listAll.innerHTML = newItem;
  calculateMonthTotal();
}

function getInfoLoss() {
  allItensLoss.push([value.value, desc.value]);

  desc.value = "";
  value.value = "";

  showValuesLoss();
}

function showValuesLoss() {
  let newItemLoss = "";
  totalLoss = 0;

  allItensLoss.forEach((valor, index) => {
    totalLoss += Number(valor[0]);
    newItemLoss =
      newItemLoss +
      `<li class="valueBarLoss">
          <p>
            R$ ${valor[0]} - ${valor[1]}
          </p>
          <div class="closeButton" onclick="deleteItemLoss(${index})">
            x
          </div>
        </li>`;
  });

  listAllLoss.innerHTML = newItemLoss;
  calculateMonthTotal();
}

function calculateMonthTotal() {
  monthTotal = totalGain - totalLoss;
  totalValue.textContent = `Total: R$ ${monthTotal}`;
}

function deleteItem(index) {
  allItens.splice(index, 1);

  showValues();
}

function deleteItemLoss(index) {
  allItensLoss.splice(index, 1);

  showValuesLoss();
}

gainButton.addEventListener("click", getInfo);
lossButton.addEventListener("click", getInfoLoss);
