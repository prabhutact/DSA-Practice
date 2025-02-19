class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Stack{
    constructor(){
        this.top = null
        this.size = 0
    }
    isEmpty(){
        return this.size === 0
    }
    getSize(){
        return this.size
    }
    push(element){
        const node = new Node(element)
        if(this.isEmpty()){
            this.top = node
        }else{
            node.next = this.top
            this.top = node
        }
        this.size++
    }
    pop(){
        if(this.isEmpty()){
            return null
        }
        const value = this.top.value
        this.top = this.top.next
        this.size--
        return value
    }
    peek(){
        if(this.isEmpty()){
            return null
        }
        return this.top.value
    }
    print(){
        if(this.isEmpty()){
            console.log("Stack is Empty")
        }else{
            let curr = this.top
            let str = ""
            while(curr){
                str = str + `${curr.value} `
                curr = curr.next
            }
            console.log(str)
        }
    }
}

const stack = new Stack

console.log(stack.isEmpty())
console.log(stack.getSize())
console.log(stack.peek())
console.log(stack.pop())
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.print()
console.log(stack.peek())
console.log(stack.pop())
stack.print()
console.log(stack.peek())