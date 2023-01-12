let mainPart = document.querySelector("main");
let countryData = [];
const getCountries = async () => {
  try {
    const res = await fetch(`https://restcountries.com/v3.1/all`);
    countryData = await res.json();

    if (!res.ok) {
      throw new Error("Erreur Serveur");
    }
  } catch (e) {
    alert("Sorry, problem with Fetch");
    return;
  }
};

const DisplayCountries = async () => {
  await getCountries();
  console.log(countryData);
  for (let i = 0; i < countryData.length; i++) {
    const countriesSection = document.createElement("section");

    countriesSection.innerHTML = `
         <a href="country.html?id=${countryData[i].name.common}">
         <article class="countryCard">
         <img src="${countryData[i].flags.png}" alt="${countryData[i].name.common} flag" class="countryCard__flag">
         <div class="countryInformations">
           <p class="countryInformations__name"> ${countryData[i].name.common}</p>
           <p class="countryInformations__population"><b>population </b> :  ${countryData[i].population}</p>
           <p class="countryInformations__region"> <b> Region </b> : ${countryData[i].region}</p>
           <p class="countryInformations__capital"> <b> Capital </b> : ${countryData[i].capital}</p>
         </div>
       </article>
       </a>
         `;

    mainPart.appendChild(countriesSection);
  }
};
console.log
DisplayCountries();










// Dark Mode Toggle
let darkMode = document.querySelector(".darkMode");
let body = document.querySelector("body");
let countryCard = document.querySelectorAll(".countryCard");
let countryInformations = document.querySelectorAll(".countryInformations");
let header = document.querySelector("header");
let toggleTheme = true; 
document.styleSheets[0].cssRules[9].style.color = "black";
darkMode.addEventListener("click", () => {
    if(toggleTheme) {
    body.classList.add("darkModeToggle");
    header.classList.add("darkModeToggle");
    document.styleSheets[0].cssRules[9].style.color = "white"; 
    toggleTheme = false; 
  }
    else {
      body.classList.remove("darkModeToggle");
      header.classList.remove("darkModeToggle");
      document.styleSheets[0].cssRules[9].style.color = "black";
      toggleTheme = true;
    }
});


// Search Bar
let countrySearch = document.querySelector(".search_input");
console.log(countrySearch);
countrySearch.addEventListener("keyup", (e) => { 
  let searchValue = e.target.value.toLowerCase();
  console.log(searchValue);
  let countryCard = document.querySelectorAll(".countryCard");
  countryCard.forEach((country) => {
    let countryName = country.querySelector(".countryInformations__name").innerText.toLowerCase();
    if(countryName.includes(searchValue)) {
      country.style.display = "block";
    }
    else {
      country.style.display = "none";
    }
  });
});

// Filter by Region
let regionFilter = document.querySelector(".regions__options");
regionFilter.addEventListener("change", (e) => {
  let regionValue = e.target.value.toLowerCase();
  let countryCard = document.querySelectorAll(".countryCard");
  countryCard.forEach((country) => {
    let countryRegion = country.querySelector(".countryInformations__region").innerText.toLowerCase();
    if(countryRegion.includes(regionValue)) {
      country.style.display = "block";
    }
    else {
      country.style.display = "none";
    }
  });
});