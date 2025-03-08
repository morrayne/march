let pos = 0;
let box = document.getElementById("box");
let meno = document.getElementById("meno");
let mecry = document.getElementById("mecry");
let hat = document.getElementById("hat");
let desc = document.getElementById("desc");
let poor = document.getElementById("poor");
let flowers = document.getElementById("flowers");
let choises = document.getElementById("choises");
const text = [
  "(Нажимай и что то будет происходить)",
  "Я бедни студент и не могу дарить подарков за денежку, но я постараюсь поднять тебе настроение как то иначе",
  "итак мадам, вы готовы?",
  "Как хорошо, даже не знаю что было бы если бы вы выбрали иначе",
  "",
  "Кхм Кхм",
  "...",
  "Это вам",
  "Надеюсь у вас все наладится и будет хорошо <3",
  "Теперь мы тут только вдвоём...",
  "Я так далеко никогда не заходил, я такого напряжения не выдежу!",
];

desc.textContent = text[0];
document.querySelector(".wrapper").addEventListener("click", function (event) {
  const tr = event.target;
  pos++;
  changeStage(tr, pos);
});
function changeStage(tr, pos) {
  desc.textContent = text[pos];
  if (pos === 1) {
    sit1();
  } else if (pos === 2) {
    sit2();
  } else if (pos === 3) {
    sit3(tr);
  } else if (pos === 5) {
    sit5();
  } else if (pos === 6) {
    sit6();
  } else if (pos === 7) {
    sit7();
  } else if (pos == 8) {
    sit8();
  } else if (pos === 9) {
    sit9();
  } else if (pos === 10) {
    sit10();
  } else {
    sit11();
  }
}
function sit1() {
  box.style.marginBottom = "90px";
  meno.style.opacity = "0";
  poor.style.opacity = "1";
  poor.style.top = "60%";
}
function sit2() {
  box.style.marginBottom = "";
  meno.style.opacity = "1";
  poor.style.opacity = "0";
  poor.style.top = "100%";
  hat.style.rotate = "80deg";
  hat.style.marginLeft = "20%";
  hat.style.marginBottom = "10%";
  choises.style.display = "flex";
  mecry.style.opacity = "0";
}
function sit3(tr) {
  if (tr.closest("button")) {
    choises.style.display = "none";
    meno.style.opacity = "1";
    if (tr.textContent === "да") {
      pos = 4;
      sit4();
    } else if (tr.textContent === "нет") {
      meno.style.opacity = "0";
      mecry.style.opacity = "1";
      desc.textContent =
        "Очень жаль, но я тут главный, так что выбора у вас на самом деле нет)";
      setTimeout(() => {
        pos = 2;
        changeStage(tr, 2);
      }, 3000);
    }
  } else {
    pos = 2;
    changeStage(tr, 2);
  }
}
function sit4() {
  if (meno.style.rotate === "360deg") {
    meno.style.rotate = "";
  } else {
    meno.style.rotate = "360deg";
  }
  hat.style.marginLeft = "";
  hat.style.marginBottom = "";
  hat.style.rotate = "";
}
function sit5() {
  meno.style.bottom = "0px";
  flowers.style.opacity = "1";
  setTimeout(() => {
    meno.style.bottom = "20px";
  }, 100);
  setTimeout(() => {
    meno.style.bottom = "00px";
  }, 200);
  setTimeout(() => {
    meno.style.bottom = "20px";
  }, 300);
  setTimeout(() => {
    meno.style.bottom = "00px";
  }, 400);
}
function sit6() {
  flowers.style.transform = "scale(-0.5, 0.5)";
  flowers.style.bottom = "45%";
  flowers.style.rotate = "-90deg";
}
function sit7() {
  flowers.style.transform = "scale(-1, 1)";
  flowers.style.bottom = "0%";
  flowers.style.rotate = "0deg";
}
function sit8() {
  flowers.style.zIndex = 8;
  flowers.style.transform = "scale(-3, 3)";
  flowers.style.bottom = "0%";
  flowers.style.rotate = "45deg";
}
function sit9() {
  flowers.style.transform = "scale(-1, 1)";
  flowers.style.bottom = "0%";
  flowers.style.rotate = "0deg";
}
function sit10() {
  mecry.style.opacity = "1";
  flowers.style.transform = "scale(0)";
  meno.style.opacity = "0";
  let val = 1;
  setTimeout(() => {
    const interval = setInterval(() => {
      mecry.style.marginLeft = val + "%";
      meno.style.marginLeft = val + "%";
      hat.style.marginLeft = val + "%";
      val = val + 40;
      if (val > 400) {
        meno.style.opacity = "1";
        desc.textContent = "Ладно, шучу, но на этом все!";
        clearInterval(interval);
        mecry.style.marginLeft = "";
        meno.style.marginLeft = "";
        hat.style.marginLeft = "";
      }
    }, 500);
  }, 500);
}
function sit11() {
  pos = 0;
  desc.textContent = text[pos];
}
