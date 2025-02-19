class Graph{
    constructor(){
        this.adjacencyList = {}
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = new Set()
        }
    }
    addEdge(vertex1, vertex2){
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }
    removeEdge(vertex1, vertex2){
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
    }
    removeVertex(vertex){
        if(!this.adjacencyList[vertex]){
            return
        }
        
        for(let adjacencyVertex of this.adjacencyList[vertex]){
            this.removeEdge(vertex, adjacencyVertex)
        }
        delete this.adjacencyList[vertex]
    }
    hasEdge(vertex1, vertex2){
        return (
            this.adjacencyList[vertex1].has(vertex2) &&
            this.adjacencyList[vertex2].has(vertex1)
            )
    }
    print(){
        for(let vertex in this.adjacencyList){
            console.log(vertex + '-->' + [...this.adjacencyList[vertex]])
        }
    }
    bfs(start){
        const queue = [start]
        const result = []
        const visited = {}
        visited[start] = true
        
        while(queue.length){
            let currVertex = queue.shift()
            result.push(currVertex)
            
            this.adjacencyList[currVertex].forEach(neighbour=>{
                if(!visited[neighbour]){
                    visited[neighbour] = true
                    queue.push(neighbour)
                }
            })
        }
        return result
    }
    dfs(start){
        const stack = [start]
        const result = []
        const visited = {}
        visited[start] = true
        
        while(stack.length){
            let currVertex = stack.pop()
            result.push(currVertex)
            
            this.adjacencyList[currVertex].forEach(neighbour=>{
                if(!visited[neighbour]){
                    visited[neighbour] = true
                    stack.push(neighbour)
                }
            })
        }
        return result
    }
    
}

const graph = new Graph()

graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addEdge('A', 'B')
graph.addEdge('B', 'C')

graph.print()

console.log(graph.bfs('A')) 
console.log(graph.dfs('B')) 