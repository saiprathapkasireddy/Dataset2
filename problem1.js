// 1. Store all country names in array.

//let data=require("./data.js");

function countryNames(arr){
    let res=arr.map((element)=>{
        return element.country;
    });

    return res;
}

module.exports=countryNames;

//console.log(countryNames(data));