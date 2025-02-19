class Stack{
    constructor(){
        this.items= []
    }
    isEmpty(){
        return this.items.length === 0
    }
    getSize(){
        return this.items.length
    }
    push(element){
        this.items.push(element)
    }
    pop(){
        if(!this.isEmpty()){
            return this.items.pop()
        }
        return null
    }
    peek(){
        if(!this.isEmpty()){
            return this.items[this.items.length-1]
        }
        return null
    }
    print(){
        if(this.isEmpty()){
            console.log("Stack is Empty")
        }else{
            let str = ""
            for(let i of this.items){
                str = str + `${i} `
            }
            console.log(str)
        }
    }
}

const stack = new Stack()

console.log(stack.isEmpty())
console.log(stack.getSize())
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.print()
console.log(stack.pop())
console.log(stack.peek())
console.log(stack.getSize())