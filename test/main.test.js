const rpn = require('../main')

describe('RPN', () => {
    it("should an empty array on empty sequence", () => {
        expect(rpn('')).toEqual([]);
    })
    it('should add one number to the stack given a sequence with one number', () => {
        expect(rpn('1')).toEqual([1]);
    })
    it("should add n numbers to the stack given a sequence with n numbers", () => {
        expect(rpn('1 2 3 4 5')).toEqual([1, 2, 3, 4, 5]);
    });
    it('should add the sum to the stack given a sequence with two numbers and a +', () => {
        expect(rpn('1 2 +')).toEqual([3]);
    });
    it('should add the difference to the stack given a sequence with two numbers and a -', () => {
        expect(rpn('2 1 -')).toEqual([1]);
    });
    it('should support multiple operations', () => {
        expect(rpn('4 2 + 3 -')).toEqual([3]);
    });

})
