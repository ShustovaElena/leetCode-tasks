/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    const values = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500, 
        M: 1000,
    };
    
    const numbers = Object.keys(values);
    
    const inputArray = s.split('');
    
    let result = 0;
    
    for (let i = 0; i <= inputArray.length - 1; i++) {
        if (numbers.indexOf(inputArray[i]) < numbers.indexOf(inputArray[i + 1])) {
            result -= values[inputArray[i]];
        } else {
            result += values[inputArray[i]];
        }
    }   
    
    return result;
};