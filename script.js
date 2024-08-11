// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Toggle class active untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// Toggle class active untuk shopping cart
const shoppingCart = document.querySelector(".shopping-cart");
document.querySelector("#shopping-cart-button").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

// Klik di luar elemen
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");
const sc = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }

  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

// Modal Box
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButtons = document.querySelectorAll(".item-detail-button");

itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = "flex";
    e.preventDefault();
  };
});

// klik tombol close modal
document.querySelector(".modal .close-icon").onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};

// klik di luar modal
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = "none";
  }
};
// Modal Box 1
const itemDetailModalSatu = document.querySelector("#item-detail-modal-satu");
const itemDetailButtonsSatu = document.querySelectorAll(
  ".item-detail-button-satu"
);

itemDetailButtonsSatu.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModalSatu.style.display = "flex";
    e.preventDefault();
  };
});

// klik tombol close modal
document.querySelector(".modal .close-icon-1").onclick = (e) => {
  itemDetailModalSatu.style.display = "none";
  e.preventDefault();
};

// klik di luar modal
window.onclick = (e) => {
  if (e.target === itemDetailModalSatu) {
    itemDetailModalSatu.style.display = "none";
  }
};

// Modal Box 2
const itemDetailModalDua = document.querySelector("#item-detail-modal-dua");
const itemDetailButtonsDua = document.querySelectorAll(
  ".item-detail-button-dua"
);

itemDetailButtonsDua.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModalDua.style.display = "flex";
    e.preventDefault();
  };
});

// klik tombol close modal
document.querySelector(".modal .close-icon-2").onclick = (e) => {
  itemDetailModalDua.style.display = "none";
  e.preventDefault();
};

// klik di luar modal
window.onclick = (e) => {
  if (e.target === itemDetailModalDua) {
    itemDetailModalDua.style.display = "none";
  }
};
// Modal Box 2
const itemDetailModalTiga = document.querySelector("#item-detail-modal-tiga");
const itemDetailButtonsTiga = document.querySelectorAll(
  ".item-detail-button-tiga"
);

itemDetailButtonsTiga.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModalTiga.style.display = "flex";
    e.preventDefault();
  };
});

// klik tombol close modal
document.querySelector(".modal .close-icon-3").onclick = (e) => {
  itemDetailModalTiga.style.display = "none";
  e.preventDefault();
};

// klik di luar modal
window.onclick = (e) => {
  if (e.target === itemDetailModalTiga) {
    itemDetailModalTiga.style.display = "none";
  }
};
