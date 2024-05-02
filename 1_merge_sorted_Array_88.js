/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {

    // 1. Brute Force
        
        // let i = m - 1; // index for nums 1
        // let j = n - 1; // index for nums 1
        // let k = m + n -1;
    
        // // Iterate through both arrays until one of them is exhausted
    
        // while(i >= 0 && j >= 0) {
        //     if(nums1[i] > nums2[j]){
        //         nums1[k] = nums1[i];
        //         i--;
        //     } else {
        //         nums1[k] = nums2[j];
        //         j--;
        //     }
        //     k--;
        // }
    
        // // If there are remaining elements in nums1, add them to nums1
    
        // while(i >= 0 ){
        //     nums1[k] = nums1[i];
        //     i--;
        //     k--;
        // }
    
        //  // If there are remaining elements in nums2, add them to nums1
    
        // while(j >= 0) {
        //     nums1[k] = nums2[j];
        //     j--;
        //     k--;
        // }
    
    // 2. O((m+n)log(m+n)) 
    // Copy nums1 into a separate array to preserve original elements
        // let merged = nums1.slice(0,m);
    
        // // Merge nums2 into merged array
    
        // for(let i = 0; i< n; i++) {
        //     merged.push(nums2[i]);
        // }
    
        // merged.sort((a,b) => a-b);
    
        // for(let i =0; i< m+n; i++){
        //     nums1[i] = merged[i] 
        // }
    
    // 3. Better Time Complexity    
    
    let i = m-1;
    let j = n-1;
    let k = m+n-1;
    
    while(i>=0 && j>= 0){
        if(nums1[i] >nums2[j]){
            nums1[k--] = nums1[i--]; 
        }else{
            nums1[k--] = nums2[j--]
        }
    }
    
    while(j>=0){
        nums1[k--] = nums2[j--]
    }
    
    
    };