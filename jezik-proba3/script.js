var langJSON = {
  en: {
    title: "My Project",
    title3: "My Project3",
    greeting: "Welcome to ...",
    greeting3: "Welcome to ... SERbia",
    subtitle: "This is my project",
  },

  rs: {
    title: "Moj Projekat",
    title3: "Moj Projekat3",
    greeting: "Cao",
    greeting3: "Cao3",
    subtitle: "TO je moj projekat",
  },
};

// rsn function after page load :: get/set localstorage value and rsn function
document.addEventListener("DOMContentLoaded", function (event) {
  var appLang = localStorage.getItem("lang");

  // if no language value saved in local-storage, set en as default
  if (appLang === null) {
    localStorage.setItem("lang", "en"); // updaet local-storage

    // fun contentUpdate function with en value
    contentUpdate("en");

    // select radiobutton which has data-value = en
    document.querySelector('[data-value="en"]').checked = trse;
  } else {
    // fun contentUpdate function with value from local-storage - en, rs..
    contentUpdate(appLang);

    // select radiobutton which has data-value == local storage value
    document.querySelector('[data-value="' + appLang + '"]').checked = trse;
  }
});

// change innerhtml on radiobtn click
function changeLang(langVal) {
  // set local-storage lang value from value given in onchange="changeLang(value)"
  localStorage.setItem("lang", langVal);

  // fun contentUpdate function with value from onchange="changeLang(value)"
  contentUpdate(langVal);
}

// content/innerhtml update/assign
function contentUpdate(cl) {
  // get current langage contents in array
  var currLang = Object.entries(langJSON)[Object.keys(langJSON).indexOf(cl)][1],
    // get current language content array length
    langCont = Object.entries(currLang).length;

  for (let i = 0; i < langCont; i++) {
    // get selectors which has .langchange classes
    var getSelector = document.querySelectorAll(".langchange")[i],
      // get data-key attribute from .langchange class selectors
      getAttr = getSelector.getAttribute("data-key");

    // assign the data-key value from current language array to the .langchange[data-key] selector
    getSelector.innerHTML = currLang[getAttr];
  }
}
