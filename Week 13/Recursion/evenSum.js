function recursiveSum(arr,index=0){
    if(index===arr.length) return 0
    
    return arr[index]%2===0 ? arr[index] + recursiveSum(arr, index+1) :  + recursiveSum(arr,index+1)
}

console.log(recursiveSum([1,2,3,4,5]))