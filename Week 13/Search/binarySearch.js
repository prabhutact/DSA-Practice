const array = [10,20,30,40,50]

function binarySearch(array, target){
    let left = 0
    let right = array.length-1
    while(left<=right){
        let middle = Math.floor((left+right)/2)
        if(target===array[middle])
        return middle
        if(target<array[middle])
        right = middle-1
        else
        left = middle+1
    }
    return -1
}

console.log(binarySearch(array,40))

// Time Complexity O(logn) & SPace Complexity O(1)

