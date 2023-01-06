let countryData = [];
const getcountry = async () => {
  try {
    const res = await fetch(`https://restcountries.com/v3.1/all`);
    countryData = await res.json();
  } catch {
    alert("Problème avec fetch");
  }
};

const DisplayCountries = async () => {
  await getcountry();
  console.log(countryData);
};

DisplayCountries();
