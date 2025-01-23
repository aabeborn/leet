import { describe, test, expect } from 'vitest'
import { zigzagConversion } from '.'

describe('6 - ZigZag Conversion', () => {
	test('Example 1: Three rows', () => {
		expect(zigzagConversion('PAYPALISHIRING', 3)).toBe('PAHNAPLSIIGYIR')
	})

	test('Example 2: Four rows', () => {
		expect(zigzagConversion('PAYPALISHIRING', 4)).toBe('PINALSIGYAHRPI')
	})

	test('Example 3: Single row', () => {
		expect(zigzagConversion('A', 1)).toBe('A')
	})

	test('Empty string', () => {
		expect(zigzagConversion('', 1)).toBe('')
	})

	test('Two rows', () => {
		expect(zigzagConversion('ABCDEF', 2)).toBe('ACEBDF')
	})

	test('Number of rows equals string length', () => {
		expect(zigzagConversion('ABC', 3)).toBe('ABC')
	})

	test('Number of rows greater than string length', () => {
		expect(zigzagConversion('AB', 3)).toBe('AB')
	})

	test('String with punctuation', () => {
		expect(zigzagConversion('A.B,C', 2)).toBe('ABC.,')
	})

	test('Lower and uppercase', () => {
		expect(zigzagConversion('aAmMzZ', 2)).toBe('amzAMZ')
	})

	test('Maximum length string', () => {
		const input = 'A'.repeat(1000)
		expect(zigzagConversion(input, 1000)).toBe(input)
	})

	test('Single character multiple rows', () => {
		expect(zigzagConversion('A', 5)).toBe('A')
	})

	test('Two characters multiple rows', () => {
		expect(zigzagConversion('AB', 5)).toBe('AB')
	})

	test('Complex pattern multiple rows', () => {
		expect(zigzagConversion('ABCDEFGHIJKLMNOP', 5)).toBe('AIBHJPCGKODFLNEM')
	})
})
