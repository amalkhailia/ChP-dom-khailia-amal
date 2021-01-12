/*les fonction*/
/*btn plus*/
let btnPlus = document.querySelectorAll(".plus");
let qte = document.querySelectorAll(".qte");
let prixTotalP = document.querySelectorAll(".total");
let prixUnitP = document.querySelectorAll(".unit");
for (let i = 0; i < btnPlus.length; i++) {
  btnPlus[i].addEventListener("click", () => {
    qte[i].innerHTML = Number(qte[i].innerHTML) + 1;
    prixTotalP[i].innerHTML =
      Number(qte[i].innerHTML) * Number(prixUnitP[i].innerHTML);
    somme();
  });
}
/*btn Moins*/
let btnMoins = document.querySelectorAll(".moins");
let qteM = document.querySelectorAll(".qte");
let prixTotalM = document.querySelectorAll(".total");
let prixUnitM = document.querySelectorAll(".unit");

for (let i = 0; i < btnMoins.length; i++) {
  btnMoins[i].addEventListener("click", () => {
    if (qteM[i].innerHTML > 1) {
      qteM[i].innerHTML = Number(qteM[i].innerHTML) - 1;
      // console.log(qteM[i].innerHTML);
      prixTotalM[i].innerHTML =
        Number(qteM[i].innerHTML) * Number(prixUnitM[i].innerHTML);
      //console.log(prixTotalM[i].innerHTML);

      somme();
    }
  });
}

//total function
function somme() {
  let prixUnit = Array.from(document.querySelectorAll(".unit"));
  let qteT = Array.from(document.querySelectorAll(".qte"));
  let Ttp = document.querySelector(".total-du-total");
  let s = 0;
  for (let i in qteT) {
    s = s + Number(qteT[i].innerHTML) * Number(prixUnit[i].innerHTML);
  }
  console.log(s);
  return (Ttp.innerHTML = s);
}
// btn remove
let close = document.querySelectorAll(".delete");
let totArt = document.querySelectorAll(".total");
let toPay = document.querySelector(".total-du-total");

for (let i = 0; i < close.length; i++) {
  close[i].addEventListener("click", () => {
    close[i].parentNode.parentNode.parentNode.removeChild(
      close[i].parentNode.parentNode
    );
    toPay.innerHTML = Math.abs(
      Number(toPay.innerHTML) - Number(totArt[i].innerHTML)
    );
  });
}

//btn like
var btn = document.getElementById("btn");
function toggle() {
  if (btn.classList.contains("far")) {
    btn.classList.remove("far");
    btn.classList.add("fas");
  } else {
    btn.classList.remove("fas");
    btn.classList.add("far");
  }
}
var btn1 = document.getElementById("btn1");
function toggle1() {
  if (btn1.classList.contains("far")) {
    btn1.classList.remove("far");
    btn1.classList.add("fas");
  } else {
    btn1.classList.remove("fas");
    btn1.classList.add("far");
  }
}

var btn2 = document.getElementById("btn2");
function toggle2() {
  if (btn2.classList.contains("far")) {
    btn2.classList.remove("far");
    btn2.classList.add("fas");
  } else {
    btn2.classList.remove("fas");
    btn2.classList.add("far");
  }
}
