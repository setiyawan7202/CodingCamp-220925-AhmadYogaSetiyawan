// Modal input nama (tanpa localStorage, selalu muncul saat refresh)
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('nameModal');
    const inputName = document.getElementById('inputName');
    const submitName = document.getElementById('submitName');
    const welcomeText = document.getElementById('welcomeText');

    // Selalu tampilkan modal saat load
    modal.style.display = 'flex';
    welcomeText.textContent = 'Welcome to My Portfolio';

    submitName.onclick = function() {
        const name = inputName.value.trim();
        if (name) {
            welcomeText.textContent = `Hi ${name}, Welcome To Website`;
            modal.style.display = 'none';
        } else {
            inputName.classList.add('border-red-500');
        }
    };

    inputName.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') submitName.click();
    });
});

// Preview detail contact
const contactName = document.getElementById('contactName');
const contactEmail = document.getElementById('contactEmail');
const contactMessage = document.getElementById('contactMessage');
const previewName = document.getElementById('previewName');
const previewEmail = document.getElementById('previewEmail');
const previewMessage = document.getElementById('previewMessage');

function updatePreview() {
    previewName.textContent = contactName.value || '-';
    previewEmail.textContent = contactEmail.value || '-';
    previewMessage.textContent = contactMessage.value || '-';
}

[contactName, contactEmail, contactMessage].forEach(input => {
    input.addEventListener('input', updatePreview);
});

// Reset preview on form submit
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Pesan berhasil dikirim!');
    contactName.value = '';
    contactEmail.value = '';
    contactMessage.value = '';
    updatePreview();
});

// Inisialisasi preview saat load
updatePreview();

// Navbar dropdown toggle & hamburger animation
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    if (!navToggle || !navMenu) return;

    navToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        navMenu.classList.toggle('hidden');
        navToggle.classList.toggle('open');
        // Hamburger animasi
        const spans = navToggle.querySelectorAll('span');
        if(navToggle.classList.contains('open')) {
            spans[0].style.transform = 'rotate(45deg) translateY(10px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translateY(-10px)';
        } else {
            spans[0].style.transform = '';
            spans[1].style.opacity = '';
            spans[2].style.transform = '';
        }
    });

    // Tutup menu saat klik di luar menu
    document.addEventListener('click', function(event) {
        if (!navMenu.contains(event.target) && !navToggle.contains(event.target)) {
            if(window.innerWidth < 768) {
                navMenu.classList.add('hidden');
                navToggle.classList.remove('open');
                const spans = navToggle.querySelectorAll('span');
                spans[0].style.transform = '';
                spans[1].style.opacity = '';
                spans[2].style.transform = '';
            }
        }
    });

    // Tutup menu saat klik salah satu link menu (khusus mobile)
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            if(window.innerWidth < 768) {
                navMenu.classList.add('hidden');
                navToggle.classList.remove('open');
                // ...reset animasi...
            }
        });
    });

    // Pastikan menu tampil di desktop
    window.addEventListener('resize', function() {
        if(window.innerWidth >= 768) {
            navMenu.classList.remove('hidden');
            navToggle.classList.remove('open');
            const spans = navToggle.querySelectorAll('span');
            spans[0].style.transform = '';
            spans[1].style.opacity = '';
            spans[2].style.transform = '';
        } else {
            navMenu.classList.add('hidden');
            navToggle.classList.remove('open');
            const spans = navToggle.querySelectorAll('span');
            spans[0].style.transform = '';
            spans[1].style.opacity = '';
            spans[2].style.transform = '';
        }
    });
});