class Graph{
    constructor(){
        this.adjacentList = {}
    }
    addVertex(vertex){
        if(!this.adjacentList[vertex]){
            this.adjacentList[vertex] = new Set()
        }
    }
    addEdges(vertex1, vertex2){
        if(!this.adjacentList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjacentList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjacentList[vertex1].add(vertex2)
        this.adjacentList[vertex2].add(vertex1)
    }
    removeEdges(vertex1, vertex2){
        this.adjacentList[vertex1].delete(vertex2)
        this.adjacentList[vertex2].delete(vertex1)
    }
    removeVertex(vertex){
        if(!this.adjacentList[vertex]){
            return
        }
        for(let adjacencyVertex of this.adjacentList[vertex]){
            this.removeEdges(vertex, adjacencyVertex)
        }
        delete this.adjacentList[vertex]
    }
    hasEdge(vertex1, vertex2){
        return (
            this.adjacentList[vertex1].has(vertex2) &&
            this.adjacentList[vertex2].has(vertex1)
            )
    }
    print(){
        for(let vertex in this.adjacentList){
            console.log(vertex + '-->' + [...this.adjacentList[vertex]])
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
            this.adjacentList[currVertex].forEach(neighbour=>{
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
            
            this.adjacentList[currVertex].forEach(neighbour=>{
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
graph.print()
graph.addEdges('A','B')
graph.addEdges('A','C')
graph.addEdges('B','C')
graph.print()
graph.removeVertex('A')
graph.print()