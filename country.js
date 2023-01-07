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

const DisplayCountries = async () => {
    await getOneCountry();
      console.log(oneCountryData);
  };
  
  DisplayCountries();