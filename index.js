const inputFeild = document.getElementById("inp-feild");
const clearBtn = document.getElementById("clear-btn");
const btn = document.getElementById("convert-btn");
const inpNumM = document.getElementById("inp-num-m");
const inpNumF = document.getElementById("inp-num-f");
const inpNumL = document.getElementById("inp-num-l");
const inpNumG = document.getElementById("inp-num-g");
const inpNumK = document.getElementById("inp-num-k");
const inpNumP = document.getElementById("inp-num-p");
const numTotalM = document.getElementById("total-amount-m");
const numTotalF = document.getElementById("total-amount-f");
const numTotalL = document.getElementById("total-amount-l");
const numTotalG = document.getElementById("total-amount-g");
const numTotalK = document.getElementById("total-amount-k");
const numTotalP = document.getElementById("total-amount-p");
btn.addEventListener("click", function () {
  inpNumM.textContent = inputFeild.value;
  let Metertotal = inputFeild.value * 3.3;
  numTotalM.textContent = Metertotal;

  inpNumF.textContent = inputFeild.value;
  let feetTotal = inputFeild.value * 0.304;
  numTotalF.textContent = feetTotal;

  inpNumL.textContent = inputFeild.value;
  let literstotal = inputFeild.value * 0.26;
  numTotalL.textContent = literstotal;

  inpNumG.textContent = inputFeild.value;
  let gallonstotal = inputFeild.value * 3.78;
  numTotalG.textContent = gallonstotal;

  inpNumK.textContent = inputFeild.value;
  let kilostotal = inputFeild.value * 2.2;
  numTotalK.textContent = kilostotal;

  inpNumP.textContent = inputFeild.value;
  let poundstotal = inputFeild.value * 0.453;
  numTotalP.textContent = poundstotal;
});
clearBtn.addEventListener("click", function () {
  location.reload();
});
