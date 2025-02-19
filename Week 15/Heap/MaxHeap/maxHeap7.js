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
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]]
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
        let leftChild = this.getLeftChild(index)
        let rightChild = this.getRightChild(index)
        
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

const maxHeap = new MaxHeap()
maxHeap.insert(60)
maxHeap.insert(100)
maxHeap.insert(50)
maxHeap.insert(40)
maxHeap.insert(80)
maxHeap.insert(65)
maxHeap.insert(70)
maxHeap.print()
console.log(maxHeap.getMax())
console.log(maxHeap.delete())
maxHeap.print()