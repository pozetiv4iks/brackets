
// module.exports = function check(str, bracketsConfig) {
//     const open_brackets = [];
//     const close_brackets = {};
//     let stack = [];
//     for (let j = 0; j < bracketsConfig.length; j++) {
//         let bracketsConfig2 = bracketsConfig[j];
//         for (let f = 0; f < bracketsConfig2.length; f++) {
//             if (f % 2 === 0) {
//                 let key = bracketsConfig2[f+1];
//                 close_brackets[key] = bracketsConfig2[f];
//             } else {
//                 open_brackets.push(bracketsConfig2[f-1]);
//             }
//         }
//     }

//     console.log(open_brackets);
//     console.log(close_brackets);

//     for (let i = 0; i < str.length; i++) {
//         let nn_bracket = str[i];

//         if (open_brackets.includes(nn_bracket)) {
//             // Если встречается символ '|', учитывать его как и открывающую, и закрывающую скобку
//             if (nn_bracket === '|') {
//                 if (stack.length > 0 && stack[stack.length - 1] === '|') {
//                     stack.pop();
//                 } else {
//                     stack.push('|');
//                 }
//             } else {
//                 stack.push(nn_bracket);
//             }
//         } else {
//             if (stack.length === 0) {
//                 return false;
//             }

//             let top_element = stack[stack.length - 1];

//             if (close_brackets[nn_bracket] === top_element ||
//                 (nn_bracket === '|' && top_element === '|')) {
//                 stack.pop();
//             } else {
//                 return false;
//             }
//         }
//     }
//     return stack.length === 0;
// };

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