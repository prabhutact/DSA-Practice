class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Queue{
    constructor(){
        this.front = null
        this.rear = null
        this.size = 0
    }
    isEmpty(){
        return this.size === 0
    }
    getSize(){
        return this.size
    }
    enqueue(element){
        const node = new Node(element)
        if(this.isEmpty()){
            this.front = node
            this.rear = node
        }else{
            this.rear.next = node
            this.rear = node
        }
        this.size++
    }
    dequeue(){
        if(this.isEmpty()){
            return null
        }
        const removeNode = this.front.value
        this.front = this.front.next
        if(this.front===null){
            this.rear = null
        }
        this.size--
        return removeNode
    }
    peek(){
        if(this.isEmpty()){
            return null
        }
        return this.front.value
    }
    print(){
        if(this.isEmpty()){
            console.log("Queue is Empty")
        }else{
            let curr = this.front
            let str = ""
            while(curr){
                str = str + `${curr.value} `
                curr = curr.next
            }
            console.log(str)
        }
    }
}

const queue = new Queue()

console.log(queue.isEmpty())
console.log(queue.getSize())
console.log(queue.peek())
queue.print()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.print()
console.log(queue.dequeue())
queue.print()
console.log(queue.peek())