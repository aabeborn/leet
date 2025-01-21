/* Solution
 * - getting if the merge of arrays is odd or even
 * - divide both in left and right side
 * - if last element of first array on left side is minor of the first element of the second array on the right side
 * - and last element of the second array on the left side is minor of the first element of the first array on the right side
 * - we have found the first half. Now if is odd get the min of the two right side and we are done. If even get the max of the last element of the left side and the first element of the right side and divide by 2
 * - In case of the last element of first array is bigger than the second we assume that the last element of left side of first array is on the right side. So now we need to increase the left side of the last array and decresase the right side of the first array. The opposite in other case
 * - When we finally find the first half get the median as before
 */
export const findMedianSortedArrays = (a: number[], b: number[]): number => {
	if (a.length === 0 && b.length === 0) throw new Error('Both arrays are empty')

	// utility to finally find the median
	const isOdd = (a.length + b.length) % 2 !== 0

	const aMiddle = Math.floor(a.length / 2)
	const bMiddle = (a.length + b.length) / 2 - aMiddle

	let aLeft = a.slice(0, aMiddle)
	let aRight = a.slice(aMiddle, a.length)

	let bLeft = b.slice(0, bMiddle)
	let bRight = b.slice(bMiddle, b.length)

	if (b.length === 0) {
		isOdd ? a[a.length / 2] : a[a.length / 2 - 1]! + a[a.length / 2]! / 2
	}
	if (a.length === 0) {
		isOdd ? b[b.length / 2] : b[b.length / 2 - 1]! + b[b.length / 2]! / 2
	}

	while (aLeft.length !== 0 || bLeft.length !== 0 || aRight.length !== 0 || bRight.length !== 0) {
		// if last element of aLeft is bigger than first element of bRight, means that the last element of aLeft is on the right side
		if (aLeft[aLeft.length - 1]! > bRight[0]!) {
			// so we add last aLeft element to aRight
			// and then first element of bRight added to bLeft.
			aRight.unshift(aLeft.pop()!)
			bLeft.push(bRight.shift()!)
			continue
		}
		// if first element of aRight is smaller than last element of bLeft means that the last element of bLeft is on the right side
		if (aRight[0]! < bLeft[bLeft.length - 1]!) {
			// so we add first element of aRight to aLeft
			// and then last element of bLeft added to bRight.
			aLeft.push(aRight.shift()!)
			bRight.unshift(bLeft.pop()!)
			continue
		}
		// found the half so break the loop
		break
	}

	// If the legnth of merged array isOdd return the max of the last element of aLeft and bLeft
	if (isOdd) {
		return Math.min(aRight[0] ?? Infinity, bRight[0] ?? Infinity)
	} else {
		// in even case we do the sum between max of the left side and min of the right side and divide by 2
		const left = Math.max(aLeft[aLeft.length - 1] ?? 0, bLeft[bLeft.length - 1] ?? 0)
		const right = Math.min(aRight[0] ?? Infinity, bRight[0] ?? Infinity)
		return (left + right) / 2
	}
}
