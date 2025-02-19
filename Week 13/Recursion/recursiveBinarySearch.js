function recursiveBinarySearch(arr,target){
    return search(arr,target,0,arr.length-1)
}

function search(arr,target,left,right){
    if(left>right){
        return -1
    }
    let middle = Math.floor((left+right)/2)
    if(target===arr[middle])
    return middle
    else if(target<arr[middle])
    return search(arr,target,left,middle-1)
    else
    return search(arr,target,middle+1,right)
}

console.log(recursiveBinarySearch([10,20,30,40,50],20))