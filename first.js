// Select the input display
let display = document.getElementById("input");

// Select all buttons
let buttons = document.querySelectorAll("button");

// Variable to store the current input
let expression = "";

// Loop through each button
buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        let buttonValue = e.target.innerText;

        if (buttonValue === "AC") {
            // Clear display
            expression = "";
            display.value = "";
        } 
        else if (buttonValue === "=") {
            try {
                // Evaluate the expression
                expression = eval(expression);
                display.value = expression;
            } catch (error) {
                display.value = "Error";
                expression = "";
            }
        } 
        else {
            // Append the clicked button value to the expression
            expression += buttonValue;
            display.value = expression;
        }
    });
});
