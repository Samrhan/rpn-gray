function sum(stack) {
    const first = stack.pop();
    const second = stack.pop();
    stack.push(first + second);
}

function rpn(sequence) {
    const parsedSequence = sequence.split(" ");
    const stack = [];
    parsedSequence.forEach((element) => {
        const number = parseInt(element);
        if (isNaN(number)) {
            if (element === '+') {
                sum(stack);
            }
        } else {
            stack.push(number);
        }
    })
    return stack;
}

module.exports = rpn
