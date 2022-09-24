
a.Get all the countries from the Asia continent /region using the Filter function

const xhr=new XMLHttpRequest();

xhr.open("GET", "https://restcountries.com/v3.1/region/Asia")
xhr.send();
xhr.responseType="json";

xhr.onload= function displayResult(){
    const countries = xhr.response;
    // console.log(countries);
    // console.log("No. of countries:",countries.length)

    // for(let index in countries){
    //     console.log(+index+ 1,countries[index].name.common)
      for (let index in countries){
        countries.filter((n)=>console.log(`The Name of the Asia countries : ${+index +1}, ${n.name.common}
        # population are ${n.population} `));
      }
    }

b.Get all the countries with a population of less than 2 lakhs using Filter function
 const xhr= new XMLHttpRequest();

 xhr.open("GET","https://restcountries.com/v3.1/all")
 xhr.send();
 xhr.responseType="json";

 xhr.onload=function displayResult(){
    const countries =xhr.response;
       
        countries.filter((n)=>{
            if(n.population<2_00_000===true){
                console.log(`The countries ${n.name.common}!!population are ${n.population}`)
            }
        });
     }  
 

c.Print the total population of countries using reduce function


const xhr= new XMLHttpRequest();

 xhr.open("GET","https://restcountries.com/v3.1/all")
 xhr.send();
 xhr.responseType="json";

 xhr.onload=function displayResult(){
    const countries =xhr.response;
   countries.forEach((n) => console.log(`The name of the countries are ${n.name.common}`));
   countries.forEach((n) => console.log(`The name of the countries capital are ${n.capital}`)); 
   countries.forEach((n) => console.log(`The name of the countries flag are ${n.flag}`));
 }



 


 

d.Print the total population of countries using reduce function


const xhr= new XMLHttpRequest();

 xhr.open("GET","https://restcountries.com/v3.1/all")
 xhr.send();
 xhr.responseType="json";

 xhr.onload=function displayResult(){
    const countries =xhr.response;
    var result=[];
    countries.map((n)=>{
        var country=n.population;
        result.push(country);
        var finalResult=result.reduce(function(acc , curr){
            return acc+curr;
        })
        console.log(finalResult);
    })

 }

// the oupPut=>

// 7777721563

e.Print the country which uses US Dollars as currency.

const xhr= new XMLHttpRequest();

 xhr.open("GET","https://restcountries.com/v3.1/currency/dollar")
 xhr.send();
 xhr.responseType="json";

 xhr.onload=function displayResult(){
    const countries =xhr.response;
   countries.filter((n)=>{
      if(n.currencies.USD){
        console.log(`The countries which uses US dollor are : ${n.name.common}`)
      }    
   }) 
 }


//the outPut:>

//  The countries which uses US dollor are : Turks and Caicos Islands
// xml.js:89 The countries which uses US dollor are : Caribbean Netherlands
// xml.js:89 The countries which uses US dollor are : United States Minor Outlying Islands
// xml.js:89 The countries which uses US dollor are : Puerto Rico
// xml.js:89 The countries which uses US dollor are : Timor-Leste
// xml.js:89 The countries which uses US dollor are : Panama
// xml.js:89 The countries which uses US dollor are : Micronesia
// xml.js:89 The countries which uses US dollor are : Marshall Islands
// xml.js:89 The countries which uses US dollor are : Ecuador
// xml.js:89 The countries which uses US dollor are : Guam
// xml.js:89 The countries which uses US dollor are : British Virgin Islands
// xml.js:89 The countries which uses US dollor are : British Indian Ocean Territory
// xml.js:89 The countries which uses US dollor are : El Salvador
// xml.js:89 The countries which uses US dollor are : United States
// xml.js:89 The countries which uses US dollor are : Bahamas
// xml.js:89 The countries which uses US dollor are : Palau
// xml.js:89 The countries which uses US dollor are : Cambodia
// xml.js:89 The countries which uses US dollor are : United States Virgin Islands
// xml.js:89 The countries which uses US dollor are : American Samoa
// xml.js:89 The countries which uses US dollor are : Northern Mariana Islands