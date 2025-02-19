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

    // Check if the tree is empty
    isEmpty() {
        return this.root === null;
    }

    // Insert a new value into the tree
    insert(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
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

    // Search for a value in the tree
    search(root, value) {
        if (!root) {
            return false;
        }

        if (value === root.value) {
            return true;
        } else if (value < root.value) {
            return this.search(root.left, value);
        } else {
            return this.search(root.right, value);
        }
    }

    // Pre-order traversal
    preOrder(root) {
        if (root) {
            console.log(root.value);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }

    // In-order traversal
    inOrder(root) {
        if (root) {
            this.inOrder(root.left);
            console.log(root.value);
            this.inOrder(root.right);
        }
    }

    // Post-order traversal
    postOrder(root) {
        if (root) {
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root.value);
        }
    }

    // Level-order traversal (Breadth-First Search)
    levelOrder() {
        const queue = [];
        queue.push(this.root);
        while (queue.length) {
            let curr = queue.shift();
            console.log(curr.value);
            if (curr.left) {
                queue.push(curr.left);
            }
            if (curr.right) {
                queue.push(curr.right);
            }
        }
    }

    // Find the minimum value in the tree
    min(root) {
        if (!root.left) {
            return root.value;
        } else {
            return this.min(root.left);
        }
    }

    // Find the maximum value in the tree
    max(root) {
        if (!root.right) {
            return root.value;
        } else {
            return this.max(root.right);
        }
    }

    // Delete a node from the tree
    delete(value) {
        this.root = this.deleteNode(this.root, value);
    }

    // Helper function to delete a node
    deleteNode(root, value) {
        if (root === null) {
            return root;
        }

        if (value < root.value) {
            root.left = this.deleteNode(root.left, value);
        } else if (value > root.value) {
            root.right = this.deleteNode(root.right, value);
        } else {
            // Node with only one child or no child
            if (!root.left && !root.right) {
                return null;
            }

            if (!root.left) {
                return root.right;
            } else if (!root.right) {
                return root.left;
            }

            // Node with two children: get the inorder successor (smallest in the right subtree)
            root.value = this.min(root.right);
            root.right = this.deleteNode(root.right, root.value);
        }
        return root;
    }

    // Find the closest value to the target in the tree
    closestValue(root, target) {
        let closest = root.value;

        while (root) {
            if (Math.abs(target - closest) > Math.abs(target - root.value)) {
                closest = root.value;
            }
            if (target < root.value) {
                root = root.left;
            } else if (target > root.value) {
                root = root.right;
            } else {
                break;
            }
        }
        return closest;
    }

    // Check if the tree is a valid Binary Search Tree (BST)
    isValidBST(root, min = -Infinity, max = Infinity) {
        if (!root) {
            return true;
        }
        if (root.value <= min || root.value >= max) {
            return false;
        }

        return (
            this.isValidBST(root.left, min, root.value) &&
            this.isValidBST(root.right, root.value, max)
        );
    }

    // Calculate the height of the tree
    height(root) {
        if (!root) {
            return -1;
        }

        const leftHeight = this.height(root.left);
        const rightHeight = this.height(root.right);

        return 1 + Math.max(leftHeight, rightHeight);
    }

    // Check if two trees are identical
    isIdentical(root1, root2) {
        // If both trees are empty, they are identical
        if (root1 === null && root2 === null) {
            return true;
        }

        // If one tree is empty and the other is not, they are not identical
        if (root1 === null || root2 === null) {
            return false;
        }

        // Check if the current nodes' values are the same, and recursively check the left and right subtrees
        return (
            root1.value === root2.value &&
            this.isIdentical(root1.left, root2.left) &&
            this.isIdentical(root1.right, root2.right)
        );
    }
}

// Example usage
const tree1 = new BinarySearchTree();
tree1.insert(10);
tree1.insert(5);
tree1.insert(15);

const tree2 = new BinarySearchTree();
tree2.insert(10);
tree2.insert(5);
tree2.insert(15);

const tree3 = new BinarySearchTree();
tree3.insert(10);
tree3.insert(5);

console.log("tree1 and tree2 are identical:", tree1.isIdentical(tree1.root, tree2.root)); // true
console.log("tree1 and tree3 are identical:", tree1.isIdentical(tree1.root, tree3.root)); // false
