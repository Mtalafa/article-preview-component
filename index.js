const shareBtn = document.querySelector("#share-btn");
const shareBtnHidden = document.querySelector("#share-btn-hidden");
const hiddenbox = document.querySelector(".hidden");

const toggleShareBox = function () {
  hiddenbox.classList.toggle("hidden");
};

shareBtn.addEventListener("click", toggleShareBox);

shareBtnHidden.addEventListener("click", toggleShareBox);
