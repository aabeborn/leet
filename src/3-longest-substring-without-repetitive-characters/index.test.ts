import { describe, expect, test } from 'vitest'
import { lengthOfLongestSubstring } from './'
describe('3 - Longest Substring Without Repeating Characters', () => {
	test('Example 1: Basic case with repeating characters', () => {
		expect(lengthOfLongestSubstring('abcabcbb')).toBe(3) // "abc"
	})

	test('Example 2: All same characters', () => {
		expect(lengthOfLongestSubstring('bbbbb')).toBe(1) // "b"
	})

	test('Example 3: Substring vs subsequence', () => {
		expect(lengthOfLongestSubstring('pwwkew')).toBe(3) // "wke"
	})

	test('Empty string', () => {
		expect(lengthOfLongestSubstring('')).toBe(0)
	})

	test('Single character', () => {
		expect(lengthOfLongestSubstring('a')).toBe(1)
	})
	test('Longest substring at the end', () => {
		expect(lengthOfLongestSubstring('aabcd')).toBe(4) // "abcd"
	})
	test('Longest substring in the middle', () => {
		expect(lengthOfLongestSubstring('abbcdeaa')).toBe(5) // "bcde"
	})
	test('String with spaces', () => {
		expect(lengthOfLongestSubstring('a b c')).toBe(3) // "a b"
	})

	test('String with special characters', () => {
		expect(lengthOfLongestSubstring('ab@#$cd')).toBe(7) // "ab@#$cd"
	})

	test('String with numbers', () => {
		expect(lengthOfLongestSubstring('a1b2c3')).toBe(6) // "a1b2c3"
	})

	test('Complex pattern with multiple possible substrings', () => {
		expect(lengthOfLongestSubstring('abcdeafbdgcbb')).toBe(7) // "afbdgc"
	})
})
