export const lengthOfLongestSubstring = (s: string): number => {
	const chars: string[] = []
	let maxLength = 0

	for (let r = 0; r < s.length; r++) {
		if (chars.includes(s[r]!)) {
			chars.splice(0, chars.indexOf(s[r]!) + 1)
		}
		chars.push(s[r]!)
		maxLength = Math.max(maxLength, chars.length)
	}

	return maxLength
}
