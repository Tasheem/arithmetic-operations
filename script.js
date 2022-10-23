const add = (num1, num2) => {
    if(!isValidType(num1, num2)) {
        console.log('Two numbers must be entered into the add() function.');
        return NaN;
    }

    const result = num1 + num2;
    console.log(result);
    return result;
}

const subtract = (num1, num2) => {
    if(!isValidType(num1, num2)) {
        console.log('Two numbers must be entered into the add() function.');
        return NaN;
    }

    const result = num1 - num2;
    console.log(result);
    return result;
}

const isValidType = (num1, num2) => {
    return typeof num1 === 'number' && typeof num2 === 'number';
}

const getInputs = (element) => {
    const parent = element.parentElement;
    const inputContainer = parent.children[1];
    const num1 = Number(inputContainer.children[0].value);
    const num2 = Number(inputContainer.children[1].value);

    return [num1, num2];
}

document.getElementById('add-btn').addEventListener('click',
(event) => {
    const userInputs = getInputs(event.target);
    const result = add(userInputs[0], userInputs[1]);

    const parent = event.target.parentElement;
    const outputDiv = parent.children[0];
    outputDiv.textContent = result;
});

document.getElementById('subtract-btn').addEventListener('click',
(event) => {
    const userInputs = getInputs(event.target);
    const result = subtract(userInputs[0], userInputs[1]);
    
    const parent = event.target.parentElement;
    const outputDiv = parent.children[0];
    outputDiv.textContent = result;
})