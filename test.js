const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const menu = document.querySelector("#menu").cloneNode(1);
const body = document.body;

hamb.addEventListener("click", hambHandler);

function hambHandler(e) {
  e.preventDefault();
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderPopup();
}

function renderPopup() {
  popup.appendChild(menu);
}

// Код для закрытия меню при нажатии на ссылку

// const links = Array.from(menu.children);

// links.forEach((link, index) => {
//   link.addEventListener("click", function() {
//     closeOnClick(index);
//   });
// });

// function closeOnClick(index) {
//   if (index !== 5) { // Шестой пункт меню имеет позицию 5 в массиве
//     popup.classList.remove("open");
//     hamb.classList.remove("active");
//     body.classList.remove("noscroll");
//   }
// }
const links = Array.from(menu.children);

links.forEach((link, index) => {
  link.addEventListener("click", function(event) {
    if (index !== 5) {
      closeMenu();
    }
    if (index === 5 && !event.target.closest(".popup .menu .dropdown .dropdown-content")) {
      event.preventDefault();
    }
  });
});

const drop_menu = document.getElementById("drop-down");
const submenuLinks = Array.from(drop_menu.children);

submenuLinks.forEach((link) => {
  link.addEventListener("click", function(event) {
    if (!event.target.closest(".dropdown-content")) {
      event.preventDefault();
    }
  });
});

function closeMenu() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
}
