class MaxHeap{
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
        while(index>0 && this.heap[parentIndex]<this.heap[index]){
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
        let largest = index
        let leftChild = this.getLeftChildIndex(index)
        let rightChild = this.getRightChildIndex(index)
        
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
}

function maxHeapAscending(arr){
    let maxHeap = new MaxHeap()
    
    for(let value of arr){
        maxHeap.insert(value)
    }
    
    let result = []
    while(maxHeap.heap.length){
        result.push(maxHeap.remove())
    }
    
    
    return result.reverse()
}

console.log(maxHeapAscending([5,10,12,3,7,33]))
