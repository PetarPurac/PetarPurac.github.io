//headerscroll
const body = document.body;
const header = document.querySelector(".header");
const main = document.querySelector("main");
const headerHeight = document.querySelector("header").offsetHeight;
main.style.top = headerHeight + "px";
let lastScroll = 0;
window.addEventListener("scroll", () => {
  let currentScroll = window.pageYOffset;
  if (currentScroll - lastScroll > 0) {
    header.classList.add("scroll-down");
    header.classList.remove("scroll-up");
  } else {
    // scrolled up -- header show
    header.classList.add("scroll-up");
    header.classList.remove("scroll-down");
  }
  lastScroll = currentScroll;
});

//hamburger
const burger = document.querySelector(".hamburger__wrapper");
const navigation = document.querySelector(".header__wrapper");
const items = document.querySelectorAll(".nav__item");

burger.addEventListener("click", function () {
  this.classList.toggle("open");
  navigation.classList.toggle("show");
  document.body.classList.toggle("disable-scroll");
});

items.forEach((item) => {
  item.addEventListener("click", function () {
    burger.classList.toggle("open");
    navigation.classList.toggle("show");
    document.body.classList.remove("disable-scroll");
  });
});

const certificatesFssc = document.querySelector(".certificates-fssc");
const certificateshHaccp = document.querySelector(".certificates-haccp");
const closeCert = document.querySelectorAll(".popup__close");
const popupHaccp = document.querySelector(".popup-haccp");
const popupFssc = document.querySelector(".popup-fssc");
const showPopup = "popup-show";

if (certificatesFssc) {
  certificatesFssc.addEventListener("click", () => {
    popupFssc.classList.add(showPopup);
    document.body.classList.add("disable-scroll");
  });
}

if (certificateshHaccp) {
  certificateshHaccp.addEventListener("click", () => {
    popupHaccp.classList.add(showPopup);
    document.body.classList.add("disable-scroll");
  });
}

if (closeCert) {
  closeCert.forEach((cert) => {
    cert.addEventListener("click", () => {
      popupHaccp.classList.remove(showPopup);
      popupFssc.classList.remove(showPopup);
      document.body.classList.remove("disable-scroll");
    });
  });
}

const dropdownItem = document.querySelector(".nav__item-dropdown-holder");
const dropdown = document.querySelector(".nav__dropdown");

const openDropdown = () => {
  if (dropdownItem) {
    dropdownItem.addEventListener("click", () => {
      dropdown.classList.toggle("nav__dropdown--active");
      dropdownItem.classList.toggle("nav__item-dropdown--active");
    });
  }
};

openDropdown();

window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (let itemz of reveals) {
    var windowHeight = window.innerHeight;
    var revealtop = itemz.getBoundingClientRect().top;
    var revealpoint = 150;
    if (revealtop < windowHeight - revealpoint) {
      itemz.classList.add("active");
    } else {
      // itemz.classList.remove('active')
    }
  }
}

function updateContent() {
  const elements = document.getElementsByClassName("i18nelement");
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    const k = element.getAttribute("data-i18n");
    element.innerHTML = i18next.t(k);
    console.log(k);
  }
}

async function i18Loader() {
  const langs = ["en", "ru"];
  const jsons = await Promise.all(
    langs.map((l) => fetch("/i18/" + l + ".json").then((r) => r.json()))
  );
  const res = langs.reduce((acc, l, idx) => {
    acc[l] = { translation: jsons[idx] };
    return acc;
  }, {});
  await i18next.init({
    lng: "en",
    debug: true,
    resources: res,
  });
  updateContent();
  i18next.on("languageChanged", () => {
    updateContent();
  });

  const langSelector = document.getElementById("langSelector");
  langSelector.removeAttribute("disabled");
  langSelector.addEventListener("change", (e) => {
    i18next.changeLanguage(e.target.value);
  });
}

i18Loader();
