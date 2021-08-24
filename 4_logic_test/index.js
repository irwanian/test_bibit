function groupingAnagram(words) {
    if (typeof words !== 'object' && !words.length) {
        return 'Please pass type of array'
    }

    const result = {}

    for (word of words) {
        const sortedWord = word.split('').sort().join('')

        if (result[sortedWord]) {
            result[sortedWord].push(word)
        } else {
            result[sortedWord] = [word]
        }
    }

    return Object.values(result)
}

console.log(groupingAnagram(['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua']))