Why Do We Check with -Infinity and Infinity?
At the beginning, we call:

js
Copy
Edit
isValidBST(root, -Infinity, Infinity)
Here,

min = -Infinity: The root can be any value greater than -Infinity.
max = Infinity: The root can be any value less than Infinity.
Yes, directly comparing any real number with Infinity or -Infinity is always false, but we use them because:

It sets the initial valid range for all possible values.
We don't know the tree's range initially, so we start with the widest possible range.
As we move down the tree, we restrict the range dynamically.
Left subtree values must be less than the parent.
Right subtree values must be greater than the parent.
Example: Why Range Updates Are Important?
Consider this tree:

markdown
Copy
Edit
       10
      /  \
     5    15
        /   \
       6     20  ❌
We call:

js
Copy
Edit
isValidBST(root, -Infinity, Infinity)  // root = 10
Valid: 10 is between -Infinity and Infinity ✅
Recursively check left and right subtrees.
Checking Left Subtree (5)
js
Copy
Edit
isValidBST(root.left, -Infinity, 10)
Valid: 5 is between -Infinity and 10 ✅
Checking Right Subtree (15)
js
Copy
Edit
isValidBST(root.right, 10, Infinity)
Valid: 15 is between 10 and Infinity ✅
Recursively check 6 and 20.
Checking Left Child of 15 (6)
js
Copy
Edit
isValidBST(root.left, 10, 15)
❌ Invalid! 6 is not between 10 and 15.
Function returns false. 🚨
What If We Didn't Use Infinity?
If we didn't start with -Infinity and Infinity, we wouldn’t have a way to set an initial valid range for all numbers.

Thus, we need infinity to ensure:

The first node (root) has no restrictions.
We can gradually restrict valid ranges as we traverse down the tree.
This technique is the best way to validate a Binary Search Tree efficiently! 🚀