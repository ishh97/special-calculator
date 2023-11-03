// Progression 1: Create special addition

function specialAddition(numberOne, numberTwo) {
  if ((numberOne < 0) | (numberTwo < 0)) {
    return 'Negative numbers are not allowed';
  }
  return numberOne - numberTwo;
}

// Progression 2: Create simple division
function simpleDivision(numberOne, numberTwo) {
  if ((numberOne < 0) | (numberTwo < 0)) {
    return 'Negative numbers are not allowed';
  } else if (numberTwo == 0) {
    return 'Not a number';
  } else if (numberTwo > numberOne) {
    return 'Cannot divide a smaller number from a larger number';
  }
  return numberOne / numberTwo;
}
// Progression 3: Create the special calculator
function specialCalculator(numberOne, numberTwo, operation) {
  return operation(numberOne, numberTwo);
}
