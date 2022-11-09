function rpn(sequence) {
    const parsedSequence = sequence.split(" ");
    const stack = [];
    parsedSequence.forEach((element) => {
        const number = parseInt(element);
        if (!isNaN(number)) {
            stack.push(number);
        }
    })
    return stack;
}

module.exports = rpn
