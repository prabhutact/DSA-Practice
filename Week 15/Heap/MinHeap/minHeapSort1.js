class MinHeap{
    constructor(){
        this.heap = []
    }
    getParentIndex(index){
        return Math.floor((index-1)/2)
    }
    getLeftChildIndex(index){
        return  2 * index + 1
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
        while(index>0 && this.heap[parentIndex]>this.heap[index]){
            [this.heap[index],this.heap[parentIndex]] = [this.heap[parentIndex],this.heap[index]]
            index = parentIndex
            parentIndex = this.getParentIndex(index)
        }
    }
    remove(){
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
        let leftChild = this.getLeftChildIndex(index)
        let rightChild = this.getRightChildIndex(index)
        
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
}

function minHeapAscending(arr){
    let minHeap = new MinHeap()
    
    for(let value of arr){
        minHeap.insert(value)
    }
    
    let result = []
    while(minHeap.heap.length){
        result.push(minHeap.remove())
    }
    
    
    return result
}

console.log(minHeapAscending([5,10,12,3,7,33]))
