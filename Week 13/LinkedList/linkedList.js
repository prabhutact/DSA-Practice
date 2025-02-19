class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }
    isEmpty(){
        return this.size===0
    }
    getSize(){
        return this.size
    }
    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }
    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            let prev = this.head
            while(prev.next){
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }
    insert(value,index){
        if(index<0 || index>this.size){
            return `Invalid Index`
        }
        if(index===0){
            this.prepend(value)
        }else{
            const node = new Node(value)
            let prev = this.head
            for(let i=0; i<index-1; i++){
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }
        return `Value ${value} inserted successfully`
    }
    removeByIndex(index){
        if(index<0 || index>=this.size){
            return null
        }
        let removeNode
        if(index===0){
            removeNode = this.head
            this.head = this.head.next
        }else{
            let prev = this.head
            for(let i=0; i<index-1;i++){
                prev = prev.next
            }
            removeNode = prev.next
            prev.next = removeNode.next
        }
        this.size--
        return removeNode.value
    }
    removeByValue(value){
        if(this.isEmpty()){
            return null
        }
        if(this.head.value===value){
            this.head = this.head.next
            this.size--
            return value
        }
        let prev = this.head
        while(prev.next && prev.next.value!==value){
            prev = prev.next
        }
        if(prev.next){
            prev.next = prev.next.next
            this.size--
            return value
        }
        return null
    }
    searchByValue(value){
        if(this.isEmpty()){
            return -1
        }
        let i=0;
        let curr = this.head
        while(curr){
            if(curr.value===value){
                return i
            }
            curr = curr.next
            i++
        }
        return -1
    }
    searchByIndex(index){
        if(index<0 || index>=this.size){
            return null
        }
        let curr = this.head
        for(let i=0; i<index; i++){
            curr = curr.next
        }
        return curr.value
    }
    reverse(){
        let prev = null
        let curr = this.head
        while(curr){
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }
    display(){
        if(this.isEmpty()){
            console.log("List is Empty")
        }else{
            let curr = this.head
            let listValues = ""
            while(curr){
                listValues = listValues + `${curr.value} `
                curr = curr.next
            }
            console.log(listValues)
        }
    }
    clear(){
        this.head = null
        this.size = 0
    }
}

const list = new LinkedList()

console.log(list.isEmpty())
console.log(list.getSize())
list.display()
list.prepend(10)
list.display()
list.prepend(20)
list.prepend(30)
list.display()
list.append(40)
list.append(50)
list.append(60)
list.display()
console.log(list.insert(100, 3))
list.display()
console.log(list.insert(200, 4))
list.display()
console.log(list.removeByIndex(3))
list.display()
console.log(list.removeByValue(200))
list.display()
console.log(list.searchByValue(90))
console.log(list.searchByValue(50))
console.log(list.searchByIndex(0))
console.log(list.searchByIndex(2))
list.reverse()
list.display()
list.clear()
console.log(list.getSize())