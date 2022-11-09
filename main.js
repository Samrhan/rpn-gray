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

function max(stack) {
    const max = Math.max(...stack);
    stack.splice(0);
    stack.push(max);
}

const operations = {
    '+': sum,
    '-': minus,
    'sqrt': sqrt,
    'max': max
}

function splitSequence(sequence) {
    return sequence.split(" ");
}

function parseSequence(element, stack) {
    const number = parseInt(element);
    if (isNaN(number) && operations[element]) {
        operations[element](stack);
    } else if (!isNaN(number)) {
        stack.push(number);
    }
}

function rpn(sequence) {
    const parsedSequence = splitSequence(sequence);
    const stack = [];
    parsedSequence.forEach((e) => parseSequence(e, stack));
    return stack;
}

module.exports = rpn
