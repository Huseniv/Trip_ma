const infoBan = document.querySelector(".info_baner");
const remowWindow = document.querySelector(".vektorX");

remowWindow.addEventListener("click", () => {
  console.log("work");
  infoBan.remove(infoBan);
});

const pop_up = document.querySelector(".pop_up");
const sing_up = document.querySelector(".sing_up");
const close = document.querySelector(".fa-xmark");
sing_up.addEventListener("click", () => {
  console.log("work");
  pop_up.style.display = "block";
});

close.addEventListener("click", () => {
  console.log("work");
  pop_up.style.display = "none";
});

const navMob = document.querySelector(".burger");
const bars = document.querySelector(".list_menu");

navMob.addEventListener("click", () => {
  bars.classList.toggle("active");
});
