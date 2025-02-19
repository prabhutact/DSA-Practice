function remove(arr){
    let seen = new Set()
    let duplicates = new Set()
    let occurence = {}
    for(let i=0; i<arr.length; i++){
        occurence[arr[i]] = (occurence[arr[i]]|| 0) + 1
        if(seen.has(arr[i])){
            duplicates.add(arr[i])
            //occurence[arr[i]] = (occurence[arr[i]]|| 0) + 1
        }else{
            seen.add(arr[i])
        }
    }
    return {Unique:[...seen], Duplicate:[...duplicates], occurence}
}

console.log(remove([1,2,3,4,1,2,3,5,6,1,2]))