/* Solution
 * Palindrome could be checked from the center.
 * The smallest palindrome is a single character.
 * In case of even palindrome, we need to check if the two characters are the same.
 * In case of odd palindrome, we need to check that the characters next to the middle one are the same.
 * Then expand
 *
 * So in code we start from the first one check odd and even case and move until the end of the string
 */

const expandFromCenter = (s: string, left: number, right: number): string => {
	let x = left
	let y = right

	while (x >= 0 && y <= s.length && s[x] === s[y]) {
		x--
		y++
	}

	return s.slice(x + 1, y)
}

export const longestPalindrome = (s: string): string => {
	let palindrome = ''

	for (let i = 0; i < s.length; i++) {
		// check odd case so both sides starts from the middle
		const odd = expandFromCenter(s, i, i)
		if (odd.length > palindrome.length) {
			palindrome = odd
		}

		const even = expandFromCenter(s, i, i + 1)
		if (even.length > palindrome.length) {
			palindrome = even
		}
	}
	return palindrome
}
