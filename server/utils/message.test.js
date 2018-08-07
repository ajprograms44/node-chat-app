var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', ()=>{
    it('should generate the correct message object', ()=> {
        var res = generateMessage('Andy','hey there here we are')

        expect(res.from).toBe('Andy');
        expect(res.text).toBe('hey there here we are');
        expect(typeof res.createdAt).toBe('number')
        
    })
})