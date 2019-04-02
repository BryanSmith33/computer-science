function createStack() {
	const array = []
	return {
		push(item) {
			array.push(item)
		},
		pop() {
			return array.pop()
		},
		peek() {
			return array[array.length - 1]
		},
		get length() {
			return array.length
		},
		isEmpty() {
			return array.length === 0
		}
	}
}

const lowerBody = createStack()

lowerBody.push('underwear')
lowerBody.push('socks')
lowerBody.push('pants')
lowerBody.push('shoes')

lowerBody.pop()
console.log(lowerBody.peek())
