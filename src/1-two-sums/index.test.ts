import { describe, test, expect } from 'vitest'
import { twoSum } from '.'

describe('1 - Two Sums', () => {
	test('Should return correct result', () => {
		expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1])
		expect(twoSum([3, 2, 4], 6)).toEqual([1, 2])
		expect(twoSum([3, 3], 6)).toEqual([0, 1])
	})
	test('Should work with negative numbers', () => {
		expect(twoSum([-1, -2, -3, -4, -5], -8)).toEqual([2, 4])
	})
})
