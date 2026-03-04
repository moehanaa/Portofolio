 // Mengambil semua elemen section
  const sections = document.querySelectorAll('section, .About');

  sections.forEach(section => {
    section.addEventListener('click', function() {
      // Tambahkan class animasi
      this.classList.add('animate-click');
      
      // Hapus class setelah 400ms (sesuai durasi CSS) supaya bisa diulang
      setTimeout(() => {
        this.classList.remove('animate-click');
      }, 400);
    });
  });

// function scroll to contact
function scrollToContact() {
  document.getElementById("Contact").scrollIntoView ({
    behavior: "smooth"
  })
}

// close mobile nav after clicking any link
const navLinks = document.querySelectorAll('nav ul li a');
const navToggle = document.getElementById('nav-toggle');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (navToggle) navToggle.checked = false;
  });
});

// Kembali ke halaman utama ketika refresh
window.onbeforeunload = function() {
  window.scrollTo(0, 0);
};

if (window.location.hash) {
  window.location.replace(window.location.pathname);
}
