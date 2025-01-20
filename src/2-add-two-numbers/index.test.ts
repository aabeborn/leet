import { describe, test, expect } from 'vitest'
import { addTwoNumbers, createArrayFromList, createListFromArray } from '.'

describe('2 - Add Two Numbers', () => {
	test('Basic addition', () => {
		const l1 = createListFromArray([2, 4, 3])
		const l2 = createListFromArray([5, 6, 4])
		expect(createArrayFromList(addTwoNumbers(l1, l2))).toEqual([7, 0, 8])
	})
	test('Example 2: Zero vales', () => {
		const l1 = createListFromArray([0])
		const l2 = createListFromArray([0])
		expect(createArrayFromList(addTwoNumbers(l1, l2))).toEqual([0])
	})

	test('Example 3: Different length lists with multiple carries', () => {
		const l1 = createListFromArray([9, 9, 9, 9, 9, 9, 9])
		const l2 = createListFromArray([9, 9, 9, 9])
		expect(createArrayFromList(addTwoNumbers(l1, l2))).toEqual([8, 9, 9, 9, 0, 0, 0, 1])
	})

	test('Different lengths without carry', () => {
		const l1 = createListFromArray([1, 2, 3]) // 321
		const l2 = createListFromArray([1]) // 1
		expect(createArrayFromList(addTwoNumbers(l1, l2))).toEqual([2, 2, 3]) // 322
	})

	test('Single digit carry', () => {
		const l1 = createListFromArray([5])
		const l2 = createListFromArray([5])
		expect(createArrayFromList(addTwoNumbers(l1, l2))).toEqual([0, 1]) // 10
	})

	test('Long numbers with multiple carries', () => {
		const l1 = createListFromArray([9, 9, 9]) // 999
		const l2 = createListFromArray([1]) // 1
		expect(createArrayFromList(addTwoNumbers(l1, l2))).toEqual([0, 0, 0, 1]) // 1000
	})

	test('Large numbers within constraints', () => {
		const l1 = createListFromArray([1, 0, 0, 0, 0, 0, 0, 0, 0, 0]) // Very large number
		const l2 = createListFromArray([5, 6, 4])
		expect(createArrayFromList(addTwoNumbers(l1, l2))).toEqual([6, 6, 4, 0, 0, 0, 0, 0, 0, 0])
	})

	test('Edge case: carry propagation through zeros', () => {
		const l1 = createListFromArray([9, 9, 9, 1]) // 1999
		const l2 = createListFromArray([1]) // 1
		expect(createArrayFromList(addTwoNumbers(l1, l2))).toEqual([0, 0, 0, 2]) // 2000
	})
})
