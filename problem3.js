// 3. Find which country has more population among all?

//let data=require("./data.js");

function highestPopulationCountry(array){
    let highest_population_country='';
    let population=0;
    array.forEach(element => {
        if(element.population>population){
            population=element.population;
            highest_population_country=element.country;
        }
        
    });

    return highest_population_country;
}

module.exports=highestPopulationCountry;

//console.log(highestPopulationCountry(data));