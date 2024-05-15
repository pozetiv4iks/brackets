module.exports = function check(str, bracketsConfig) {
    const open_brackets = [];
    const close_brackets = {
    };
    let stack = [];
    for (let j = 0; j < bracketsConfig.length; j++){
        let bracketsConfig2 = bracketsConfig[j];
        for (let f = 0; f < bracketsConfig2.length; f++){

             if ( f % 2 === 0){
                 let key = bracketsConfig2[f+1];
                 close_brackets[key] = bracketsConfig2[f] ;
            } else {
                 open_brackets.push(bracketsConfig2[f-1]);
             }
         }
     }

     console.log( open_brackets );
     console.log( close_brackets );

    for (let i = 0; i < str.length; i++){
        let nn_bracket = str[i];

        if (open_brackets.includes(nn_bracket)){
            stack.push(nn_bracket);
        } else {
            if (stack.length === 0){
                return false;
            }
            
            let top_element = stack[stack.length - 1];

            

            if (close_brackets[nn_bracket] === top_element) {
              stack.pop()
            } else {
              return false;
            }
        }
    }
    return stack.length === 0;
}

