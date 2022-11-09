const rpn = require('../main')

describe('RPN', ()=>{
    it("should an empty array on empty squence", ()=>{
        expect(rpn('')).toEqual([]);
    })
    it('should add one number to the stack given a sequence with one number', ()=>{
        expect(rpn('1')).toEqual([1]);
    })
})
