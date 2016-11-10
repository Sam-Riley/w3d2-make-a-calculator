function add(n1, n2) {
    return n1 + n2
}

function subtract(n1, n2) {
    return n1 - n2
}

function divide(n1, n2) {
    return n1 / n2
}

function multiply(n1, n2) {
    return n1 * n2
}
function calc(e) {
    var n1 = Number(document.getElementById('n1').value)
    var n2 = Number(document.getElementById('n2').value)
    var answer = ''



// IF/ELSE FUCTION
    if(e.target.value === '+') {
        answer = add(n1, n2)
    }
    else if(e.target.value === '-') {
        answer = subtract(n1, n2)
    }
    else if(e.target.value === '/') {
        answer = divide(n1, n2)
    }
    else if(e.target.value === '*') {
        answer = multiply(n1, n2)
    }

    // SWITCH FUNCTION (USE THIS OR THE IF/ELSE FUNCTION)
    // switch(e.target.value) {
    //     case '+'
    //         answer = add(n1, n2)
    //         break
    //     case '-'
    //         answer = subtract(n1, n2)
    //         break
    //     case '/'
    //         answer = divide(n1, n2)
    //         break
    //     case '*'
    //         answer = multiply(n1, n2)
    //         break
    // }



    document.getElementById('n1').value = answer
    document.getElementById('n2').value = ''     //PLACING THIS SO THE SECOND BOX DOESN;T RETURN AN ANSWER
}

document.querySelectorAll('.btn-calc').forEach(btnCalc => {
    btnCalc.addEventListener('click', calc)
})
