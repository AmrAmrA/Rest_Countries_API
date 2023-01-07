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
  for (let i = 0; i < countryData.length; i++) {
    const countriesSection = document.createElement("section");
    console.log(countryData[i].capital[0]);
    
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

DisplayCountries();

let darkMode = document.querySelector(".darkMode");
let body = document.querySelector("body");
let countryCard = document.querySelectorAll(".countryCard");

console.log(body);
console.log(mainPart.children);

darkMode.addEventListener("click", () => {
  body.classList.toggle("darkMode");
});
