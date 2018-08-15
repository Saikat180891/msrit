let UIController = (function() {
  let menuExtended = document.querySelector(".menu__extended");
  let loginModal = document.querySelector(".login__modal");
  let close = document.querySelector(".login__modal__close");
  let loginBtn = document.querySelector("#login");
  let listItem = document.querySelector("#department");
  listItem.addEventListener("mouseover", function() {
    menuExtended.style.visibility = "visible";
  });
  menuExtended.addEventListener("mouseover", function() {
    this.style.visibility = "visible";
  });
  menuExtended.addEventListener("mouseout", function() {
    this.style.visibility = "hidden";
  });
  listItem.addEventListener("mouseout", function() {
    menuExtended.style.visibility = "hidden";
  });
  loginBtn.addEventListener("click", function() {
    loginModal.style.display = "block";
  });
  close.addEventListener("click", function() {
    loginModal.style.display = "none";
  });
})();

$("#datepicker").datepicker();

function sh() {
  alert("hello");
}
