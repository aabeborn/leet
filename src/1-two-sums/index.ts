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
