var toggleBtn = document.querySelector("#toggleBtn");
var divList = document.querySelector(".listHolder");

toggleBtn.addEventListener("click", () => {
  if (divList.style.display === "none") {
    divList.style.display; = 'block'
    toggleBtn.innerHTML = 'hide list'
  } else {
    divList.innerHTML = "none";
    toggleBtn.innerHTML = 'show list'
  }
});
