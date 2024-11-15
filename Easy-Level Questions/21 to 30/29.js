function findPairs(nums, target) {
    let result = [];
    
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            
            if (nums[i] + nums[j] === target) {
                result.push([i, j]);
            }
        }
    }
    
    return result;
}


const nums = [2, 7, 11, 15];
const target = 9;
const pairs = findPairs(nums, target);
console.log(pairs);
