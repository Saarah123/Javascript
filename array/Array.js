//FIND: It returns the value of the first element in the given array that satisfies the specified condition


const number = [2,4,7,9,0,6];

function find(array){
    const found = array.find((item)=> item > 7);
    return found;
}

console.log(find(number));

//REDUCE : It accepts two arguments & this  method is used to apply a function to each element of an array and reduce it to a single value. 

const number1 = [1,5,7,8,10]

function reduce(array){
    const reduced = array.reduce((accumalator,currValur)=>accumalator + currValur,0 )
    return reduced;
}


console.log(reduce(number1));

// FOREACH : It returns  the element for each element in an array that satisfies the condition

const number2 = [1,5,86,3,50,45,90]

function multipleOfFive(array){
    array.filter(itr => itr % 5 === 0).forEach(itr => {
        console.log(itr);
    })
}

console.log(multipleOfFive(number2));