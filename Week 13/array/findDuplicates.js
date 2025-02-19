const array = [1,2,1,3,4,2,1,3,5,3]

function findDuplicates(){
    let seen = {}
    let duplicates = []
    for(let i=0; i<array.length; i++){
        let value = array[i]
        if(seen[value]===1){
            duplicates.push(value)
        }
        seen[value] = (seen[value] || 0) + 1
    }
    return duplicates
}

console.log(findDuplicates(array))