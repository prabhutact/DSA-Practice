class MaxHeap{
    constructor(){
        this.heap = []
    }
    getParent(index){
        return Math.floor((index-1)/2)
    }
    getLeftChild(index){
        return 2 * index + 1
    }
    getRightChild(index){
        return 2 * index + 2
    }
    insert(value){
        this.heap.push(value)
        this.heapifyUp(this.heap.length-1)
    }
    heapifyUp(index){
        let parentIndex = this.getParent(index)
        while(index>0 && this.heap[parentIndex]<this.heap[index]){
            [this.heap[index],this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]]
            index = parentIndex
            parentIndex = this.getParent(index)
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
        const leftChild = this.getLeftChild(index)
        const rightChild = this.getRightChild(index)
        
        if(leftChild<this.heap.length && this.heap[leftChild]>this.heap[largest]){
            largest = leftChild
        }
        
        if(rightChild<this.heap.length && this.heap[rightChild]>this.heap[largest]){
            largest = rightChild
        }
        
        if(largest!==index){
            [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]]
            this.heapifyDown(largest)
        }
    }
    getMax(){
        return this.heap.length>0 ? this.heap[0] : null
    }
    print(){
        console.log(this.heap.join(" "))
    }
}

const maxiHeap = new MaxHeap()
maxiHeap.insert(50)
maxiHeap.insert(60)
maxiHeap.insert(20)
maxiHeap.insert(30)
maxiHeap.insert(40)
maxiHeap.insert(5)

console.log(maxiHeap.getMax())
maxiHeap.print()