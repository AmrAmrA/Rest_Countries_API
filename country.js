let countryId = new URLSearchParams(window.location.search).get("id");
console.log(countryId);
let oneCountryData = [];
const getOneCountry = async () => {
  try {
    const res = await fetch(`https://restcountries.com/v3.1/name/${countryId}`);
    oneCountryData = await res.json();

    if (!res.ok) {
      throw new Error("Erreur Serveur");
    }
  } catch (e) {
    alert("Sorry, probably the country doesn't exist in our database.");
    return;
  }
};

let countryFlag     = document.querySelector(".countryFlag__photo");
let countryTitle    = document.querySelector(".firstBlock__title");
let nativeName      = document.querySelector(".firstBlock__nativeName");
let population      = document.querySelector(".firstBlock__populationNumber");
let subregion       = document.querySelector(".firstBlock__subregionName");
let region          = document.querySelector(".firstBlock__regionName");
let levelDomain     = document.querySelector(".secondBlock__levelDomainName");
let currencyName    = document.querySelector(".secondBlock__currencies");
let languageName    = document.querySelector(".secondBlock__languages");
let countriesBlock  = document.querySelector(".thirdBlock__countries");
let capitalName     = document.querySelector(".firstBlock__capitalName");



let mainBlock = document.querySelector("main");
const DisplayCountries = async () => {
  await getOneCountry();
  countryFlag.src         = oneCountryData[0].flags.svg;
  countryTitle.innerHTML  = oneCountryData[0].name.common;
  nativeName.innerHTML    = oneCountryData[0].name.common;
  population.innerHTML    = oneCountryData[0].population;
  region.innerHTML        = oneCountryData[0].region;
  subregion.innerHTML     = oneCountryData[0].subregion;
  levelDomain.innerHTML   = oneCountryData[0].tld[0];
  capitalName.innerHTML   = oneCountryData[0].capital[0];
  // Some countries have more than one currency so I need to create a loop to display all of them
  let objectValues = Object.values(oneCountryData[0].currencies);
  for (let i = 0; i < objectValues.length; i++) {
    let spanMoney = document.createElement("span");
    if (i == objectValues.length - 1) {
      spanMoney.innerHTML = objectValues[i].name;
    } else {
      spanMoney.innerHTML =  `${objectValues[i].name},` }
      currencyName.appendChild(spanMoney);
    };
  // Some countries have more than one language so I need to create a loop to display all of them
  let languaguesValues = Object.values(oneCountryData[0].languages);
  for (let i = 0; i < languaguesValues.length; i++) {
    let spanLanguage = document.createElement("span");
    if (i == languaguesValues.length - 1) {
      spanLanguage.innerHTML = languaguesValues[i];
    } else {
      spanLanguage.innerHTML = `${languaguesValues[i]},` }
      languageName.appendChild(spanLanguage);
    }

  // Some countries have more than one border country so I need to create a loop to display all of them or display a message if there is no border country
    console.log(oneCountryData[0]);
    if (!oneCountryData[0].borders) {
      countriesBlock.innerHTML = "No border countries"; } 
      else {
    let borderCountries = Object.values(oneCountryData[0].borders);
    for (let i = 0; i < borderCountries.length; i++) { 
      let countryLink = document.createElement("a");
      countryLink.href = `country.html?id=${borderCountries[i]}`;
      let countryButton = document.createElement("button");
      countryButton.innerHTML = borderCountries[i];
      countryLink.appendChild(countryButton);
      countriesBlock.appendChild(countryLink);
    }}
};
DisplayCountries();






let buttonBack = document.querySelector(".main__back");
buttonBack.addEventListener("click", () => {window.location = "index.html";});

let header = document.querySelector("header");
let darkMode = document.querySelector(".darkMode");
console.log(darkMode);

  darkMode.addEventListener("click", () => {
    (document.body.classList.toggle("darkModeToggle"));
    (header.classList.toggle("darkModeToggle"));
  });
  

