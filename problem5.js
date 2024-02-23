// 5. Console log the city names that has Bus transport facility.

//let data=require("./data.js");

function cityNamesWithBusFacility(array){
    let res=array.reduce((acc,cv)=>{
        if(cv.publicTransport.includes("Bus")){
            acc.push(cv.city);

        }

        return acc
    },[])

    return res;

}

module.exports=cityNamesWithBusFacility;


//console.log(cityNamesWithBusFacility(data));