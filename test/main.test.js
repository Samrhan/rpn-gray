const rpn = require('../main')

describe('RPN', ()=>{
    it("should an empty array on empty squence", ()=>{
        expect(rpn('')).toEqual([]);
    })
})
