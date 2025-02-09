// Step 1: Get references to the display and buttons
const display = document.querySelector('.display'); // This selects the display div where the result will be shown
const buttons = document.querySelectorAll('#button-container button'); // This selects all the buttons inside the button container

let currentInput = ''; // This will store the current input (numbers and operators)
let operator = null; // This will store the current operator (+, -, *, /, %)
let previousInput = ''; // This will store the previous input (the first number in the calculation)

// Step 2: Add event listeners to all buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value'); // Get the value of the button that was clicked

        // Step 3: Handle different button clicks
        if (value === 'clear') {
            // If the "clear" button is clicked, reset everything
            currentInput = '';
            previousInput = '';
            operator = null;
            display.textContent = '0'; // Reset the display to 0
        } else if (value === '=') {
            // If the "=" button is clicked, perform the calculation
            if (operator && currentInput !== '' && previousInput !== '') {
                const result = calculate(previousInput, currentInput, operator); // Calculate the result
                display.textContent = result; // Show the result on the display
                currentInput = result; // Store the result as the current input for further calculations
                previousInput = '';
                operator = null;
            }
        } else if (['+', '-', '*', '/', '%'].includes(value)) {
            // If an operator button is clicked, store the current input and operator
            if (currentInput !== '') {
                previousInput = currentInput;
                currentInput = '';
                operator = value;
            }
        } else {
            // If a number button is clicked, add it to the current input
            currentInput += value;
            display.textContent = currentInput; // Update the display with the current input
        }
    });
});

// Step 4: Function to perform calculations
function calculate(num1, num2, operator) {
    num1 = parseFloat(num1); // Convert the string to a number
    num2 = parseFloat(num2); // Convert the string to a number

    switch (operator) {
        case '+':
            return num1 + num2; // Add the numbers
        case '-':
            return num1 - num2; // Subtract the numbers
        case '*':
            return num1 * num2; // Multiply the numbers
        case '/':
            return num1 / num2; // Divide the numbers
        case '%':
            return num1 % num2; // Get the remainder of the division
        default:
            return 0; // If no operator is found, return 0
    }
}