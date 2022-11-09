function rpn(sequence) {
    const number = Number.parseInt(sequence);
    if (Number.isNaN(number)) {
        return []
    } else {
        return [number]
    }
}

module.exports = rpn
