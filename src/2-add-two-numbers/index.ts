export class ListNode {
	public value: number
	public next: ListNode | null

	constructor(value: number = 0, next: ListNode | null = null) {
		this.value = value
		this.next = next
	}
}

/* Function used for testing purposes */
export const createListFromArray = (items: number[]): ListNode | null => {
	if (items.length === 0) return null
	if (items.length === 1) return new ListNode(items[0])
	return new ListNode(items[0], createListFromArray(items.slice(1)))
}
/* Function used for testing purposes */
export const createArrayFromList = (list: ListNode | null): number[] => {
	const result: number[] = []
	let item: ListNode | null = list
	while (item !== null) {
		result.push(item.value)
		item = item.next
	}
	return result
}

export const addTwoNumbers = (l1: ListNode | null, l2: ListNode | null, carry: number = 0): ListNode | null => {
	if (l1 === null && l2 === null && carry === 0) return null
	const value = (l1?.value ?? 0) + (l2?.value ?? 0) + carry
	return new ListNode(value % 10, addTwoNumbers(l1?.next ?? null, l2?.next ?? null, Math.floor(value / 10)))
}
