let modal = document.querySelector(".modal-area");
let filter = document.querySelector(".filter");
let openModalBtn = document.querySelector(".open-modal");
let closeModalIcon = document.querySelector(".modal-area i");

openModalBtn.addEventListener("click", function () {
  modal.classList.remove("hidden");
  filter.classList.remove("d-none");
});

closeModalIcon.addEventListener("click", function () {
  modal.classList.add("hidden");
  filter.classList.add("d-none");
});
