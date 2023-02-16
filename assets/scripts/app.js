const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput(){
    return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber){
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);   

}

function writeToLog(
    operationIdentifier,
     prevResult, 
     operationNumber,
      newResult){
    const logEntry = {
        operation : operationIdentifier,
        prevResult : prevResult,
        number : operationNumber,
        result : newResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

function add( ){
    const enterNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult  +=  enterNumber;
    createAndWriteOutput('+', initialResult, enterNumber);
    writeToLog('ADD',initialResult, enterNumber, currentResult);
}
function subtract() {
    const enterNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult -= enterNumber;
    createAndWriteOutput('-', initialResult, enterNumber);
    writeToLog('SUBTRACT',initialResult, enterNumber, currentResult);

}

function multiply(){
    const enterNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult *= enterNumber;
    createAndWriteOutput('*', initialResult, enterNumber);
    writeToLog('MULTIPLY',initialResult, enterNumber, currentResult);

}

function divide(){
    const enterNumber = getUserNumberInput();
    const initialResult = currentResult;

    currentResult  /= enterNumber;
    createAndWriteOutput('/', initialResult, enterNumber);
    writeToLog('DIVIDE',initialResult, enterNumber, currentResult);

}


addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
subtractBtn.addEventListener("click", multiply);
subtractBtn.addEventListener("click", divide);

