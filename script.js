const translations = {
      id: {
        home: "Beranda",
        about: "Tentang",
        contact: "Kontak"
      },
      en: {
        home: "Home",
        about: "About",
        contact: "Contact"
      }
    };

    const languageSwitcher = document.getElementById("languageSwitcher");

    languageSwitcher.addEventListener("change", function () {
      const selectedLang = this.value;
      document.getElementById("nav-home").textContent = translations[selectedLang].home;
      document.getElementById("nav-about").textContent = translations[selectedLang].about;
      document.getElementById("nav-contact").textContent = translations[selectedLang].contact;
    });

const swiper = new Swiper('.slider-wrapper', {
  loop: true,

  spaceBetween : 25, 

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets : true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    },
    
  }
});
