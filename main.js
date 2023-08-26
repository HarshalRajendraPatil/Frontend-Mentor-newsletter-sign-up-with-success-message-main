const successBtn = document.querySelector(".btn-success");
const submitBtn = document.querySelector(".btn-submit");
const container = document.querySelector(".container");
const success = document.querySelector(".success");
const input = document.querySelector(".email");

function andAndRemove() {
  if (!input.value) return;
  container.classList.toggle("display");
  success.classList.toggle("display");
}

submitBtn.addEventListener("click", andAndRemove);
successBtn.addEventListener("click", andAndRemove);
