const users = require('../data.js');

describe('Password validation', () => {
    test('Should contain caps and no-cap letters & also numbers/special chars', () =>{
        users.forEach(user => {
            const passw = user.password;
            const hasLetter = /[a-zA-Z]/.test(passw);
            const hasNumer = /\d/.test(passw);

            expect(hasLetter && hasNumer).toBe(true);
        })
    })
})


describe('Email validation', () => {
    test('email should contain @ && end with .com', () => {
        users.forEach(user => {
            const hasAt = user.email.includes('@');
            const hasDotCom = user.email.endsWith('.com');
            expect(hasAt && hasDotCom).toBe(true);
        })
    })
})
