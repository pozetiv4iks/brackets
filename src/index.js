
module.exports = function check(str, bracketsConfig) {
    const stack = [];
    const openingBrackets = bracketsConfig.map(pair => pair[0]);
    const closingBrackets = bracketsConfig.map(pair => pair[1]);
    const matchingBrackets = Object.fromEntries(bracketsConfig);

    for (let bracket of str) {
        if (openingBrackets.includes(bracket)) {
            if (closingBrackets.includes(bracket) && stack.length > 0 && stack[stack.length - 1] === bracket) {
                stack.pop();
            } else {
                stack.push(bracket);
            }
        } else {
            if (stack.length === 0 || matchingBrackets[stack.pop()] !== bracket) {
                return false;
            }
        }
    }

    return stack.length === 0;
}