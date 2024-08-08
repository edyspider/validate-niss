function validateNISS(value) {
    // Check if it is null
    if (value === null) {
        return false;
    }

    // Check if the input is exactly 11 characters long and contains only digits
    if (!/^\d{11}$/.test(value)) {
        return false;
    }

    // Check first digit
    if (value[0] !== '1') {
        return false;
    }

    // Ensure the input is a string
    if (typeof value !== 'string') {
        return false;
    }

    // Set calculation variables
    factor = ['29', '23', '19', '17', '13', '11', '7', '5', '3', '2'];
    let calcArr = [];
    let calc;

    // Factor calculation
    for (i = 0; i < 10; i++) {
        calcArr[i] = value[i] * factor[i];
        calc += calcArr[i];
    }

    // Calculate MOD 10
    const mod10 = (Number(calc) % 10);
    
    //Calculate check digit
    const checkSum = 9 - mod10;

    // Compare calculated check digit with the provided one
    return checkSum === value[10];
}

module.exports = validateNISS;
