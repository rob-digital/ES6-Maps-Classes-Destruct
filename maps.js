// ####################################################
// 5. maps
//
// ####################################################
console.log('####################################################')

        const question = new Map()

        question.set('question', 'who is the best?')     //define key value pair -> key and value
        question.set(1, 'RTS')
        question.set(2, 'Me')
        question.set(3, 'You')
        question.set('correct', 2)
        question.set(true, 'Correct Answer!')
        question.set(false, 'Wrong Answer!')

console.log(question)
console.log(question.get('question'))
console.log(question.size)

// if (question.has(3)) {
//     question.delete(3)
// }
console.log('------------------------------------');   // very good: from and spread operator
console.log(Array.from(question)[2]);                                        //! Array from
console.log([...question][2]);
console.log('------------------------------------');
//-------------------------------------------------------------------------------------------
if(question.get('correct') === [...question][2][0] ){
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
    console.log(question.get(true));
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
}
//-------------------------------------------------------------------------------------------
question.forEach((value, key) =>                    // you can loop through Map
    console.log(`the key is: ${key}, and its value: ${value}`)
)
//-------------------------------------------------------------------------------------------
for (let key of question) {
    console.log(key[0])
}
//-------------------------------------------------------------------------------------------
for (let [key, value] of question.entries()){
    if(typeof(key) === 'number')  {
        console.log(`Answer ${key}: ${value}`);
    }
}
//-------------------------------------------------------------------------------------------

const ans = parseInt(prompt(question.get('question')))

console.log(question.get(ans === question.get('correct')))