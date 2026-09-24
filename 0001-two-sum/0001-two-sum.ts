function twoSum(nums: number[], target: number): number[] {
    const n = nums.length;
    for(let i : number = 0 ; i < n ; i++){
        for(let j : number = 1 + i ; j < n ; j++){
            if(nums[i] + nums[j] === target){
                return [i,j];
            };
        };
    };
    return []
};