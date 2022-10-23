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
    
}

const isValidType = (num1, num2) => {
    return !isNaN(num1) && !isNaN(num2);
}

// Display output of operation in the card.
const displayResult = (event) => {
    const button = event.target;
    const card = button.parentElement;
    const outputDiv = card.children[0];

    let [num1, num2] = getInputs(button);
    num1 = Number(num1);
    num2 = Number(num2);

    if(!isValidType(num1, num2)) {
        console.error('Two numbers must be provided.');
        outputDiv.textContent = '';
        return;
    }

    let result;
    if(button.id === 'add-btn')
        result = add(num1, num2);
    else if(button.id === 'subtract-btn')
        result = subtract(num1, num2);
    else if(button.id === 'multiply-btn')
        result = multiply(num1, num2);
    
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
    const num1 = inputContainer.children[0].value;
    const num2 = inputContainer.children[1].value;

    return [num1, num2];
}
