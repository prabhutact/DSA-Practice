function recursiveReverse(arr,index=arr.length-1){
    if(index<0) return [];
    let lastElement = arr[index];
    return [lastElement,...recursiveReverse(arr,index-1)]
}

console.log(recursiveReverse([1,2,3,4,5]))