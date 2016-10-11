function FizzBuzz(n) {
    var answer = ''

    for (var i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            answer += 'fizzbuzz'
        }
        else if (i % 3 === 0) {
            answer += 'fizz'
        }
        else if (i % 5 === 0){
            answer += 'buzz'
        }
        else {
            answer += '.'
        }

    }
    return answer
}


// function FizzBuzz(n) {
//     for (var i = 1; i = n; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             answer = 'fizzbuzz'
//         }
//         else if (i % 3 === 0) {
//             answer += 'fizz'
//         }
// }
