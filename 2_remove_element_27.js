var removeElement = function(nums, val) {

    //   Two pointer approach
        let i = 0; // Pointer to iterate over the array
        let j = 0; // Pointer to track position to overwrite elements
    
        while(i < nums.length) {
            if(nums[i] != val){
                nums[j] = nums[i];
                j++;  // Increment j only when the element is not equal to val
            }
            i++; // else Increment i in each iteratio
        }
    
        return j; // j is the new length of the modified array;
    
};

console.log(removeElement([3,2,2,3], 3))