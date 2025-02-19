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
    getMax(){
        return this.heap.length>0 ? this.heap[0] : null
    }
    print(){
        return this.heap.join(" ")
    }
}

const maxHeap = new MaxHeap();
maxHeap.insert(10);
maxHeap.insert(20);
maxHeap.insert(5);
maxHeap.insert(30);
maxHeap.insert(25);

console.log("Heap Elements:", maxHeap.print()); 

console.log("Max Element:", maxHeap.getMax()); 

console.log("Removed Max:", maxHeap.remove()); 
console.log("Heap After Removal:", maxHeap.print());  

console.log("Max Element:", maxHeap.getMax()); 