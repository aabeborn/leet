/* 1. Two Sum
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

    Example 1:
        Input: nums = [2,7,11,15], target = 9
        Output: [0,1]
        Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
    
    Example 2:
        Input: nums = [3,2,4], target = 6
        Output: [1,2]
    
    Example 3:
        Input: nums = [3,3], target = 6
        Output: [0,1]
 
    Constraints:
        - 2 <= nums.length <= 10^4
        - -10^9 <= nums[i] <= 10^9
        - -10^9 <= target <= 10^9
        -  Only one valid answer exists.
*/

const checkConstraints = (nums: number[], target: number): void => {
	if (nums.length < 2 || nums.length > 10 ** 4)
		throw new Error('Number of elements in the array should be between 2 and 10^9')
	if (nums.some(value => value < -(10 ** 9) || value > 10 ** 9))
		throw new Error('Elements in the array should be between -10^9 and 10^9')
	if (target < -(10 ** 9) || target > 10 ** 9) throw new Error('Target should be between -10^9 and 10^9')
}

export const twoSum = (nums: number[], target: number) => {
	const complements = new Map<number, number>()

	// it is not required but i like the fact of checking constraints
	checkConstraints(nums, target)

	for (let i = 0; i < nums.length; i++) {
		if (nums[i]! > 10 ** 9 || nums[i]! < -(10 ** 9))
			// it is not required but i like the fact of checking constraints
			throw new Error('Elements in the array should be between -10^9 and 10^9')
		const complement = target - nums[i]!
		if (complements.has(complement)) {
			return [complements.get(complement)!, i]
		}
		complements.set(nums[i]!, i)
	}
	throw new Error('No solutions exists')
}
