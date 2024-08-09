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
    if (value[0] === '0') {
        return false;
    }

    // Ensure the input is a string
    if (typeof value !== 'string') {
        return false;
    }

    // Set calculation variables
    factor = ['29', '23', '19', '17', '13', '11', '7', '5', '3', '2'];

    // Factor calculation
    calc = 0;
    for (i = 0; i < 10; i++) {
        calc += value[i] * factor[i];
    }

    // Calculate MOD 10
    const mod10 = calc % 10;
    
    //Calculate check digit
    const checkSum = 9 - mod10;

    // Compare calculated check digit with the provided one
    const checkDigit = (value % 10);
    return (checkSum === checkDigit);
}

function randomNISS()
{
    // Step 1: Generate the first 9 digits with the first digit being 1 or 2
    const firstDigit = Math.floor(Math.random() * 2) + 1; // Generates 1 or 2
    let niss = firstDigit.toString();

    for (let i = 1; i < 9; i++) {
        niss += Math.floor(Math.random() * 10).toString();
    }

    // Step 2: Set up the calculation variables
    const factor = [29, 23, 19, 17, 13, 11, 7, 5, 3, 2];
    let calc = 0;

    // Step 3: Calculate the 10th digit using the factor array
    for (let i = 0; i < 9; i++) {
        calc += parseInt(niss[i]) * factor[i];
    }

    // Step 4: Calculate MOD 10 and the checksum digit
    const mod10 = calc % 10;
    const checkSum = (9 - mod10) % 10;

    // Step 5: Append the checksum digit to get the 10-digit NISS number
    niss += checkSum.toString();

    // Step 6: Generate the last digit (check digit)
    let lastDigitCalc = 0;
    for (let i = 0; i < 10; i++) {
        lastDigitCalc += parseInt(niss[i]) * factor[i];
    }
    
    const lastMod10 = lastDigitCalc % 10;
    const lastCheckSum = (9 - lastMod10) % 10;

    // Step 7: Append the last digit
    niss += lastCheckSum.toString();

    return niss;
}

module.exports = { validateNISS, randomNISS };