import { describe, expect, test } from 'vitest'
import { longestPalindrome } from './'
describe('5 - Longest Palindromic Substring', () => {
	test('Example 1: Multiple possible answers', () => {
		const result = longestPalindrome('babad')
		expect(['bab', 'aba']).toContain(result)
	})

	test('Example 2: Even length palindrome', () => {
		expect(longestPalindrome('cbbd')).toBe('bb')
	})

	test('Single character', () => {
		expect(longestPalindrome('a')).toBe('a')
	})

	test('Two same characters', () => {
		expect(longestPalindrome('aa')).toBe('aa')
	})

	test('Two different characters', () => {
		const result = longestPalindrome('ab')
		expect(['a', 'b']).toContain(result)
	})

	test('All same characters', () => {
		expect(longestPalindrome('aaaa')).toBe('aaaa')
	})

	test('Long palindrome at start', () => {
		expect(longestPalindrome('abbacd')).toBe('abba')
	})

	test('Long palindrome at end', () => {
		expect(longestPalindrome('cdabba')).toBe('abba')
	})

	test('Long palindrome in middle', () => {
		expect(longestPalindrome('xabbacd')).toBe('abba')
	})

	test('Multiple palindromes same length', () => {
		const result = longestPalindrome('abaaba')
		expect(['abaaba']).toContain(result)
	})

	test('Odd length palindrome', () => {
		expect(longestPalindrome('cabad')).toBe('aba')
	})

	test('No palindrome longer than 1', () => {
		const result = longestPalindrome('abcd')
		expect(['a', 'b', 'c', 'd']).toContain(result)
	})

	test('Nested palindromes', () => {
		expect(longestPalindrome('aaaabaaaa')).toBe('aaaabaaaa')
	})

	test('Maximum length case', () => {
		const longString = 'a'.repeat(1000)
		expect(longestPalindrome(longString)).toBe(longString)
	})

	test('Case sensitivity', () => {
		expect(longestPalindrome('Abba')).toBe('bb')
	})

	test('Numbers as characters', () => {
		expect(longestPalindrome('12321')).toBe('12321')
	})

	test('Mixed alphanumeric', () => {
		expect(longestPalindrome('a1b2b1a')).toBe('a1b2b1a')
	})

	test('Overlapping potential palindromes', () => {
		expect(longestPalindrome('abacab')).toBe('bacab')
	})

	test('Multiple non-overlapping palindromes', () => {
		const result = longestPalindrome('aabbaa112211')
		expect(['aabbaa', '112211']).toContain(result)
	})

	test('Complex pattern with multiple possibilities', () => {
		expect(
			longestPalindrome(
				'civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth'
			)
		).toBe('ranynar')
	})
})
