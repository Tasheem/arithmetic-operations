const add = (num1, num2) => {
    const result = num1 + num2;
    console.log(`Add: ${result}`);
    return result;
}

const subtract = (num1, num2) => {
    const result = num1 - num2;
    console.log(`Subtract: ${result}`);
    return result;
}

const multiply = (num1, num2) => {
    const result = num1 * num2;
    console.log(`Multiply: ${result}`);
    return result;
}

const combo = (num1, num2) => {
    const sum = add(num1, num2);
    const difference = subtract(num1, num2);

    /*
    * ((A + B) + (A - B) * (A - B))
    * The assumption here is that "function #2" mentioned
    * in the assignment description refers to the subtract
    * function.
    * */
    const result = add(sum, multiply(difference, difference));
    console.log(`Combo: ${result}`);
    return result;
}

const concat = (str1, str2) => {
    const result = str1 + str2;
    console.log(`Concat: ${result}`);
    return result;
}

const isValidType = (num1, num2) => {
    return !isNaN(num1) && !isNaN(num2);
}

// Display output of operation in the card.
const displayResult = (event) => {
    const button = event.target;
    const card = button.parentElement;
    const outputDiv = card.children[0];

    let [arg1, arg2] = getInputs(button);
    if(button.id === 'concat-btn') {
        outputDiv.textContent = concat(arg1, arg2);
        return;
    }

    // All logic below deals only with number functions.
    arg1 = Number(arg1);
    arg2 = Number(arg2);

    if(!isValidType(arg1, arg2)) {
        console.error('Two numbers must be provided.');
        outputDiv.textContent = '';
        return;
    }

    let result;
    if(button.id === 'add-btn')
        result = add(arg1, arg2);
    else if(button.id === 'subtract-btn')
        result = subtract(arg1, arg2);
    else if(button.id === 'multiply-btn')
        result = multiply(arg1, arg2);
    else if(button.id === 'combo-btn')
        result = combo(arg1, arg2);
    
    outputDiv.textContent = result;
}

// Add event listener to each button on the page.
// displayResult() is passed as the callback.
const runButtons = document.querySelectorAll('.run-btn');
runButtons.forEach(btn => {
    btn.addEventListener('click', displayResult);
});

// Get user input for specific fields associated with the clicked button/card.
const getInputs = (button) => {
    const card = button.parentElement;
    const inputContainer = card.children[1];
    const arg1 = inputContainer.children[0].value;
    const arg2 = inputContainer.children[1].value;

    return [arg1, arg2];
}
