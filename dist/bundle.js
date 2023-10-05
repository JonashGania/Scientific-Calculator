/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/calculatorCli.js":
/*!******************************!*\
  !*** ./src/calculatorCli.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function calculate(){
    while(true){
        console.log('0. exit\n1. add\n2. subtract\n3. multiply\n4. divide\n5. factorial\n6. power \n7. log\n8. square root \n9. sin\n10. cos\n11. tan')
        let userInput = prompt('Enter the number of the operation: ').toLowerCase();
        if(userInput === '0'){
            break;
        }
        
        switch(userInput){
            case '1':
                performCalculation(addition);
                break;
            case '2':
                performCalculation(subtraction);
                break;
            case '3':
                performCalculation(multiplication);
                break;
            case '4':
                performCalculation(division);
                break;
            case '5':
                factorial();
                break;
            case '6':
                performCalculation(power);
                break;
            case '7':
                logarithm();
                break;
            case '8':
                squareRoot();
                break;
            case '9':
                sin();
                break;
            case '10':
                cos();
                break;
            case '11':
                tan();
                break;
            default:
                console.log('Invalid operation. Please check your operation.\n')
        }
    }
}

function performCalculation(operation){
    const input1 = parseFloat(prompt('Enter first input: '));
    const input2 = parseFloat(prompt('Enter second input: '));
    
    const result = operation(input1,input2);
    console.log(`Result: ${result}\n`);
}


function addition(a, b){
    return a + b;
}

function subtraction(a, b){
    return a - b;
}

function multiplication(a, b){
    return a * b;
}

function division(a, b){
    if(b === 0){
        return 'Infinity';
    }
    return a / b
}

function factorial(){
    const input1 = parseFloat(prompt('Enter first input: '));
    
    let result = 1;
    if(input1 === 0 || input1 === 1){
        console.log('Result: ' + 1  + '\n');
    } else {
         for(let i = 2;i <= input1; i++){
            result *= i;
        }
        console.log(`Result: ${result} \n`);
    }
}

function power(a, b){
    return Math.pow(a,b);
}

function logarithm(){
    const input1 = parseFloat(prompt('Enter first input: '));
    
    let result = Math.log10(input1);
    console.log(`Result: ${result} \n`);
}

function squareRoot(){
    const input1 = parseFloat(prompt('Enter first input: '));
    
    let result = Math.sqrt(input1);
    console.log(`Result: ${result} \n`);
}

function sin(){
    const input1 = parseFloat(prompt('Enter first input: '));
    
    let result = Math.sin(input1);
    console.log(`Result: ${result} \n`);
}

function cos(){
    const input1 = parseFloat(prompt('Enter first input: '));
    
    let result = Math.cos(input1);
    console.log(`Result: ${result} \n`);
}

function tan(){
    const input1 = parseFloat(prompt('Enter first input: '));
    
    let result = Math.tan(input1);
    console.log(`Result: ${result} \n`); 
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculate);

/***/ }),

/***/ "./src/calculatorLogic.js":
/*!********************************!*\
  !*** ./src/calculatorLogic.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calcuButtons: () => (/* binding */ calcuButtons),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Operators = ['+', '-', '*', '/'];
const POWER = "POWER(", FACTORIAL = "FACTORIAL";

let calcuButtons = [
    {
        name: 'sin',
        symbol: 'sin',
        formula: 'trigo(Math.sin,',
        type: 'trigonometry'
    },
    {
        name: 'cos',
        symbol: 'cos',
        formula: 'trigo(Math.cos,',
        type: 'trigonometry'
    },
    {
        name: 'tan',
        symbol: 'tan',
        formula: 'trigo(Math.tan,',
        type: 'trigonometry'
    },
    {
        name: 'open-parenthesis',
        symbol: '(',
        formula: '(',
        type: 'number'
    },
    {
        name: 'close-parenthesis',
        symbol: ')',
        formula: ')',
        type: 'number'
    },
    {
        name: 'log',
        symbol: 'log',
        formula: 'Math.log10',
        type: 'math_function'
    },
    {
        name: 'factorial',
        symbol: '!',
        formula: FACTORIAL,
        type: 'math_function'
    },
    {
        name: 'square-root',
        symbol: '√',
        formula: 'Math.sqrt',
        type: 'math_function'
    },
    {
        name: 'square',
        symbol: 'x²',
        formula: POWER,
        type: 'math_function'
    },
    {
        name: 'power',
        symbol: 'x<sup>y</sup>',
        formula: POWER,
        type: 'math_function'
    },
    {
        name: 'seven',
        symbol: 7,
        formula: 7,
        type: 'number'
    },
    {
        name: 'eight',
        symbol: 8,
        formula: 8,
        type: 'number'
    },
    {
        name: 'nine',
        symbol: 9,
        formula: 9,
        type: 'number'
    },
    {
        name: 'delete',
        symbol: 'DEL',
        formula: false,
        type: 'key'
    },
    {
        name: 'all-clear',
        symbol: 'AC',
        formula: false,
        type: 'key'
    },
    {
        name: 'four',
        symbol: 4,
        formula: 4,
        type: 'number'
    },
    {
        name: 'five',
        symbol: 5,
        formula: 5,
        type: 'number'
    },
    {
        name: 'six',
        symbol: 6,
        formula: 6,
        type: 'number'
    },
    {
        name: 'multiplication',
        symbol: '×',
        formula: '*',
        type: 'operator'
    },
    {
        name: 'division',
        symbol: '÷',
        formula: '/',
        type: 'operator'
    },
    {
        name: 'one',
        symbol: 1,
        formula: 1,
        type: 'number'
    },
    {
        name: 'two',
        symbol: 2,
        formula: 2,
        type: 'number'
    },
    {
        name: 'three',
        symbol: 3,
        formula: 3,
        type: 'number'
    },
    {
        name: 'addition',
        symbol: '+',
        formula: '+',
        type: 'operator'
    },
    {
        name: 'subtraction',
        symbol: '-',
        formula: '-',
        type: 'operator'
    },
    {
        name: 'zero',
        symbol: 0,
        formula: 0,
        type: 'number'
    },
    {
        name: 'pi',
        symbol: 'π',
        formula: 'Math.PI',
        type: 'number'
    },
    {
        name: 'percent',
        symbol: '%',
        formula: '/100',
        type: 'number'
    },
    {
        name: 'dot',
        symbol: '.',
        formula: '.',
        type: 'number'
    },
    {
        name: 'equal',
        symbol: '=',
        formula: '=',
        type: 'calculate'
    }
]

let calcuData = {
    operation: [],
    formula: []
}

// Calculator button click function
function calculator(button){
    if(button.type === 'operator'){
        calcuData.operation.push(' ' + button.symbol + ' ');
        calcuData.formula.push(button.formula);
    } else if (button.type === 'trigonometry'){
        calcuData.operation.push(button.symbol + '(');
        calcuData.formula.push(button.formula);
    } else if (button.type === 'number'){

        calcuData.operation.push(button.symbol);
        calcuData.formula.push(button.formula);
    } else if (button.type === 'math_function'){
        let symbol, formula;

        if(button.name === 'factorial'){
            symbol = '!';
            formula = button.formula;
            calcuData.operation.push(symbol);
            calcuData.formula.push(formula);
        } else if(button.name === 'power'){
            symbol = '^(';
            formula = button.formula;
            calcuData.operation.push(symbol);
            calcuData.formula.push(formula);
        } else if (button.name === 'square'){
            symbol = '^(';
            formula = button.formula;
            calcuData.operation.push(symbol);
            calcuData.formula.push(formula);

            calcuData.operation.push("2)");
            calcuData.formula.push("2)");
        }
        
        else {
            symbol = button.symbol + "(";
            formula = button.formula + "(";
            calcuData.operation.push(symbol);
            calcuData.formula.push(formula);
        }

    } else if (button.type === 'key'){
        if(button.name === 'all-clear'){
            calcuData.operation = [];
            calcuData.formula = [];
            showOutputResult(0);
        } else if (button.name === 'delete'){
            calcuData.operation.pop();
            calcuData.formula.pop();
        }
    } else if (button.type === 'calculate'){
        let formula_str = calcuData.formula.join('').trim();

        let powerSearchResult = search(calcuData.formula, POWER);
        let factorialSearchResult = search(calcuData.formula, FACTORIAL);

        const powerBase = getPowerBase(calcuData.formula, powerSearchResult);
        powerBase.forEach( base => {
            let toReplace = base + POWER;
            let replacement = "Math.pow(" + base + ",";
            formula_str = formula_str.replace(toReplace, replacement);
        })

        const factorialNum = getFactorialNumber(calcuData.formula, factorialSearchResult);
        factorialNum.forEach( factorial => {
            formula_str = formula_str.replace(factorial.toReplace, factorial.replacement);
        })

        let result;
        try{
            result = eval(formula_str);
            calcuData.operation = [];
            calcuData.formula = [];
            showOutputResult(result);
        } catch(error){
            if(error instanceof SyntaxError){
                result = "Syntax Error";
                showOutputResult(result);
                return;
            }
        }
    }

    showOuputOperation(calcuData.operation.join(''));
    return;
}


// Show the Output operation/formula
function showOuputOperation(operation){
    const outputOperation = document.getElementById('output-operation')
    outputOperation.value = operation;
}

// Show the Output Result
function showOutputResult(result){
    const outputResult = document.querySelector('.output-result');
    outputResult.innerHTML = `Ans = ${result}`;
}


//Trigonometric Function
function trigo(callback, angle){
    return callback(angle);
}

//Factorial Function
function factorial(number){
    let answer = 1;

    if(number % 1 != 0) return gamma(number + 1);
    if(number === 0 || number === 1){
        return answer
    } else {
        for(let i = 1; i <= number; i++){
            answer *= i;
            if(answer === Infinity) return Infinity;
        }
        return answer;
    }
}

// Get the power base and move its index
function getPowerBase(formula, powerSearchResult){
    let powerBases = [];

    powerSearchResult.forEach( powerIndex => {
        let base = [];
        let parenthesesCount = 0;
        let previousIndex = powerIndex - 1;

        while(previousIndex >= 0){
            if(formula[previousIndex] == "(") parenthesesCount--;
            if(formula[previousIndex] == ")") parenthesesCount++;

            let isOperator = false;
            Operators.forEach(operator => {
                if(formula[previousIndex] === operator) isOperator = true;
            })

            let isPower = formula[previousIndex] === POWER;
            if((isOperator && parenthesesCount === 0) || isPower) break;

            base.unshift(formula[previousIndex]);
            previousIndex--;
        }
        powerBases.push(base.join(''));
    })

    return powerBases;
}


// Get the factorial number and move the number index
function getFactorialNumber(formula, factorialSearchResult){
    let numbers = [];
    let factorialSequence = 0;

    factorialSearchResult.forEach(factorialIndex => {
        let num = [];
        let nextIndex = factorialIndex + 1;
        let nextInput = formula[nextIndex];

        if(nextInput === FACTORIAL){
            factorialSequence += 1;
            return;
        }

        let firstFactorialIndex = factorialIndex - factorialSequence;
        let prevIndex = firstFactorialIndex - 1; 
        let parenthesesCount = 0;

        while(prevIndex >= 0){
            if(formula[prevIndex] == "(") parenthesesCount--;
            if(formula[prevIndex] == ")") parenthesesCount++;

            let isOperator = false;
            Operators.forEach(operator => {
                if(formula[prevIndex] === operator) isOperator = true;
            })

            if(isOperator && parenthesesCount === 0) break;

            num.unshift(formula[prevIndex]);
            prevIndex--;
        }

        let numberStr = num.join('');
        const factorial = "factorial(", closeParenthesis = ")";
        let times = factorialSequence + 1;
        let toReplace = numberStr + FACTORIAL.repeat(times);
        let replacement = factorial.repeat(times) + numberStr + closeParenthesis.repeat(times);

        numbers.push({
            toReplace: toReplace,
            replacement: replacement
        })

        factorialSequence = 0;
    })
    return numbers;
}

// Search for POWER/FACTORIAL in the array
function search(array, key){
    let searchResult = [];
    
    array.forEach((element, index) => {
        if(element === key){
            searchResult.push(index);
        }
    })

    return searchResult;
}


// Gamma Function
function gamma(n) {  
    
    var g = 7,
        p = [0.99999999999980993, 676.5203681218851, -1259.1392167224028, 771.32342877765313, -176.61502916214059, 12.507343278686905, -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7];
    if(n < 0.5) {
      return Math.PI / Math.sin(n * Math.PI) / gamma(1 - n);
    }
    else {
      n--;
      var x = p[0];
      for(var i = 1; i < g + 2; i++) {
        x += p[i] / (n + i);
      }
      var t = n + g + 0.5;
      return Math.sqrt(2 * Math.PI) * Math.pow(t, (n + 0.5)) * Math.exp(-t) * x;
    }
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculator);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _calculatorLogic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculatorLogic */ "./src/calculatorLogic.js");
/* harmony import */ var _calculatorCli__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calculatorCli */ "./src/calculatorCli.js");




// Buttons click event
function onButtonClick(){
    const inputElement = document.querySelectorAll('.input');
    const buttons = document.querySelectorAll('button');

    inputElement.forEach(input => {
        input.addEventListener('click', (event) => {
            const targetBtn = event.target;

            _calculatorLogic__WEBPACK_IMPORTED_MODULE_0__.calcuButtons.forEach(button => {
                if(button.name == targetBtn.id) (0,_calculatorLogic__WEBPACK_IMPORTED_MODULE_0__["default"])(button);

            })
        })
    })

    buttons.forEach(button => {
        button.addEventListener('click', ()=> {
            setTimeout(() => {
                button.blur();
            }, 100);
        })
    })
}

// Keyboard event
function handleKeyboardInput(event) {
    const key = event.key;
    
    const keyboardMapping = {
        '0': { type: 'number', symbol: '0', formula: '0' },
        '1': { type: 'number', symbol: '1', formula: '1' },
        '2': { type: 'number', symbol: '2', formula: '2' },
        '3': { type: 'number', symbol: '3', formula: '3' },
        '4': { type: 'number', symbol: '4', formula: '4' },
        '5': { type: 'number', symbol: '5', formula: '5' },
        '6': { type: 'number', symbol: '6', formula: '6' },
        '7': { type: 'number', symbol: '7', formula: '7' },
        '8': { type: 'number', symbol: '8', formula: '8' },
        '9': { type: 'number', symbol: '9', formula: '9' },
        '%': { type: 'number', symbol: '%', formula: '/100'},
        '+': { type: 'operator', symbol: '+', formula: '+' },
        '-': { type: 'operator', symbol: '-', formula: '-' },
        '*': { type: 'operator', symbol: '*', formula: '*' },
        '/': { type: 'operator', symbol: '/', formula: '/' },
        'Enter': { type: 'calculate' },
        'Backspace': { type: 'key', name: 'delete' }
    };

    const button = keyboardMapping[key];

    if (button) {
        (0,_calculatorLogic__WEBPACK_IMPORTED_MODULE_0__["default"])(button);
    }
}

document.addEventListener('keydown', handleKeyboardInput);
onButtonClick();
(0,_calculatorCli__WEBPACK_IMPORTED_MODULE_1__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixPQUFPO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLHVCQUF1QixhQUFhO0FBQ3BDO0FBQ0E7QUFDQSwrQkFBK0IsUUFBUTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLFFBQVE7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLFFBQVE7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLFFBQVE7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLFFBQVE7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLFFBQVE7QUFDbkM7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsU0FBUzs7Ozs7Ozs7Ozs7Ozs7O0FDbEl4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLE9BQU87QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLHVCQUF1QixhQUFhO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsV0FBVztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsVUFBVSxFQUFDOzs7Ozs7O1VDN2ExQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ04yQztBQUNNO0FBQ1Q7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDBEQUFZO0FBQ3hCLGdEQUFnRCw0REFBVTtBQUMxRDtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsMkNBQTJDO0FBQzFELGVBQWUsMkNBQTJDO0FBQzFELGVBQWUsMkNBQTJDO0FBQzFELGVBQWUsMkNBQTJDO0FBQzFELGVBQWUsMkNBQTJDO0FBQzFELGVBQWUsMkNBQTJDO0FBQzFELGVBQWUsMkNBQTJDO0FBQzFELGVBQWUsMkNBQTJDO0FBQzFELGVBQWUsMkNBQTJDO0FBQzFELGVBQWUsMkNBQTJDO0FBQzFELGVBQWUsNkNBQTZDO0FBQzVELGVBQWUsNkNBQTZDO0FBQzVELGVBQWUsNkNBQTZDO0FBQzVELGVBQWUsNkNBQTZDO0FBQzVELGVBQWUsNkNBQTZDO0FBQzVELG1CQUFtQixtQkFBbUI7QUFDdEMsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDREQUFVO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBUyxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2NpZW50aWZpYy1jYWxjdWxhdG9yLy4vc3JjL2NhbGN1bGF0b3JDbGkuanMiLCJ3ZWJwYWNrOi8vc2NpZW50aWZpYy1jYWxjdWxhdG9yLy4vc3JjL2NhbGN1bGF0b3JMb2dpYy5qcyIsIndlYnBhY2s6Ly9zY2llbnRpZmljLWNhbGN1bGF0b3Ivd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc2NpZW50aWZpYy1jYWxjdWxhdG9yL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zY2llbnRpZmljLWNhbGN1bGF0b3Ivd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zY2llbnRpZmljLWNhbGN1bGF0b3Ivd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zY2llbnRpZmljLWNhbGN1bGF0b3IvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY2FsY3VsYXRlKCl7XHJcbiAgICB3aGlsZSh0cnVlKXtcclxuICAgICAgICBjb25zb2xlLmxvZygnMC4gZXhpdFxcbjEuIGFkZFxcbjIuIHN1YnRyYWN0XFxuMy4gbXVsdGlwbHlcXG40LiBkaXZpZGVcXG41LiBmYWN0b3JpYWxcXG42LiBwb3dlciBcXG43LiBsb2dcXG44LiBzcXVhcmUgcm9vdCBcXG45LiBzaW5cXG4xMC4gY29zXFxuMTEuIHRhbicpXHJcbiAgICAgICAgbGV0IHVzZXJJbnB1dCA9IHByb21wdCgnRW50ZXIgdGhlIG51bWJlciBvZiB0aGUgb3BlcmF0aW9uOiAnKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGlmKHVzZXJJbnB1dCA9PT0gJzAnKXtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHN3aXRjaCh1c2VySW5wdXQpe1xyXG4gICAgICAgICAgICBjYXNlICcxJzpcclxuICAgICAgICAgICAgICAgIHBlcmZvcm1DYWxjdWxhdGlvbihhZGRpdGlvbik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnMic6XHJcbiAgICAgICAgICAgICAgICBwZXJmb3JtQ2FsY3VsYXRpb24oc3VidHJhY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJzMnOlxyXG4gICAgICAgICAgICAgICAgcGVyZm9ybUNhbGN1bGF0aW9uKG11bHRpcGxpY2F0aW9uKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICc0JzpcclxuICAgICAgICAgICAgICAgIHBlcmZvcm1DYWxjdWxhdGlvbihkaXZpc2lvbik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnNSc6XHJcbiAgICAgICAgICAgICAgICBmYWN0b3JpYWwoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICc2JzpcclxuICAgICAgICAgICAgICAgIHBlcmZvcm1DYWxjdWxhdGlvbihwb3dlcik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnNyc6XHJcbiAgICAgICAgICAgICAgICBsb2dhcml0aG0oKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICc4JzpcclxuICAgICAgICAgICAgICAgIHNxdWFyZVJvb3QoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICc5JzpcclxuICAgICAgICAgICAgICAgIHNpbigpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJzEwJzpcclxuICAgICAgICAgICAgICAgIGNvcygpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJzExJzpcclxuICAgICAgICAgICAgICAgIHRhbigpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnSW52YWxpZCBvcGVyYXRpb24uIFBsZWFzZSBjaGVjayB5b3VyIG9wZXJhdGlvbi5cXG4nKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcGVyZm9ybUNhbGN1bGF0aW9uKG9wZXJhdGlvbil7XHJcbiAgICBjb25zdCBpbnB1dDEgPSBwYXJzZUZsb2F0KHByb21wdCgnRW50ZXIgZmlyc3QgaW5wdXQ6ICcpKTtcclxuICAgIGNvbnN0IGlucHV0MiA9IHBhcnNlRmxvYXQocHJvbXB0KCdFbnRlciBzZWNvbmQgaW5wdXQ6ICcpKTtcclxuICAgIFxyXG4gICAgY29uc3QgcmVzdWx0ID0gb3BlcmF0aW9uKGlucHV0MSxpbnB1dDIpO1xyXG4gICAgY29uc29sZS5sb2coYFJlc3VsdDogJHtyZXN1bHR9XFxuYCk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBhZGRpdGlvbihhLCBiKXtcclxuICAgIHJldHVybiBhICsgYjtcclxufVxyXG5cclxuZnVuY3Rpb24gc3VidHJhY3Rpb24oYSwgYil7XHJcbiAgICByZXR1cm4gYSAtIGI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG11bHRpcGxpY2F0aW9uKGEsIGIpe1xyXG4gICAgcmV0dXJuIGEgKiBiO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaXZpc2lvbihhLCBiKXtcclxuICAgIGlmKGIgPT09IDApe1xyXG4gICAgICAgIHJldHVybiAnSW5maW5pdHknO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGEgLyBiXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZhY3RvcmlhbCgpe1xyXG4gICAgY29uc3QgaW5wdXQxID0gcGFyc2VGbG9hdChwcm9tcHQoJ0VudGVyIGZpcnN0IGlucHV0OiAnKSk7XHJcbiAgICBcclxuICAgIGxldCByZXN1bHQgPSAxO1xyXG4gICAgaWYoaW5wdXQxID09PSAwIHx8IGlucHV0MSA9PT0gMSl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1Jlc3VsdDogJyArIDEgICsgJ1xcbicpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAgZm9yKGxldCBpID0gMjtpIDw9IGlucHV0MTsgaSsrKXtcclxuICAgICAgICAgICAgcmVzdWx0ICo9IGk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGBSZXN1bHQ6ICR7cmVzdWx0fSBcXG5gKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcG93ZXIoYSwgYil7XHJcbiAgICByZXR1cm4gTWF0aC5wb3coYSxiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbG9nYXJpdGhtKCl7XHJcbiAgICBjb25zdCBpbnB1dDEgPSBwYXJzZUZsb2F0KHByb21wdCgnRW50ZXIgZmlyc3QgaW5wdXQ6ICcpKTtcclxuICAgIFxyXG4gICAgbGV0IHJlc3VsdCA9IE1hdGgubG9nMTAoaW5wdXQxKTtcclxuICAgIGNvbnNvbGUubG9nKGBSZXN1bHQ6ICR7cmVzdWx0fSBcXG5gKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3F1YXJlUm9vdCgpe1xyXG4gICAgY29uc3QgaW5wdXQxID0gcGFyc2VGbG9hdChwcm9tcHQoJ0VudGVyIGZpcnN0IGlucHV0OiAnKSk7XHJcbiAgICBcclxuICAgIGxldCByZXN1bHQgPSBNYXRoLnNxcnQoaW5wdXQxKTtcclxuICAgIGNvbnNvbGUubG9nKGBSZXN1bHQ6ICR7cmVzdWx0fSBcXG5gKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2luKCl7XHJcbiAgICBjb25zdCBpbnB1dDEgPSBwYXJzZUZsb2F0KHByb21wdCgnRW50ZXIgZmlyc3QgaW5wdXQ6ICcpKTtcclxuICAgIFxyXG4gICAgbGV0IHJlc3VsdCA9IE1hdGguc2luKGlucHV0MSk7XHJcbiAgICBjb25zb2xlLmxvZyhgUmVzdWx0OiAke3Jlc3VsdH0gXFxuYCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvcygpe1xyXG4gICAgY29uc3QgaW5wdXQxID0gcGFyc2VGbG9hdChwcm9tcHQoJ0VudGVyIGZpcnN0IGlucHV0OiAnKSk7XHJcbiAgICBcclxuICAgIGxldCByZXN1bHQgPSBNYXRoLmNvcyhpbnB1dDEpO1xyXG4gICAgY29uc29sZS5sb2coYFJlc3VsdDogJHtyZXN1bHR9IFxcbmApO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0YW4oKXtcclxuICAgIGNvbnN0IGlucHV0MSA9IHBhcnNlRmxvYXQocHJvbXB0KCdFbnRlciBmaXJzdCBpbnB1dDogJykpO1xyXG4gICAgXHJcbiAgICBsZXQgcmVzdWx0ID0gTWF0aC50YW4oaW5wdXQxKTtcclxuICAgIGNvbnNvbGUubG9nKGBSZXN1bHQ6ICR7cmVzdWx0fSBcXG5gKTsgXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjYWxjdWxhdGU7IiwiY29uc3QgT3BlcmF0b3JzID0gWycrJywgJy0nLCAnKicsICcvJ107XHJcbmNvbnN0IFBPV0VSID0gXCJQT1dFUihcIiwgRkFDVE9SSUFMID0gXCJGQUNUT1JJQUxcIjtcclxuXHJcbmxldCBjYWxjdUJ1dHRvbnMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ3NpbicsXHJcbiAgICAgICAgc3ltYm9sOiAnc2luJyxcclxuICAgICAgICBmb3JtdWxhOiAndHJpZ28oTWF0aC5zaW4sJyxcclxuICAgICAgICB0eXBlOiAndHJpZ29ub21ldHJ5J1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnY29zJyxcclxuICAgICAgICBzeW1ib2w6ICdjb3MnLFxyXG4gICAgICAgIGZvcm11bGE6ICd0cmlnbyhNYXRoLmNvcywnLFxyXG4gICAgICAgIHR5cGU6ICd0cmlnb25vbWV0cnknXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICd0YW4nLFxyXG4gICAgICAgIHN5bWJvbDogJ3RhbicsXHJcbiAgICAgICAgZm9ybXVsYTogJ3RyaWdvKE1hdGgudGFuLCcsXHJcbiAgICAgICAgdHlwZTogJ3RyaWdvbm9tZXRyeSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ29wZW4tcGFyZW50aGVzaXMnLFxyXG4gICAgICAgIHN5bWJvbDogJygnLFxyXG4gICAgICAgIGZvcm11bGE6ICcoJyxcclxuICAgICAgICB0eXBlOiAnbnVtYmVyJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnY2xvc2UtcGFyZW50aGVzaXMnLFxyXG4gICAgICAgIHN5bWJvbDogJyknLFxyXG4gICAgICAgIGZvcm11bGE6ICcpJyxcclxuICAgICAgICB0eXBlOiAnbnVtYmVyJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnbG9nJyxcclxuICAgICAgICBzeW1ib2w6ICdsb2cnLFxyXG4gICAgICAgIGZvcm11bGE6ICdNYXRoLmxvZzEwJyxcclxuICAgICAgICB0eXBlOiAnbWF0aF9mdW5jdGlvbidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ2ZhY3RvcmlhbCcsXHJcbiAgICAgICAgc3ltYm9sOiAnIScsXHJcbiAgICAgICAgZm9ybXVsYTogRkFDVE9SSUFMLFxyXG4gICAgICAgIHR5cGU6ICdtYXRoX2Z1bmN0aW9uJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnc3F1YXJlLXJvb3QnLFxyXG4gICAgICAgIHN5bWJvbDogJ+KImicsXHJcbiAgICAgICAgZm9ybXVsYTogJ01hdGguc3FydCcsXHJcbiAgICAgICAgdHlwZTogJ21hdGhfZnVuY3Rpb24nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdzcXVhcmUnLFxyXG4gICAgICAgIHN5bWJvbDogJ3jCsicsXHJcbiAgICAgICAgZm9ybXVsYTogUE9XRVIsXHJcbiAgICAgICAgdHlwZTogJ21hdGhfZnVuY3Rpb24nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdwb3dlcicsXHJcbiAgICAgICAgc3ltYm9sOiAneDxzdXA+eTwvc3VwPicsXHJcbiAgICAgICAgZm9ybXVsYTogUE9XRVIsXHJcbiAgICAgICAgdHlwZTogJ21hdGhfZnVuY3Rpb24nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdzZXZlbicsXHJcbiAgICAgICAgc3ltYm9sOiA3LFxyXG4gICAgICAgIGZvcm11bGE6IDcsXHJcbiAgICAgICAgdHlwZTogJ251bWJlcidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ2VpZ2h0JyxcclxuICAgICAgICBzeW1ib2w6IDgsXHJcbiAgICAgICAgZm9ybXVsYTogOCxcclxuICAgICAgICB0eXBlOiAnbnVtYmVyJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnbmluZScsXHJcbiAgICAgICAgc3ltYm9sOiA5LFxyXG4gICAgICAgIGZvcm11bGE6IDksXHJcbiAgICAgICAgdHlwZTogJ251bWJlcidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ2RlbGV0ZScsXHJcbiAgICAgICAgc3ltYm9sOiAnREVMJyxcclxuICAgICAgICBmb3JtdWxhOiBmYWxzZSxcclxuICAgICAgICB0eXBlOiAna2V5J1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnYWxsLWNsZWFyJyxcclxuICAgICAgICBzeW1ib2w6ICdBQycsXHJcbiAgICAgICAgZm9ybXVsYTogZmFsc2UsXHJcbiAgICAgICAgdHlwZTogJ2tleSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ2ZvdXInLFxyXG4gICAgICAgIHN5bWJvbDogNCxcclxuICAgICAgICBmb3JtdWxhOiA0LFxyXG4gICAgICAgIHR5cGU6ICdudW1iZXInXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdmaXZlJyxcclxuICAgICAgICBzeW1ib2w6IDUsXHJcbiAgICAgICAgZm9ybXVsYTogNSxcclxuICAgICAgICB0eXBlOiAnbnVtYmVyJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnc2l4JyxcclxuICAgICAgICBzeW1ib2w6IDYsXHJcbiAgICAgICAgZm9ybXVsYTogNixcclxuICAgICAgICB0eXBlOiAnbnVtYmVyJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnbXVsdGlwbGljYXRpb24nLFxyXG4gICAgICAgIHN5bWJvbDogJ8OXJyxcclxuICAgICAgICBmb3JtdWxhOiAnKicsXHJcbiAgICAgICAgdHlwZTogJ29wZXJhdG9yJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnZGl2aXNpb24nLFxyXG4gICAgICAgIHN5bWJvbDogJ8O3JyxcclxuICAgICAgICBmb3JtdWxhOiAnLycsXHJcbiAgICAgICAgdHlwZTogJ29wZXJhdG9yJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnb25lJyxcclxuICAgICAgICBzeW1ib2w6IDEsXHJcbiAgICAgICAgZm9ybXVsYTogMSxcclxuICAgICAgICB0eXBlOiAnbnVtYmVyJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAndHdvJyxcclxuICAgICAgICBzeW1ib2w6IDIsXHJcbiAgICAgICAgZm9ybXVsYTogMixcclxuICAgICAgICB0eXBlOiAnbnVtYmVyJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAndGhyZWUnLFxyXG4gICAgICAgIHN5bWJvbDogMyxcclxuICAgICAgICBmb3JtdWxhOiAzLFxyXG4gICAgICAgIHR5cGU6ICdudW1iZXInXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdhZGRpdGlvbicsXHJcbiAgICAgICAgc3ltYm9sOiAnKycsXHJcbiAgICAgICAgZm9ybXVsYTogJysnLFxyXG4gICAgICAgIHR5cGU6ICdvcGVyYXRvcidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ3N1YnRyYWN0aW9uJyxcclxuICAgICAgICBzeW1ib2w6ICctJyxcclxuICAgICAgICBmb3JtdWxhOiAnLScsXHJcbiAgICAgICAgdHlwZTogJ29wZXJhdG9yJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnemVybycsXHJcbiAgICAgICAgc3ltYm9sOiAwLFxyXG4gICAgICAgIGZvcm11bGE6IDAsXHJcbiAgICAgICAgdHlwZTogJ251bWJlcidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ3BpJyxcclxuICAgICAgICBzeW1ib2w6ICfPgCcsXHJcbiAgICAgICAgZm9ybXVsYTogJ01hdGguUEknLFxyXG4gICAgICAgIHR5cGU6ICdudW1iZXInXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdwZXJjZW50JyxcclxuICAgICAgICBzeW1ib2w6ICclJyxcclxuICAgICAgICBmb3JtdWxhOiAnLzEwMCcsXHJcbiAgICAgICAgdHlwZTogJ251bWJlcidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ2RvdCcsXHJcbiAgICAgICAgc3ltYm9sOiAnLicsXHJcbiAgICAgICAgZm9ybXVsYTogJy4nLFxyXG4gICAgICAgIHR5cGU6ICdudW1iZXInXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdlcXVhbCcsXHJcbiAgICAgICAgc3ltYm9sOiAnPScsXHJcbiAgICAgICAgZm9ybXVsYTogJz0nLFxyXG4gICAgICAgIHR5cGU6ICdjYWxjdWxhdGUnXHJcbiAgICB9XHJcbl1cclxuXHJcbmxldCBjYWxjdURhdGEgPSB7XHJcbiAgICBvcGVyYXRpb246IFtdLFxyXG4gICAgZm9ybXVsYTogW11cclxufVxyXG5cclxuLy8gQ2FsY3VsYXRvciBidXR0b24gY2xpY2sgZnVuY3Rpb25cclxuZnVuY3Rpb24gY2FsY3VsYXRvcihidXR0b24pe1xyXG4gICAgaWYoYnV0dG9uLnR5cGUgPT09ICdvcGVyYXRvcicpe1xyXG4gICAgICAgIGNhbGN1RGF0YS5vcGVyYXRpb24ucHVzaCgnICcgKyBidXR0b24uc3ltYm9sICsgJyAnKTtcclxuICAgICAgICBjYWxjdURhdGEuZm9ybXVsYS5wdXNoKGJ1dHRvbi5mb3JtdWxhKTtcclxuICAgIH0gZWxzZSBpZiAoYnV0dG9uLnR5cGUgPT09ICd0cmlnb25vbWV0cnknKXtcclxuICAgICAgICBjYWxjdURhdGEub3BlcmF0aW9uLnB1c2goYnV0dG9uLnN5bWJvbCArICcoJyk7XHJcbiAgICAgICAgY2FsY3VEYXRhLmZvcm11bGEucHVzaChidXR0b24uZm9ybXVsYSk7XHJcbiAgICB9IGVsc2UgaWYgKGJ1dHRvbi50eXBlID09PSAnbnVtYmVyJyl7XHJcblxyXG4gICAgICAgIGNhbGN1RGF0YS5vcGVyYXRpb24ucHVzaChidXR0b24uc3ltYm9sKTtcclxuICAgICAgICBjYWxjdURhdGEuZm9ybXVsYS5wdXNoKGJ1dHRvbi5mb3JtdWxhKTtcclxuICAgIH0gZWxzZSBpZiAoYnV0dG9uLnR5cGUgPT09ICdtYXRoX2Z1bmN0aW9uJyl7XHJcbiAgICAgICAgbGV0IHN5bWJvbCwgZm9ybXVsYTtcclxuXHJcbiAgICAgICAgaWYoYnV0dG9uLm5hbWUgPT09ICdmYWN0b3JpYWwnKXtcclxuICAgICAgICAgICAgc3ltYm9sID0gJyEnO1xyXG4gICAgICAgICAgICBmb3JtdWxhID0gYnV0dG9uLmZvcm11bGE7XHJcbiAgICAgICAgICAgIGNhbGN1RGF0YS5vcGVyYXRpb24ucHVzaChzeW1ib2wpO1xyXG4gICAgICAgICAgICBjYWxjdURhdGEuZm9ybXVsYS5wdXNoKGZvcm11bGEpO1xyXG4gICAgICAgIH0gZWxzZSBpZihidXR0b24ubmFtZSA9PT0gJ3Bvd2VyJyl7XHJcbiAgICAgICAgICAgIHN5bWJvbCA9ICdeKCc7XHJcbiAgICAgICAgICAgIGZvcm11bGEgPSBidXR0b24uZm9ybXVsYTtcclxuICAgICAgICAgICAgY2FsY3VEYXRhLm9wZXJhdGlvbi5wdXNoKHN5bWJvbCk7XHJcbiAgICAgICAgICAgIGNhbGN1RGF0YS5mb3JtdWxhLnB1c2goZm9ybXVsYSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChidXR0b24ubmFtZSA9PT0gJ3NxdWFyZScpe1xyXG4gICAgICAgICAgICBzeW1ib2wgPSAnXignO1xyXG4gICAgICAgICAgICBmb3JtdWxhID0gYnV0dG9uLmZvcm11bGE7XHJcbiAgICAgICAgICAgIGNhbGN1RGF0YS5vcGVyYXRpb24ucHVzaChzeW1ib2wpO1xyXG4gICAgICAgICAgICBjYWxjdURhdGEuZm9ybXVsYS5wdXNoKGZvcm11bGEpO1xyXG5cclxuICAgICAgICAgICAgY2FsY3VEYXRhLm9wZXJhdGlvbi5wdXNoKFwiMilcIik7XHJcbiAgICAgICAgICAgIGNhbGN1RGF0YS5mb3JtdWxhLnB1c2goXCIyKVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHN5bWJvbCA9IGJ1dHRvbi5zeW1ib2wgKyBcIihcIjtcclxuICAgICAgICAgICAgZm9ybXVsYSA9IGJ1dHRvbi5mb3JtdWxhICsgXCIoXCI7XHJcbiAgICAgICAgICAgIGNhbGN1RGF0YS5vcGVyYXRpb24ucHVzaChzeW1ib2wpO1xyXG4gICAgICAgICAgICBjYWxjdURhdGEuZm9ybXVsYS5wdXNoKGZvcm11bGEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9IGVsc2UgaWYgKGJ1dHRvbi50eXBlID09PSAna2V5Jyl7XHJcbiAgICAgICAgaWYoYnV0dG9uLm5hbWUgPT09ICdhbGwtY2xlYXInKXtcclxuICAgICAgICAgICAgY2FsY3VEYXRhLm9wZXJhdGlvbiA9IFtdO1xyXG4gICAgICAgICAgICBjYWxjdURhdGEuZm9ybXVsYSA9IFtdO1xyXG4gICAgICAgICAgICBzaG93T3V0cHV0UmVzdWx0KDApO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoYnV0dG9uLm5hbWUgPT09ICdkZWxldGUnKXtcclxuICAgICAgICAgICAgY2FsY3VEYXRhLm9wZXJhdGlvbi5wb3AoKTtcclxuICAgICAgICAgICAgY2FsY3VEYXRhLmZvcm11bGEucG9wKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChidXR0b24udHlwZSA9PT0gJ2NhbGN1bGF0ZScpe1xyXG4gICAgICAgIGxldCBmb3JtdWxhX3N0ciA9IGNhbGN1RGF0YS5mb3JtdWxhLmpvaW4oJycpLnRyaW0oKTtcclxuXHJcbiAgICAgICAgbGV0IHBvd2VyU2VhcmNoUmVzdWx0ID0gc2VhcmNoKGNhbGN1RGF0YS5mb3JtdWxhLCBQT1dFUik7XHJcbiAgICAgICAgbGV0IGZhY3RvcmlhbFNlYXJjaFJlc3VsdCA9IHNlYXJjaChjYWxjdURhdGEuZm9ybXVsYSwgRkFDVE9SSUFMKTtcclxuXHJcbiAgICAgICAgY29uc3QgcG93ZXJCYXNlID0gZ2V0UG93ZXJCYXNlKGNhbGN1RGF0YS5mb3JtdWxhLCBwb3dlclNlYXJjaFJlc3VsdCk7XHJcbiAgICAgICAgcG93ZXJCYXNlLmZvckVhY2goIGJhc2UgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdG9SZXBsYWNlID0gYmFzZSArIFBPV0VSO1xyXG4gICAgICAgICAgICBsZXQgcmVwbGFjZW1lbnQgPSBcIk1hdGgucG93KFwiICsgYmFzZSArIFwiLFwiO1xyXG4gICAgICAgICAgICBmb3JtdWxhX3N0ciA9IGZvcm11bGFfc3RyLnJlcGxhY2UodG9SZXBsYWNlLCByZXBsYWNlbWVudCk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgY29uc3QgZmFjdG9yaWFsTnVtID0gZ2V0RmFjdG9yaWFsTnVtYmVyKGNhbGN1RGF0YS5mb3JtdWxhLCBmYWN0b3JpYWxTZWFyY2hSZXN1bHQpO1xyXG4gICAgICAgIGZhY3RvcmlhbE51bS5mb3JFYWNoKCBmYWN0b3JpYWwgPT4ge1xyXG4gICAgICAgICAgICBmb3JtdWxhX3N0ciA9IGZvcm11bGFfc3RyLnJlcGxhY2UoZmFjdG9yaWFsLnRvUmVwbGFjZSwgZmFjdG9yaWFsLnJlcGxhY2VtZW50KTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBsZXQgcmVzdWx0O1xyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgcmVzdWx0ID0gZXZhbChmb3JtdWxhX3N0cik7XHJcbiAgICAgICAgICAgIGNhbGN1RGF0YS5vcGVyYXRpb24gPSBbXTtcclxuICAgICAgICAgICAgY2FsY3VEYXRhLmZvcm11bGEgPSBbXTtcclxuICAgICAgICAgICAgc2hvd091dHB1dFJlc3VsdChyZXN1bHQpO1xyXG4gICAgICAgIH0gY2F0Y2goZXJyb3Ipe1xyXG4gICAgICAgICAgICBpZihlcnJvciBpbnN0YW5jZW9mIFN5bnRheEVycm9yKXtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IFwiU3ludGF4IEVycm9yXCI7XHJcbiAgICAgICAgICAgICAgICBzaG93T3V0cHV0UmVzdWx0KHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd091cHV0T3BlcmF0aW9uKGNhbGN1RGF0YS5vcGVyYXRpb24uam9pbignJykpO1xyXG4gICAgcmV0dXJuO1xyXG59XHJcblxyXG5cclxuLy8gU2hvdyB0aGUgT3V0cHV0IG9wZXJhdGlvbi9mb3JtdWxhXHJcbmZ1bmN0aW9uIHNob3dPdXB1dE9wZXJhdGlvbihvcGVyYXRpb24pe1xyXG4gICAgY29uc3Qgb3V0cHV0T3BlcmF0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ291dHB1dC1vcGVyYXRpb24nKVxyXG4gICAgb3V0cHV0T3BlcmF0aW9uLnZhbHVlID0gb3BlcmF0aW9uO1xyXG59XHJcblxyXG4vLyBTaG93IHRoZSBPdXRwdXQgUmVzdWx0XHJcbmZ1bmN0aW9uIHNob3dPdXRwdXRSZXN1bHQocmVzdWx0KXtcclxuICAgIGNvbnN0IG91dHB1dFJlc3VsdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdXRwdXQtcmVzdWx0Jyk7XHJcbiAgICBvdXRwdXRSZXN1bHQuaW5uZXJIVE1MID0gYEFucyA9ICR7cmVzdWx0fWA7XHJcbn1cclxuXHJcblxyXG4vL1RyaWdvbm9tZXRyaWMgRnVuY3Rpb25cclxuZnVuY3Rpb24gdHJpZ28oY2FsbGJhY2ssIGFuZ2xlKXtcclxuICAgIHJldHVybiBjYWxsYmFjayhhbmdsZSk7XHJcbn1cclxuXHJcbi8vRmFjdG9yaWFsIEZ1bmN0aW9uXHJcbmZ1bmN0aW9uIGZhY3RvcmlhbChudW1iZXIpe1xyXG4gICAgbGV0IGFuc3dlciA9IDE7XHJcblxyXG4gICAgaWYobnVtYmVyICUgMSAhPSAwKSByZXR1cm4gZ2FtbWEobnVtYmVyICsgMSk7XHJcbiAgICBpZihudW1iZXIgPT09IDAgfHwgbnVtYmVyID09PSAxKXtcclxuICAgICAgICByZXR1cm4gYW5zd2VyXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDE7IGkgPD0gbnVtYmVyOyBpKyspe1xyXG4gICAgICAgICAgICBhbnN3ZXIgKj0gaTtcclxuICAgICAgICAgICAgaWYoYW5zd2VyID09PSBJbmZpbml0eSkgcmV0dXJuIEluZmluaXR5O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYW5zd2VyO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBHZXQgdGhlIHBvd2VyIGJhc2UgYW5kIG1vdmUgaXRzIGluZGV4XHJcbmZ1bmN0aW9uIGdldFBvd2VyQmFzZShmb3JtdWxhLCBwb3dlclNlYXJjaFJlc3VsdCl7XHJcbiAgICBsZXQgcG93ZXJCYXNlcyA9IFtdO1xyXG5cclxuICAgIHBvd2VyU2VhcmNoUmVzdWx0LmZvckVhY2goIHBvd2VySW5kZXggPT4ge1xyXG4gICAgICAgIGxldCBiYXNlID0gW107XHJcbiAgICAgICAgbGV0IHBhcmVudGhlc2VzQ291bnQgPSAwO1xyXG4gICAgICAgIGxldCBwcmV2aW91c0luZGV4ID0gcG93ZXJJbmRleCAtIDE7XHJcblxyXG4gICAgICAgIHdoaWxlKHByZXZpb3VzSW5kZXggPj0gMCl7XHJcbiAgICAgICAgICAgIGlmKGZvcm11bGFbcHJldmlvdXNJbmRleF0gPT0gXCIoXCIpIHBhcmVudGhlc2VzQ291bnQtLTtcclxuICAgICAgICAgICAgaWYoZm9ybXVsYVtwcmV2aW91c0luZGV4XSA9PSBcIilcIikgcGFyZW50aGVzZXNDb3VudCsrO1xyXG5cclxuICAgICAgICAgICAgbGV0IGlzT3BlcmF0b3IgPSBmYWxzZTtcclxuICAgICAgICAgICAgT3BlcmF0b3JzLmZvckVhY2gob3BlcmF0b3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoZm9ybXVsYVtwcmV2aW91c0luZGV4XSA9PT0gb3BlcmF0b3IpIGlzT3BlcmF0b3IgPSB0cnVlO1xyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgbGV0IGlzUG93ZXIgPSBmb3JtdWxhW3ByZXZpb3VzSW5kZXhdID09PSBQT1dFUjtcclxuICAgICAgICAgICAgaWYoKGlzT3BlcmF0b3IgJiYgcGFyZW50aGVzZXNDb3VudCA9PT0gMCkgfHwgaXNQb3dlcikgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBiYXNlLnVuc2hpZnQoZm9ybXVsYVtwcmV2aW91c0luZGV4XSk7XHJcbiAgICAgICAgICAgIHByZXZpb3VzSW5kZXgtLTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcG93ZXJCYXNlcy5wdXNoKGJhc2Uuam9pbignJykpO1xyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gcG93ZXJCYXNlcztcclxufVxyXG5cclxuXHJcbi8vIEdldCB0aGUgZmFjdG9yaWFsIG51bWJlciBhbmQgbW92ZSB0aGUgbnVtYmVyIGluZGV4XHJcbmZ1bmN0aW9uIGdldEZhY3RvcmlhbE51bWJlcihmb3JtdWxhLCBmYWN0b3JpYWxTZWFyY2hSZXN1bHQpe1xyXG4gICAgbGV0IG51bWJlcnMgPSBbXTtcclxuICAgIGxldCBmYWN0b3JpYWxTZXF1ZW5jZSA9IDA7XHJcblxyXG4gICAgZmFjdG9yaWFsU2VhcmNoUmVzdWx0LmZvckVhY2goZmFjdG9yaWFsSW5kZXggPT4ge1xyXG4gICAgICAgIGxldCBudW0gPSBbXTtcclxuICAgICAgICBsZXQgbmV4dEluZGV4ID0gZmFjdG9yaWFsSW5kZXggKyAxO1xyXG4gICAgICAgIGxldCBuZXh0SW5wdXQgPSBmb3JtdWxhW25leHRJbmRleF07XHJcblxyXG4gICAgICAgIGlmKG5leHRJbnB1dCA9PT0gRkFDVE9SSUFMKXtcclxuICAgICAgICAgICAgZmFjdG9yaWFsU2VxdWVuY2UgKz0gMTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGZpcnN0RmFjdG9yaWFsSW5kZXggPSBmYWN0b3JpYWxJbmRleCAtIGZhY3RvcmlhbFNlcXVlbmNlO1xyXG4gICAgICAgIGxldCBwcmV2SW5kZXggPSBmaXJzdEZhY3RvcmlhbEluZGV4IC0gMTsgXHJcbiAgICAgICAgbGV0IHBhcmVudGhlc2VzQ291bnQgPSAwO1xyXG5cclxuICAgICAgICB3aGlsZShwcmV2SW5kZXggPj0gMCl7XHJcbiAgICAgICAgICAgIGlmKGZvcm11bGFbcHJldkluZGV4XSA9PSBcIihcIikgcGFyZW50aGVzZXNDb3VudC0tO1xyXG4gICAgICAgICAgICBpZihmb3JtdWxhW3ByZXZJbmRleF0gPT0gXCIpXCIpIHBhcmVudGhlc2VzQ291bnQrKztcclxuXHJcbiAgICAgICAgICAgIGxldCBpc09wZXJhdG9yID0gZmFsc2U7XHJcbiAgICAgICAgICAgIE9wZXJhdG9ycy5mb3JFYWNoKG9wZXJhdG9yID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKGZvcm11bGFbcHJldkluZGV4XSA9PT0gb3BlcmF0b3IpIGlzT3BlcmF0b3IgPSB0cnVlO1xyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgaWYoaXNPcGVyYXRvciAmJiBwYXJlbnRoZXNlc0NvdW50ID09PSAwKSBicmVhaztcclxuXHJcbiAgICAgICAgICAgIG51bS51bnNoaWZ0KGZvcm11bGFbcHJldkluZGV4XSk7XHJcbiAgICAgICAgICAgIHByZXZJbmRleC0tO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IG51bWJlclN0ciA9IG51bS5qb2luKCcnKTtcclxuICAgICAgICBjb25zdCBmYWN0b3JpYWwgPSBcImZhY3RvcmlhbChcIiwgY2xvc2VQYXJlbnRoZXNpcyA9IFwiKVwiO1xyXG4gICAgICAgIGxldCB0aW1lcyA9IGZhY3RvcmlhbFNlcXVlbmNlICsgMTtcclxuICAgICAgICBsZXQgdG9SZXBsYWNlID0gbnVtYmVyU3RyICsgRkFDVE9SSUFMLnJlcGVhdCh0aW1lcyk7XHJcbiAgICAgICAgbGV0IHJlcGxhY2VtZW50ID0gZmFjdG9yaWFsLnJlcGVhdCh0aW1lcykgKyBudW1iZXJTdHIgKyBjbG9zZVBhcmVudGhlc2lzLnJlcGVhdCh0aW1lcyk7XHJcblxyXG4gICAgICAgIG51bWJlcnMucHVzaCh7XHJcbiAgICAgICAgICAgIHRvUmVwbGFjZTogdG9SZXBsYWNlLFxyXG4gICAgICAgICAgICByZXBsYWNlbWVudDogcmVwbGFjZW1lbnRcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBmYWN0b3JpYWxTZXF1ZW5jZSA9IDA7XHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIG51bWJlcnM7XHJcbn1cclxuXHJcbi8vIFNlYXJjaCBmb3IgUE9XRVIvRkFDVE9SSUFMIGluIHRoZSBhcnJheVxyXG5mdW5jdGlvbiBzZWFyY2goYXJyYXksIGtleSl7XHJcbiAgICBsZXQgc2VhcmNoUmVzdWx0ID0gW107XHJcbiAgICBcclxuICAgIGFycmF5LmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgaWYoZWxlbWVudCA9PT0ga2V5KXtcclxuICAgICAgICAgICAgc2VhcmNoUmVzdWx0LnB1c2goaW5kZXgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIHNlYXJjaFJlc3VsdDtcclxufVxyXG5cclxuXHJcbi8vIEdhbW1hIEZ1bmN0aW9uXHJcbmZ1bmN0aW9uIGdhbW1hKG4pIHsgIFxyXG4gICAgXHJcbiAgICB2YXIgZyA9IDcsXHJcbiAgICAgICAgcCA9IFswLjk5OTk5OTk5OTk5OTgwOTkzLCA2NzYuNTIwMzY4MTIxODg1MSwgLTEyNTkuMTM5MjE2NzIyNDAyOCwgNzcxLjMyMzQyODc3NzY1MzEzLCAtMTc2LjYxNTAyOTE2MjE0MDU5LCAxMi41MDczNDMyNzg2ODY5MDUsIC0wLjEzODU3MTA5NTI2NTcyMDEyLCA5Ljk4NDM2OTU3ODAxOTU3MTZlLTYsIDEuNTA1NjMyNzM1MTQ5MzExNmUtN107XHJcbiAgICBpZihuIDwgMC41KSB7XHJcbiAgICAgIHJldHVybiBNYXRoLlBJIC8gTWF0aC5zaW4obiAqIE1hdGguUEkpIC8gZ2FtbWEoMSAtIG4pO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIG4tLTtcclxuICAgICAgdmFyIHggPSBwWzBdO1xyXG4gICAgICBmb3IodmFyIGkgPSAxOyBpIDwgZyArIDI7IGkrKykge1xyXG4gICAgICAgIHggKz0gcFtpXSAvIChuICsgaSk7XHJcbiAgICAgIH1cclxuICAgICAgdmFyIHQgPSBuICsgZyArIDAuNTtcclxuICAgICAgcmV0dXJuIE1hdGguc3FydCgyICogTWF0aC5QSSkgKiBNYXRoLnBvdyh0LCAobiArIDAuNSkpICogTWF0aC5leHAoLXQpICogeDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNhbGN1bGF0b3I7XHJcbmV4cG9ydCB7IGNhbGN1QnV0dG9ucyB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGNhbGN1bGF0b3IgZnJvbSBcIi4vY2FsY3VsYXRvckxvZ2ljXCI7XHJcbmltcG9ydCB7IGNhbGN1QnV0dG9ucyB9IGZyb20gXCIuL2NhbGN1bGF0b3JMb2dpY1wiO1xyXG5pbXBvcnQgY2FsY3VsYXRlIGZyb20gXCIuL2NhbGN1bGF0b3JDbGlcIjtcclxuXHJcbi8vIEJ1dHRvbnMgY2xpY2sgZXZlbnRcclxuZnVuY3Rpb24gb25CdXR0b25DbGljaygpe1xyXG4gICAgY29uc3QgaW5wdXRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmlucHV0Jyk7XHJcbiAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJyk7XHJcblxyXG4gICAgaW5wdXRFbGVtZW50LmZvckVhY2goaW5wdXQgPT4ge1xyXG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldEJ0biA9IGV2ZW50LnRhcmdldDtcclxuXHJcbiAgICAgICAgICAgIGNhbGN1QnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihidXR0b24ubmFtZSA9PSB0YXJnZXRCdG4uaWQpIGNhbGN1bGF0b3IoYnV0dG9uKTtcclxuXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcblxyXG4gICAgYnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PiB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uLmJsdXIoKTtcclxuICAgICAgICAgICAgfSwgMTAwKTtcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxufVxyXG5cclxuLy8gS2V5Ym9hcmQgZXZlbnRcclxuZnVuY3Rpb24gaGFuZGxlS2V5Ym9hcmRJbnB1dChldmVudCkge1xyXG4gICAgY29uc3Qga2V5ID0gZXZlbnQua2V5O1xyXG4gICAgXHJcbiAgICBjb25zdCBrZXlib2FyZE1hcHBpbmcgPSB7XHJcbiAgICAgICAgJzAnOiB7IHR5cGU6ICdudW1iZXInLCBzeW1ib2w6ICcwJywgZm9ybXVsYTogJzAnIH0sXHJcbiAgICAgICAgJzEnOiB7IHR5cGU6ICdudW1iZXInLCBzeW1ib2w6ICcxJywgZm9ybXVsYTogJzEnIH0sXHJcbiAgICAgICAgJzInOiB7IHR5cGU6ICdudW1iZXInLCBzeW1ib2w6ICcyJywgZm9ybXVsYTogJzInIH0sXHJcbiAgICAgICAgJzMnOiB7IHR5cGU6ICdudW1iZXInLCBzeW1ib2w6ICczJywgZm9ybXVsYTogJzMnIH0sXHJcbiAgICAgICAgJzQnOiB7IHR5cGU6ICdudW1iZXInLCBzeW1ib2w6ICc0JywgZm9ybXVsYTogJzQnIH0sXHJcbiAgICAgICAgJzUnOiB7IHR5cGU6ICdudW1iZXInLCBzeW1ib2w6ICc1JywgZm9ybXVsYTogJzUnIH0sXHJcbiAgICAgICAgJzYnOiB7IHR5cGU6ICdudW1iZXInLCBzeW1ib2w6ICc2JywgZm9ybXVsYTogJzYnIH0sXHJcbiAgICAgICAgJzcnOiB7IHR5cGU6ICdudW1iZXInLCBzeW1ib2w6ICc3JywgZm9ybXVsYTogJzcnIH0sXHJcbiAgICAgICAgJzgnOiB7IHR5cGU6ICdudW1iZXInLCBzeW1ib2w6ICc4JywgZm9ybXVsYTogJzgnIH0sXHJcbiAgICAgICAgJzknOiB7IHR5cGU6ICdudW1iZXInLCBzeW1ib2w6ICc5JywgZm9ybXVsYTogJzknIH0sXHJcbiAgICAgICAgJyUnOiB7IHR5cGU6ICdudW1iZXInLCBzeW1ib2w6ICclJywgZm9ybXVsYTogJy8xMDAnfSxcclxuICAgICAgICAnKyc6IHsgdHlwZTogJ29wZXJhdG9yJywgc3ltYm9sOiAnKycsIGZvcm11bGE6ICcrJyB9LFxyXG4gICAgICAgICctJzogeyB0eXBlOiAnb3BlcmF0b3InLCBzeW1ib2w6ICctJywgZm9ybXVsYTogJy0nIH0sXHJcbiAgICAgICAgJyonOiB7IHR5cGU6ICdvcGVyYXRvcicsIHN5bWJvbDogJyonLCBmb3JtdWxhOiAnKicgfSxcclxuICAgICAgICAnLyc6IHsgdHlwZTogJ29wZXJhdG9yJywgc3ltYm9sOiAnLycsIGZvcm11bGE6ICcvJyB9LFxyXG4gICAgICAgICdFbnRlcic6IHsgdHlwZTogJ2NhbGN1bGF0ZScgfSxcclxuICAgICAgICAnQmFja3NwYWNlJzogeyB0eXBlOiAna2V5JywgbmFtZTogJ2RlbGV0ZScgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBidXR0b24gPSBrZXlib2FyZE1hcHBpbmdba2V5XTtcclxuXHJcbiAgICBpZiAoYnV0dG9uKSB7XHJcbiAgICAgICAgY2FsY3VsYXRvcihidXR0b24pO1xyXG4gICAgfVxyXG59XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlS2V5Ym9hcmRJbnB1dCk7XHJcbm9uQnV0dG9uQ2xpY2soKTtcclxuY2FsY3VsYXRlKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9