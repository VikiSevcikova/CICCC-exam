//given nums which is array of integers, with no duplicates
// create a maximum binary tree recursively from nums

// create root node is the maximum value in nums
// recursively build the left subtree on the subarray prefix to the left of the maximum value
// recursively build the right subtree on the subarray prefix to the right of the maximum value

class TreeItem{
    constructor(value, left = null, right = null){
        this.value = value,
        this.left = left,
        this.right = right
    }
}
function getMaximumBinaryTree(nums){
    let max = -1;
    let index = -1;
    //get the max of the array (main, left or right) and get also the index to be able to divide the array to the right and the left side
    for(let i = 0; i < nums.length; i++){
        if(max < nums[i]){
            max = nums[i];
            index = i;
        }
    }
    //if the max was not found just return null
    if(max === -1 && index === -1) return null;
    let root = new TreeItem(max, getMaximumBinaryTree(nums.slice(0,index)), getMaximumBinaryTree(nums.slice(index+1)));
    return root;
}

let nums = [3,2,1,6,0,5]
// let nums = [3,2,1]
// let nums = [6,0,5]
console.log(getMaximumBinaryTree(nums));
