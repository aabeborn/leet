export const zigzagConversion = (s: string, numRows: number): string => {
	if (numRows === 1) return s
	// Get the different strings. one per line
	const rows = new Array(numRows).fill('')
	// Get the current line number
	let line = 0
	let forward = false

	for (let i = 0; i < s.length; i++) {
		// set the value
		rows[line] += s[i]
		// change direction when reaching the top or bottom
		if (line === 0 || line === numRows - 1) forward = !forward
		if (forward) line++
		else line--
	}

	return rows.join('')
}
