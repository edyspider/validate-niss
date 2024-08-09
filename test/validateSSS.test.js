const validateNISS =  require('../index');

test('Valid NISS numbers', () => {
    expect(validateNISS('12345678910')).toBe(true);
    expect(validateNISS('12109072813')).toBe(true);
    expect(validateNISS('10158266749')).toBe(true);
    expect(validateNISS('13071480279')).toBe(true);
});

test('invalid NIF numbers', () => {
    expect(validateNISS('1234567890')).toBe(false);  // too short
    expect(validateNISS('012345678910')).toBe(false);  // too long
    expect(validateNISS('02109072813')).toBe(false);  // invalid start
    expect(validateNISS('12109272813')).toBe(false);  // invalid middle
    expect(validateNISS('12109072812')).toBe(false);  // invalid end (CD)
});

test('Invalid input types', () => {
    //expect(validateNISS('abcdefghijk')).toBe(false);  // letter instead of numbers
    expect(validateNISS(12345678910)).toBe(false);  // number instead of string
    expect(validateNISS(null)).toBe(false); // null value
    expect(validateNISS('')).toBe(false); // empty value
    expect(validateNISS(undefined)).toBe(false); // undefined value
});
