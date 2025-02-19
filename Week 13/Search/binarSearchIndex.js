const array = [1,2,3,4,5]

function binary(array,index){
    let left = 0
    let right = array.length-1
    
    while(left<=right){
        let middle = Math.floor((left+right)/2)
        
        if(middle===index)
        return array[middle]
        if(middle<index)
        left = middle+1
        else
        right=middle-1
    }
    return `Invalid Index`
}

console.log(binary(array,3))