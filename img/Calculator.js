// Array used to store valid calculation results
let validResults = [];

document.write("<h2>Calculation Results</h2>");

document.write("<table>");
document.write(
    "<tr>" +
    "<th>Number 1</th>" +
    "<th>Operator</th>" +
    "<th>Number 2</th>" +
    "<th>Result</th>" +
    "</tr>"
);

while (true) {

    // Get first number
    let xInput = prompt("Enter the first number (x):");

    if (xInput === null) {
        break;
    }

    // Get second number
    let yInput = prompt("Enter the second number (y):");

    if (yInput === null) {
        break;
    }

    // Get arithmetic operator
    let operator = prompt(
        "Enter an operator: +, -, *, /, or %"
    );

    if (operator === null) {
        break;
    }

    let x = Number(xInput);
    let y = Number(yInput);

    let result;

    // Check that x and y are numbers
    if (isNaN(x) || isNaN(y)) {

        result = "Error: Please enter numeric values.";

    } else {

        // Perform arithmetic operation
        if (operator === "+") {

            result = x + y;

        } else if (operator === "-") {

            result = x - y;

        } else if (operator === "*") {

            result = x * y;

        } else if (operator === "/") {

            if (y === 0) {
                result = "Error: Cannot divide by zero.";
            } else {
                result = x / y;
            }

        } else if (operator === "%") {

            if (y === 0) {
                result = "Error: Cannot divide by zero.";
            } else {
                result = x % y;
            }

        } else {

            result = "Error: Invalid operator.";
        }
    }

    // Display calculation as a table row
    document.write(
        "<tr>" +
        "<td>" + xInput + "</td>" +
        "<td>" + operator + "</td>" +
        "<td>" + yInput + "</td>" +
        "<td>" + result + "</td>" +
        "</tr>"
    );

    // Only save valid numeric results
    if (typeof result === "number") {
        validResults.push(result);
    }

    // Ask user whether to continue
    let continueCalculator = confirm(
        "Would you like to perform another calculation?"
    );

    if (continueCalculator === false) {
        break;
    }
}

document.write("</table>");


// Create summary table
document.write("<h2>Summary</h2>");

document.write("<table>");

document.write(
    "<tr>" +
    "<th>Minimum</th>" +
    "<th>Maximum</th>" +
    "<th>Average</th>" +
    "<th>Total</th>" +
    "</tr>"
);

if (validResults.length > 0) {

    let min = validResults[0];
    let max = validResults[0];
    let total = 0;

    for (let i = 0; i < validResults.length; i++) {

        total = total + validResults[i];

        if (validResults[i] < min) {
            min = validResults[i];
        }

        if (validResults[i] > max) {
            max = validResults[i];
        }
    }

    let average = total / validResults.length;

    document.write(
        "<tr>" +
        "<td>" + min + "</td>" +
        "<td>" + max + "</td>" +
        "<td>" + average + "</td>" +
        "<td>" + total + "</td>" +
        "</tr>"
    );

} else {

    document.write(
        "<tr>" +
        "<td colspan='4'>No valid results</td>" +
        "</tr>"
    );
}

document.write("</table>");
