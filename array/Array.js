//FIND: It returns the value of the first element in the given array that satisfies the specified condition


const number = [2,4,7,9,0,6];

function find(array){
    const found = array.find((item)=> item > 7);
    return found;
}

console.log(find(number));

//REDUCE : It accepts two arguments & this  method is used to apply a function to each element of an array and reduce it to a single value. 

const number1 = [1,2,3,4,5]

function reduce(array){
    const reduced = array.reduce((accumalator,currValur)=> accumalator + currValur,3 )
    return reduced;
}

// 3 => is the initial value of accumalator , its not the index


console.log(reduce(number1));

// FOREACH : It returns  the element for each element in an array that satisfies the condition

const number2 = [1,5,86,3,50,45,90]

function multipleOfFive(array){
    array.filter(itr => itr % 5 === 0).forEach(itr => {
        console.log(itr);
    })
}

console.log(multipleOfFive(number2));


// FILTER : it filter outs the elements accdng to the conditions passed in the method 

const number3 = [2, 4, 6 ,8, 34, 21, 77 , 35,14]

function filtersOut(array){
    const filtered = array.filter((val) => val % 7 === 0)
    return filtered ;
}

console.log(filtersOut(number3));


//COPYWITHIN() : It copies the part of the given array with its own elements and returns the modified array. 

const array = ["yellow","red", 3 ,  7, "black"]

function copy(arr,target,start,end){
    const copies = arr.copyWithin(target,start,end)
    return copies;
}

console.log(copy(array,0,1));