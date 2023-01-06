
// let countriesSection = document.querySelector(".countries");
// console.log(countriesSection);
//  let mainSection = document.querySelector('main');
//  let title = document.querySelector('.title')

let mainPart = document.querySelector('main')
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
console.log(countryData);
  for (let i = 0; i < countryData.length; i++) {
      const countriesSection = document.createElement('section'); 

      countriesSection.innerHTML = `
         <article class="countryCard">
         <img src="${countryData[i].flags.png}" alt="German flag" class="countryCard__flag">
         <div class="countryInformations">
           <p class="countryInformations__name">${countryData[i].name.common}</p>
           <p class="countryInformations__population"> ${countryData[i].population}</p>
           <p class="countryInformations__region">${countryData[i].region}</p>
           <p class="countryInformations__capital">${countryData[i].capital}</p>
         </div>
       </article>
         `;

         mainPart.appendChild(countriesSection)
     }
 };

DisplayCountries();
