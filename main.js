function sum(stack) {
    const first = stack.pop();
    const second = stack.pop();
    stack.push(first + second);
}

function minus(stack) {
    const first = stack.pop();
    const second = stack.pop();
    // The order of the operands is reversed
    stack.push(second - first);
}

function sqrt(stack) {
    const first = stack.pop();
    stack.push(Math.sqrt(first));
}

function rpn(sequence) {
    const parsedSequence = sequence.split(" ");
    const stack = [];
    parsedSequence.forEach((element) => {
        const number = parseInt(element);
        if (isNaN(number)) {
            switch (element) {
                case '+':
                    sum(stack);
                    break;
                case '-':
                    minus(stack);
                    break;
                case 'sqrt':
                    sqrt(stack);
                    break;
                default:
                    break;
            }
        } else {
            stack.push(number);
        }
    })
    return stack;
}

module.exports = rpn
