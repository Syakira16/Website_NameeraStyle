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