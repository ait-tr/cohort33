const box = document.querySelector(".box");
const button = document.querySelector("#changeColorBtn");

button.addEventListener("click", () => {
  setTimeout(() => {
    box.style.backgroundColor = "green";
  }, 2000);
});
