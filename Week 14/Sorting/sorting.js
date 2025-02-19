// function bubbleSort(arr){
//     for(let i=arr.length; i>0; i--){
//         let swap = false
//         for(let j=0; j<i-1; j++){
//             if(arr[j]>arr[j+1]){
//                 let temp = arr[j]
//                 arr[j] = arr[j+1]
//                 arr[j+1] = temp
//                 swap = true
//             }
//         }
//         if(!swap)
//         break
//     }
//     return arr
// }

// console.log(bubbleSort([22,7,5,17,10,35,16]))

//................................................................//

// function insertionSort(arr){
//     for(let i=1; i<arr.length; i++){
//         let currValue = arr[i]
//         let j = i-1
//         while(j>=0 && arr[j]>currValue){
//             arr[j+1] = arr[j]
//             j= j-1
//         }
//         arr[j+1] = currValue
//     }
//     return arr
// }

// console.log(insertionSort([22,7,5,17,10,35,16]))

//...................................................................//

// function selectionSort(arr){
//     for(let i=0; i<arr.length; i++){
//         let min = i
//         for(let j=i+1; j<arr.length; j++){
//             if(arr[min]>arr[j])
//             min = j
//         }
//         if(i!==min){
//             let temp = arr[i]
//             arr[i] = arr[min]
//             arr[min] = temp
//         }
        
//     }
//     return arr
// }

// console.log(selectionSort([22,7,5,17,10,35,16]))

//...............................................................//

// function quickSort(arr){
//     if(arr.length<2)
//     return arr
//     let pivot = arr[arr.length-1]
//     let left = []
//     let right = []
//     for(let i=0; i<arr.length-1; i++){
//         if(arr[i]<pivot){
//             left.push(arr[i])
//         }
//         else{
//             right.push(arr[i])
//         }
//     }
//     return [...quickSort(left), pivot, ...quickSort(right)]
// }

// console.log(quickSort([22,7,5,17,10,35,16]))

//..............................................................//

// function mergeSort(arr){
//     if(arr.length<2)
//     return arr
    
//     let mid = Math.floor(arr.length/2)
//     let leftArr = arr.slice(0,mid)
//     let rightArr = arr.slice(mid)
    
//     return merge(mergeSort(leftArr), mergeSort(rightArr))
// }

// function merge(leftArr, rightArr){
//     let sortedArr = []
//     while(leftArr.length && rightArr.length){
//         if(leftArr[0]<=rightArr[0]){
//             sortedArr.push(leftArr.shift())
//         }
//         else{
//             sortedArr.push(rightArr.shift())
//         }
//     }
//     return [...sortedArr, ...leftArr, ...rightArr]
// }

// console.log(mergeSort([22,7,5,17,10,35,16]))

//................................................................//