// Add your functions here
function map(integer, callback){
    let a = []

    for(let i = 0; i < integer.length; i++){
        const thing = integer[i]
        a.push(callback(thing))
    }
    return a 

    
}


function reduce(integer, callback, startingPoint){
    let total

    if(startingPoint){
        total = startingPoint;

        for(let i = 0; i < integer.length; i++){
            total = callback(integer[i], total);
        }

        return total;

    } else {
        total = integer[0]
        for(let i = 1; i < integer.length; i++){
            total = callback(integer[i], total);
        }
        return total;
    }



}