const array = [1,2,3,4,5]

function search(array,target){
    for(let i=0; i<array.length;i++){
        if(array[i]===target){
            return i
        }
    }
    return -1
}

console.log(search(array,4))