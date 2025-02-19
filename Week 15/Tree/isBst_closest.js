findClosest(root, target) {
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