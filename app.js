let mainSection = document.querySelector('main'); 
let title = document.querySelector('.title')
let countryData = [];
const getcountry = async () => {
  try {
    const res = await fetch(`https://restcountries.com/v3.1/all`);
    countryData = await res.json();

    if (!res.ok) {
      throw new Error("Erreur Serveur");
    }
  } catch (e) {
    alert("Problème avec fetch");
    return;
  }
};

const DisplayCountries = async () => {
await getcountry() ;

  title.textContent = countryData[40].name.common;
  mainSection.appendChild(title)
  
};

DisplayCountries();
