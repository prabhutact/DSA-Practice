class MaxHeap{
    constructor(){
        this.heap = []
    }
    getParentIndex(index){
        return Math.floor((index-1)/2)
    }
    getLeftChildIndex(index){
        return 2 * index + 1
    }
    getRightChildIndex(index){
        return 2 * index + 2
    }
    insert(value){
        this.heap.push(value)
        this.heapifyUp(this.heap.length-1)
    }
    heapifyUp(index){
        let parentIndex = this.getParentIndex(index)
        while(index>0 && this.heap[parentIndex]<this.heap[index]){
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]]
            index = parentIndex
            parentIndex = this.getParentIndex(index)
        }
    }
    delete(){
        if(this.heap.length === 0){
            return null
        }
        
        if(this.heap.length === 1){
            return this.heap.pop()
        }
        
        const root = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown(0)
        return root
    }
    heapifyDown(index){
        let largest = index
        const leftChildIndex = this.getLeftChildIndex(index)
        const rightChildIndex = this.getRightChildIndex(index)
        
        if(leftChildIndex<this.heap.length && this.heap[leftChildIndex]>this.heap[largest]){
            largest = leftChildIndex
        }
        
        if(rightChildIndex<this.heap.length && this.heap[rightChildIndex]>this.heap[largest]){
            largest = rightChildIndex
        }
        
        if(largest!==index){
            [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]]
            this.heapifyDown(largest)
        }
    }
    getMax(){
        return this.heap[0]
    }
    print(){
        console.log(this.heap.join(" "))
    }
}

const maxiHeap = new MaxHeap()
maxiHeap.insert(50)
maxiHeap.insert(40)
maxiHeap.insert(30)
maxiHeap.insert(20)
maxiHeap.insert(10)

console.log(maxiHeap.getMax(), "is maximum");
console.log(maxiHeap.delete(), "removed");
console.log(maxiHeap.getMax(), "is maximum");
maxiHeap.print();