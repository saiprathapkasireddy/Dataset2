// 2. Find the average population among all countries.

//let data=require("./data.js");

function averagePopulationOfAllCountries(arr){
    let res= arr.reduce((acc,cv)=>{
         acc+=cv.population;
         return acc;
    },0);

    return res/arr.length;
};

module.exports=averagePopulationOfAllCountries;

//console.log(averagePopulationOfAllCountries(data));

