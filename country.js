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
    alert("Sorry, problem with Fetch");
    return;
  }
};

let mainBlock = document.querySelector("main");
const DisplayCountries = async () => {
  await getOneCountry();

  const OneCountrySection = document.createElement("section");
  OneCountrySection.classList.add("countryBlock");
  console.log(oneCountryData[0]);
  let frontieres = [];
  let langues = [];
  langues = { ...oneCountryData[0].languages };
  frontieres = [...oneCountryData[0].borders];

  OneCountrySection.innerHTML = `
              <article class="countryFlag">
                <img src="${
                  oneCountryData[0].flags.png
                }" alt=" Belgium flag" class="countryFlag__photo">
            </article>
            <article class="countryInformations">
                <div class="firstBlock">
                    <h1 class="firstBlock__title">${
                      oneCountryData[0].name.common
                    }</h1>
                     <p class="firstBlock__population"> <b> Population </b> : ${
                       oneCountryData[0].population
                     }</p>
                     <p class="firstBlock__region"> <b> Region </b> : ${
                       oneCountryData[0].region
                     }</p>
                     <p class="firstBlock__subRegion"> <b> Sub Region </b> : ${
                       oneCountryData[0].subregion
                     }</p>
                     <p class="firstBlock__capital"><b> Sub Region </b> : ${
                       oneCountryData[0].capital[0]
                     }</p>
                     <div class="thirdBlock">
                         <p class="thirdBlock__border"> <b> Border Countries </b> : ${frontieres}</p>
                     </div>
                </div>
                <div class="secondBlock">
                     <p class="secondBlock__capital"><b> Top Level Domain </b> : ${
                       oneCountryData[0].tld[0]
                     }</p>
                  


                     <p class="secondBlock__population"><b>Languages</b> :     ${Object.values(
                       langues
                     )} </p>
                </div>
            </article>
           `;

  mainBlock.appendChild(OneCountrySection);
};

DisplayCountries();

let buttonBack = document.querySelector(".main__back");

buttonBack.addEventListener("click", () => {
  window.location = "index.html";
});
