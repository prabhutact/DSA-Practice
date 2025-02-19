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

//......................................................//

// function insertionSort(arr){
//     for(let i=1; i<arr.length; i++){
//         let currValue = arr[i]
//         let j = i-1
//         while(j>=0 && arr[j]>currValue){
//             arr[j+1] = arr[j]
//             j--
//         }
//         arr[j+1] = currValue
//     }
//     return arr
// }

//...........................................................//

// function selectionSort(arr){
//     for(let i=0; i<arr.length; i++){
//         let min = i
//         for(let j=i+1; j<arr.length; j++){
//             if(arr[min]>arr[j]){
//                 min = j
//             }
//         }
//         if(i!==min){
//             let temp = arr[i]
//             arr[i] = arr[min]
//             arr[min] = temp
//         }
//     }
//     return arr
// }

//...........................................................//

// function quickSort(arr){
//     if(arr.length<2)
//     return arr
    
//     let pivot = arr[arr.length-1]
//     let left = []
//     let right = []
    
//     for(let i=0; i<arr.length-1; i++){
//         if(pivot>arr[i]){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     return [...quickSort(left), pivot, ...quickSort(right)]
// }

//..............................................................//

// function mergeSort(arr){
//     if(arr.length<2)
//     return arr
    
//     let middle = Math.floor(arr.length/2)
//     let leftArr = arr.slice(0,middle)
//     let rightArr = arr.slice(middle)
    
//     return merge(mergeSort(leftArr), mergeSort(rightArr))
// }

// function merge(leftArr, rightArr){
//     let sortedArr = []
//     while(leftArr.length && rightArr.length){
//         if(leftArr[0]<rightArr[0]){
//             sortedArr.push(leftArr.shift())
//         }else{
//             sortedArr.push(rightArr.shift())
//         }
//     }
//     return [...sortedArr, ...leftArr, ...rightArr]
// }

// console.log(mergeSort([12,8,3,22,17,33,24]))

//................................................................//

// class Stack{
//     constructor(){
//         this.items = []
//     }
//     isEmpty(){
//         return this.items.length === 0
//     }
//     getSize(){
//         return this.items.length
//     }
//     push(element){
//         this.items.push(element)
//     }
//     pop(){
//         if(this.isEmpty()){
//             return null
//         }
//         return this.items.pop()
//     }
//     peek(){
//         if(this.isEmpty()){
//             return null
//         }
//         return this.items[this.items.length-1]
//     }
//     print(){
//         if(this.isEmpty()){
//             console.log(" Stack is Empty")
//         }else{
//             console.log(this.items.join(" "))
//         }
//     }
// }

// const stack = new Stack()

// console.log(stack.isEmpty())
// console.log(stack.getSize())
// stack.push(1)
// stack.push(2)
// stack.push(3)
// stack.push(4)
// stack.print()
// console.log(stack.peek())
// console.log(stack.pop())
// stack.print()
// console.log(stack.peek())

//.................................................................//

// class Queue{
//     constructor(){
//         this.items = []
//     }
//     isEmpty(){
//         return this.items.length === 0
//     }
//     getSize(){
//         return this.items.length
//     }
//     enqueue(element){
//         this.items.push(element)
//     }
//     dequeue(){
//         if(this.isEmpty()){
//             return null
//         }
//         return this.items.shift()
//     }
//     peek(){
//         if(this.isEmpty()){
//             return null
//         }
//         return this.items[0]
//     }
//     print(){
//         if(this.isEmpty()){
//             console.log("Queue is Empty")
//         }else{
//             console.log(this.items.join(" "))
//         }
//     }
// }

//..............................................................//

// class Queue{
//     constructor(){
//         this.items = {}
//         this.front = 0
//         this.rear = 0
//     }
//     isEmpty(){
//         return this.rear - this.front === 0
//     }
//     getSize(){
//         return this.rear - this.front
//     }
//     enqueue(element){
//         this.items[this.rear] = element
//         this.rear++
//     }
//     dequeue(){
//         if(this.isEmpty()){
//             return null
//         }
//         let item = this.items[this.front]
//         delete this.items[this.front]
//         this.front++
//         return item
//     }
//     peek(){
//         if(this.isEmpty()){
//             return null
//         }
//         return this.items[this.front]
//     }
//     print(){
//         if(this.isEmpty()){
//             console.log("Queue is Empty")
//         }else{
//             console.log(this.items)
//         }
//     }
// }

// const queue = new Queue()

// console.log(queue.isEmpty())
// console.log(queue.getSize())
// queue.print()
// queue.enqueue(1)
// queue.enqueue(2)
// queue.enqueue(3)
// queue.enqueue(4)
// queue.print()
// console.log(queue.peek())
// console.log(queue.dequeue())
// queue.print()
// console.log(queue.peek())

//................................................................//

// class CircularQueue{
//     constructor(capacity){
//         this.items = new Array(capacity)
//         this.front = -1
//         this.rear = -1
//         this.currentLength = 0
//         this.capacity = capacity
//     }
//     isEmpty(){
//         return this.currentLength === 0
//     }
//     getSize(){
//         return this.currentLength
//     }
//     isFull(){
//         return this.currentLength === this.capacity
//     }
//     enqueue(element){
//         if(!this.isFull()){
//             this.rear = (this.rear+1)%this.capacity
//             this.items[this.rear] = element
//             this.currentLength += 1
//             if(this.front===-1){
//                 this.front = this.rear
//             }
//         }
//     }
//     dequeue(){
//         if(this.isEmpty()){
//             return null
//         }
//         let item = this.items[this.front]
//         this.items[this.front] = null
//         this.front = (this.front+1)%this.capacity
//         this.currentLength -= 1
//         if(this.isEmpty()){
//             this.rear = -1
//             this.front = -1
//         }
//         return item
//     }
//     peek(){
//         if(this.isEmpty()){
//             return null
//         }
//         return this.items[this.front]
//     }
//     print(){
//         if(this.isEmpty()){
//             console.log("Queue is Empty")
//         }else{
//             let i
//             let str = ""
//             for(i=this.front; i!=this.rear; i=(i+1)%this.capacity){
//                 str = str + this.items[i] + " "
//             }
//             str = str + this.items[i]
//             console.log(str)
//         }
//     }
// }

// const queue = new CircularQueue(5)

// console.log(queue.isEmpty())
// console.log(queue.getSize())
// console.log(queue.dequeue())
// console.log(queue.peek())
// queue.print()
// queue.enqueue(1)
// queue.enqueue(2)
// queue.enqueue(3)
// queue.enqueue(4)
// queue.enqueue(5)
// console.log(queue.isFull())
// queue.print()
// console.log(queue.peek())
// console.log(queue.dequeue())
// console.log(queue.isFull())
// console.log(queue.peek())
// queue.enqueue(6)
// console.log(queue.isFull())
// queue.print()
// console.log(queue.peek())

//...........................................................//

// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class Stack{
//     constructor(){
//         this.top = null
//         this.size = 0
//     }
//     isEmpty(){
//         return this.size === 0
//     }
//     getSize(){
//         return this.size
//     }
//     push(element){
//         const node = new Node(element)
//         if(this.isEmpty()){
//             this.top = node
//         }else{
//             node.next = this.top
//             this.top = node
//         }
//         this.size++
//     }
//     pop(){
//         if(this.isEmpty()){
//             return null
//         }
//         const value = this.top.value
//         this.top = this.top.next
//         this.size--
//         return value
//     }
//     peek(){
//         if(this.isEmpty()){
//             return null
//         }
//         return this.top.value
//     }
//     print(){
//         if(this.isEmpty()){
//             console.log("Stack is Empty")
//         }else{
//             let curr = this.top
//             let str = ""
//             while(curr){
//                 str = str + `${curr.value} `
//                 curr = curr.next
//             }
//             console.log(str)
//         }
//     }
// }

// const stack = new Stack

// console.log(stack.isEmpty())
// console.log(stack.getSize())
// console.log(stack.peek())
// console.log(stack.pop())
// stack.push(1)
// stack.push(2)
// stack.push(3)
// stack.push(4)
// stack.print()
// console.log(stack.peek())
// console.log(stack.pop())
// stack.print()
// console.log(stack.peek())

//.............................................................//

// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class Queue{
//     constructor(){
//         this.rear = null
//         this.front = null
//         this.size = 0
//     }
//     isEmpty(){
//         return this.size === 0
//     }
//     getSize(){
//         return this.size
//     }
//     enqueue(element){
//         const node = new Node(element)
//         if(this.isEmpty()){
//             this.rear = node
//             this.front = node
//         }else{
//             this.rear.next = node
//             this.rear = node
//         }
//         this.size++
//     }
//     dequeue(){
//         if(this.isEmpty()){
//             return null
//         }
//         let value1 = this.front.value
//         this.front = this.front.next
//         if(this.front===null){
//             this.rear = null
//         }
//         this.size--
//         return value1
//     }
//     peek(){
//         if(this.isEmpty()){
//             return null
//         }
//         return this.front.value
//     }
//     print(){
//         if(this.isEmpty()){
//             console.log("Queue is Empty")
//         }else{
//             let curr = this.front
//             let str = ""
//             while(curr){
//                 str = str + `${curr.value} `
//                 curr = curr.next
//             }
//             console.log(str)
//         }
//     }
// }

// const queue = new Queue()

// console.log(queue.isEmpty())
// console.log(queue.getSize())
// console.log(queue.peek())
// console.log(queue.dequeue())
// queue.print()
// queue.enqueue(1)
// queue.enqueue(2)
// queue.enqueue(3)
// queue.enqueue(4)
// queue.print()
// console.log(queue.peek())
// console.log(queue.dequeue())
// queue.print()

//.......................................................//