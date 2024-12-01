// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector('.navbar-nav');
// ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};

// Toggle class active untuk search form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
  searchForm.classList.toggle('active');
  searchBox.focus();
  e.preventDefault();
};

// Toggle class active untuk shopping cart
const shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#shopping-cart-button').onclick = (e) => {
  shoppingCart.classList.toggle('active');
  e.preventDefault();
};

// Klik di luar elemen
const hm = document.querySelector('#hamburger-menu');
const sb = document.querySelector('#search-button');
const sc = document.querySelector('#shopping-cart-button');

document.addEventListener('click', function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove('active');
  }

  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove('active');
  }
});

// Modal Box
/// Modal Box
const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButtons = document.querySelectorAll('.item-detail-button');

// Menampilkan modal untuk produk yang sesuai
itemDetailButtons.forEach((btn, index) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault(); // Mencegah scroll atau pindah ke bagian lain
    
    // Menyembunyikan semua modals terlebih dahulu
    document.querySelectorAll('.modal').forEach((modal) => {
      modal.style.display = 'none';
    });

    // Menampilkan modal yang sesuai
    const modal = document.querySelector(`#item-detail-modal${index + 1}`);
    if (modal) {
      modal.style.display = 'flex';
    }
  });
});

// Klik tombol close modal
document.querySelectorAll('.modal .close-icon').forEach((closeBtn) => {
  closeBtn.addEventListener('click', (e) => {
    const modal = e.target.closest('.modal');
    if (modal) {
      modal.style.display = 'none';
    }
    e.preventDefault();
  });
});

// Klik di luar modal untuk menutup
window.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal')) {
    e.target.style.display = 'none';
  }
});
