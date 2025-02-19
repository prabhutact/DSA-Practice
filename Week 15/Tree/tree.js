class TreeNode {
    constructor(value) {
        this.value = value; // The value of the node
        this.children = []; // Array to store the children of the node
    }

    // Add a child to the current node
    addChild(child) {
        this.children.push(child);
    }
}

class Tree {
    constructor() {
        this.root = null; // The root of the tree
    }

    // Check if the tree is empty
    isEmpty() {
        return this.root === null;
    }

    // Search for a value in the tree using Depth-First Search
    search(node, value) {
        if (!node) return false; // If node is null, value not found

        if (node.value === value) {
            return true; // Value found
        }

        // Recursively search in each child
        for (let child of node.children) {
            if (this.search(child, value)) {
                return true;
            }
        }

        return false; // Value not found
    }

    // Delete a node with the given value
    delete(node, value) {
        if (!node) return null;

        // Check each child of the current node
        for (let i = 0; i < node.children.length; i++) {
            if (node.children[i].value === value) {
                // Remove the child with the matching value
                node.children.splice(i, 1);
                return true; // Deletion successful
            } else {
                // Recursively call delete on the child
                const deleted = this.delete(node.children[i], value);
                if (deleted) return true;
            }
        }

        return false; // Value not found
    }

    // Perform Depth-First Search (DFS) traversal
    dfs(node) {
        if (!node) return;
        console.log(node.value); // Visit the current node
        for (let child of node.children) {
            this.dfs(child); // Visit each child recursively
        }
    }

    // Perform Breadth-First Search (BFS) traversal
    bfs() {
        if (!this.root) return;

        const queue = [];
        queue.push(this.root);

        while (queue.length > 0) {
            const current = queue.shift();
            console.log(current.value); // Visit the current node
            for (let child of current.children) {
                queue.push(child); // Add all children to the queue
            }
        }
    }
}

// Create a tree
const tree = new Tree();

// Create nodes
const root = new TreeNode(1);
const child1 = new TreeNode(2);
const child2 = new TreeNode(3);
const child3 = new TreeNode(4);
const grandChild1 = new TreeNode(5);
const grandChild2 = new TreeNode(6);

// Build the tree structure
tree.root = root;
root.addChild(child1);
root.addChild(child2);
root.addChild(child3);
child1.addChild(grandChild1);
child1.addChild(grandChild2);

// Perform DFS traversal
console.log("DFS Traversal:");
tree.dfs(tree.root);

// Search for a value
console.log("Search for 5:", tree.search(tree.root, 5)); // Output: true
console.log("Search for 7:", tree.search(tree.root, 7)); // Output: false

// Delete a value
console.log("Deleting 3...");
tree.delete(tree.root, 3);

// Perform BFS traversal after deletion
console.log("BFS Traversal after deletion:");
tree.bfs();
