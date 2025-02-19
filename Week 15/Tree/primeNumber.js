class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    // Insert a new value into the tree
    insert(value) {
        const node = new Node(value);
        if (this.root === null) {
            this.root = node;
        } else {
            this.insertNode(this.root, node);
        }
    }

    // Helper function to insert a node recursively
    insertNode(root, node) {
        if (node.value < root.value) {
            if (root.left === null) {
                root.left = node;
            } else {
                this.insertNode(root.left, node);
            }
        } else {
            if (root.right === null) {
                root.right = node;
            } else {
                this.insertNode(root.right, node);
            }
        }
    }

    // Function to check if a number is prime
    isPrime(n) {
        if (n <= 1) return false; // 0 and 1 are not prime
        for (let i = 2; i * i <= n; i++) {
            if (n % i === 0) return false; // If divisible, not prime
        }
        return true;
    }

    // In-order traversal and print prime numbers
    inOrderAndPrintPrimes(root) {
        if (root) {
            // Traverse left subtree
            this.inOrderAndPrintPrimes(root.left);

            // Check if the current node's value is prime
            if (this.isPrime(root.value)) {
                console.log(root.value);
            }

            // Traverse right subtree
            this.inOrderAndPrintPrimes(root.right);
        }
    }
}

// Example usage
const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(3);
tree.insert(7);
tree.insert(13);
tree.insert(17);
tree.insert(2);

console.log("Prime numbers in the tree:");
tree.inOrderAndPrintPrimes(tree.root); // 2, 3, 5, 7, 13, 17
