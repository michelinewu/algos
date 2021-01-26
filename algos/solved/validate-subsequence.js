// SOURCE: ALGOEXPERT

function isValidSubsequence(array, sequence) {
	let numMatches = 0

	let startingPoint = 0
	for (let i = 0; i < sequence.length; i++) {
		for (let j = startingPoint; j < array.length; j++) {
			if (numMatches === sequence.length) return true
			if (sequence[i] === array[j]) {
				numMatches++
				startingPoint = j+1
			}
		}
	}
	if (numMatches === sequence.length) return true
	return false
}
