// 4. Store all attractions in an array

//let data=require("./data.js");

function allAttractions(array){
    let res=array.reduce((acc,cv)=>{
        for(let attraction of cv.attractions){
            acc.push(attraction)
        }
        return acc
    },[])

    return JSON.stringify(res);
}


module.exports=allAttractions;


//console.log(allAttractions(data));