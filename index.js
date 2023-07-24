const inputFeild = document.getElementById("inp-feild");
const clearBtn = document.getElementById("clear-btn");
const btn = document.getElementById("convert-btn");
const inpNumM = document.getElementById("inp-num-m");
const inpNumF = document.getElementById("inp-num-f");
const inpNumL = document.getElementById("inp-num-l");
const inpNumG = document.getElementById("inp-num-g");
const inpNumK = document.getElementById("inp-num-k");
const inpNumP = document.getElementById("inp-num-p");
const inpNumC = document.getElementById("inp-num-c");
const inpNumF2 = document.getElementById("inp-num-f-2");
const numTotalM = document.getElementById("total-amount-m");
const numTotalF = document.getElementById("total-amount-f");
const numTotalL = document.getElementById("total-amount-l");
const numTotalG = document.getElementById("total-amount-g");
const numTotalK = document.getElementById("total-amount-k");
const numTotalP = document.getElementById("total-amount-p");
const numTotalC = document.getElementById("total-amount-c");
const numTotalF3 = document.getElementById("total-amount-f-2");
btn.addEventListener("click", function () {
  inpNumM.textContent = inputFeild.value;
  let Metertotal = inputFeild.value * 3.3;
  let totalMeter = Metertotal.toFixed(2);
  numTotalM.textContent = totalMeter;

  inpNumF.textContent = inputFeild.value;
  let feetTotal = inputFeild.value * 0.304;
  let totalFeet = feetTotal.toFixed(2);
  numTotalF.textContent = totalFeet;

  inpNumL.textContent = inputFeild.value;
  let literstotal = inputFeild.value * 0.26;
  let totalLiters = literstotal.toFixed(2);
  numTotalL.textContent = totalLiters;

  inpNumG.textContent = inputFeild.value;
  let gallonstotal = inputFeild.value * 3.78;
  let totalgallons = gallonstotal.toFixed(2);
  numTotalG.textContent = totalgallons;

  inpNumK.textContent = inputFeild.value;
  let kilostotal = inputFeild.value * 2.2;
  let totalkilos = kilostotal.toFixed(2);
  numTotalK.textContent = totalkilos;

  inpNumP.textContent = inputFeild.value;
  let poundstotal = inputFeild.value * 0.453;
  let totalpounds = poundstotal.toFixed(2);
  numTotalP.textContent = totalpounds;

  inpNumC.textContent = inputFeild.value;
  let celciusstotal = inputFeild.value * 1.8 + 32;
  let totalcelciuss = celciusstotal.toFixed(2);
  numTotalC.textContent = totalcelciuss;

  inpNumF2.textContent = inputFeild.value;
  let fahrenheitstotal = (5 / 9) * (inputFeild.value - 32);
  let totalfahrenheits = fahrenheitstotal.toFixed(2);
  numTotalF3.textContent = totalfahrenheits;
});
clearBtn.addEventListener("click", function () {
  location.reload();
});
