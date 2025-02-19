class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }
    isEmpty(){
        return this.size===0
    }
    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            this.tail.next = node
            this.tail = node
        }
        this.size++
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
    arrayToLinkedList(arr){
        if(arr.length===0){
            return null
        }
        for(let i=0; i<arr.length-1; i++){
            this.append(arr[i])
        }
    }
    linkedListToArray(){
        let result = []
        let curr = this.head
        while(curr){
            result.push(curr.value)
            curr = curr.next
        }
        return result
    }
    removeDuplicates(){
        let curr = this.head
        let prev = null
        let seen = new Set()
        while(curr){
            if(seen.has(curr.value)){
                prev.next = curr.next
                this.size--
            }else{
                seen.add(curr.value)
                prev = curr
            }
            curr = curr.next
        }
    }
    findDuplicates(){
        let curr = this.head
        let seen = new Set()
        let duplicates = new Set()
        while(curr){
            if(seen.has(curr.value)){
                duplicates.add(curr.value)
            }else{
                seen.add(curr.value)
            }
            curr = curr.next
        }
        return [...duplicates]
    }
}

const list = new LinkedList()

//const arr = [1,2,3,4,5]

console.log(list.isEmpty())
list.append(10)
list.append(20)
list.append(30)
list.append(40)
list.append(20)
list.append(20)
list.append(30)
list.append(50)
list.display()
//list.arrayToLinkedList(arr)
//list.linkedListToArray()
console.log(list.findDuplicates())
//list.display()
list.removeDuplicates()
list.display()

const list2 = new LinkedList()
list2.append(1)
list2.append(2)
list2.append(3)
list2.append(2)
list2.append(1)
list2.display()




