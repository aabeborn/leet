import { describe, expect, test } from 'vitest'
import { findMedianSortedArrays } from '.'

describe('4 - Median of Two Sorted Arrays', () => {
	test('Simple case', () => {
		expect(findMedianSortedArrays([1, 2], [3, 4])).toEqual(2.5)
	})
	test('Array with one element', () => {
		expect(findMedianSortedArrays([1], [2])).toEqual(1.5)
	})
	test('First array smaller than second', () => {
		expect(findMedianSortedArrays([1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17])).toEqual(9)
	})
	test('First array bigger than second', () => {
		expect(findMedianSortedArrays([11, 12, 13, 14, 15], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual(8)
	})
	test('Edge case with empty arrays', () => {
		expect(() => findMedianSortedArrays([], [])).toThrow('Both arrays are empty')
		expect(findMedianSortedArrays([1], [])).toEqual(1)
		expect(findMedianSortedArrays([], [1])).toEqual(1)
	})
})
