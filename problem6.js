// 6. Write a function that should take foodItem as a param and return which city has that foodItem in their famousFood list.

//let data=require("./data.js");

function foodItemWithParam(array){

    let res=array.reduce((acc,cv)=>{
        if(cv.famousFood.includes("param")){

            acc.push(cv.city);

        }

        return acc;
    },[])

    if(res.length>0){
        return res;
    }else{
        return `City not found with param food`
    }

}

module.exports=foodItemWithParam;


//console.log(foodItemWithParam(data));