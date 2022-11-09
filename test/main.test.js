const rpn = require('../main')

describe('RPN', ()=>{
    it("should an empty array on empty squence", ()=>{
        expect(rpn('')).toEqual([]);
    })
    it('should add one number to the stack given a sequence with one number', ()=>{
        expect(rpn('1')).toEqual([1]);
    })
    it("should add n numbers to the stack given a sequence with n numbers", ()=>{
        expect(rpn('1 2 3 4 5')).toEqual([1,2,3,4,5]);
    });
})
