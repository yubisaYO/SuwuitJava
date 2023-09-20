function getPilihanComputer() {
  var chcomp = Math.floor(Math.random() * 3) + 1;

  if (chcomp == 1) return "gajah";
  if (chcomp == 2) return "semut";
  return "orang";
}

function rules(chpemain, chcomp) {
  if (chpemain === chcomp) return "seri";

  if (chpemain == "gajah") return chcomp == "orang" ? "Menang!" : "Kalah!";
  if (chpemain == "semut") return chcomp == "gajah" ? "Menang!" : "Kalah!";
  if (chpemain == "orang") return chcomp == "semut" ? "Menang!" : "Kalah!";
}

function responding() {
  const imgComp = document.querySelector(".img-komputer");
  const gambar = ["gajah", "semut", "orang"];

  let i = 0;
  const currTime = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - currTime > 1000) {
      clearInterval;
      return;
    }
    imgComp.setAttribute("src", "./img/" + gambar[i++] + ".png");
    if (i == gambar.length) {
      i = 0;
    }
  }, 100);
}

const rangeChoice = document.querySelectorAll("li img");

rangeChoice.forEach(function (img) {
  img.addEventListener("click", function () {
    const pComp = getPilihanComputer();
    const pPlayer = img.className;
    const result = rules(pPlayer, pComp);

    responding();

    setTimeout(function () {
      const imgComp = document.querySelector(".img-komputer");
      imgComp.setAttribute("src", "./img/" + pComp + ".png");

      const info = document.querySelector(".info");
      info.innerHTML = result;

      addScore(result);
    }, 1000);
  });
});

// const scoreComp = document.querySelector('.score.comp');
// console.log(scoreComp.classList[0]);
// var angka = scoreComp.textContent;
// console.log(parseInt(angka) + 1);

function addScore(result) {
  let angka = 0;
  if (result == "Menang!") {
    const score = document.querySelector(".score.player");
    angka = score.textContent;
    //console.log("Menang = " + parseInt(angka));
    score.innerHTML = parseInt(++angka);
  } else if (result == "Kalah!") {
    const score = document.querySelector(".score.comp");
    angka = score.textContent;
    //console.log("Kalah = " + parseInt(angka++));
    score.innerHTML = parseInt(++angka);
  }
}
