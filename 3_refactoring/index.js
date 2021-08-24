function getIndexOfBrackets(string) {
    let indexOpeningBracket = -1
    let indexClosingBracket = -1

    for (let i in string) {
        if (string[i] === '(') {
            indexOpeningBracket = Number(i)
        } else if (string[i] === ')') {
            indexClosingBracket = Number(i)
            if (indexClosingBracket > indexOpeningBracket && indexOpeningBracket !== -1) {
                break;
            } 
        }
    }

    return {
        indexOpeningBracket,
        indexClosingBracket
    }
}


function findFirstStringInBracket(string) {
    if (typeof string !== 'string') {
        return 'Data passed must be String'
    }

    let result = ''
    
    if (string && string.includes('(') && string.includes(')') ) {
        const { indexOpeningBracket, indexClosingBracket } = getIndexOfBrackets(string)

        if (indexOpeningBracket < indexClosingBracket) {
            result = string.substring(indexOpeningBracket + 1, indexClosingBracket)
        }
    }

    return result
}

console.log(findFirstStringInBracket('m)(ak)as)(((((a)(n)'))