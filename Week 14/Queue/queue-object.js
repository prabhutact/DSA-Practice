class Queue{
    constructor(){
        this.items = {}
        this.rear = 0
        this.front = 0
    }
    isEmpty(){
        return this.rear - this.front === 0
    }
    getSize(){
        return this.rear - this.front
    }
    enqueue(element){
        this.items[this.rear] = element
        this.rear++
    }
    dequeue(){
        if(this.isEmpty()){
            console.log("Queue is Empty")
            return null
        }
        const item = this.items[this.front]
        delete this.items[this.front]
        this.front++
        return item
    }
    peek(){
        if(this.isEmpty()){
            console.log("Queue is Empty")
            return null
        }
        return this.items[this.front]
    }
    print(){
        console.log(this.items)
    }
}

const queue = new Queue()

console.log(queue.isEmpty())
console.log(queue.peek())
console.log(queue.dequeue())
console.log(queue.getSize())
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.print()
console.log(queue.peek())
queue.dequeue()
queue.print()
console.log(queue.getSize())