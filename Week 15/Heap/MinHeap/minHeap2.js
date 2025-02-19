class MinHeap{
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
        while(index>0 && this.heap[parentIndex]>this.heap[index]){
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
        let smallest = index
        let leftChild = this.getLeftChild(index)
        let rightChild = this.getRightChild(index)
        
        if(leftChild<this.heap.length && this.heap[leftChild]<this.heap[smallest]){
            smallest = leftChild
        }
        if(rightChild<this.heap.length && this.heap[rightChild]<this.heap[smallest]){
            smallest = rightChild
        }
        
        if(smallest!==index){
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]]
            this.heapifyDown(smallest)
        }
    }
    getMin(){
        return this.heap.length>0 ? this.heap[0] : null
    }
    print(){
        console.log(this.heap.join(" "))
    }
}

const minHeap = new MinHeap()
minHeap.insert(60)
minHeap.insert(100)
minHeap.insert(50)
minHeap.insert(40)
minHeap.insert(80)
minHeap.insert(65)
minHeap.insert(70)
minHeap.print()
console.log(minHeap.getMin())
console.log(minHeap.delete())
minHeap.print()