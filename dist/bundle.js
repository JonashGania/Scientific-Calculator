/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
            console.log(formula_str);
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxPQUFPO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTix1QkFBdUIsYUFBYTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLFdBQVc7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFVBQVUsRUFBQzs7Ozs7OztVQzlhMUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ04yQztBQUNNO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSwwREFBWTtBQUN4QixnREFBZ0QsNERBQVU7QUFDMUQ7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLDJDQUEyQztBQUMxRCxlQUFlLDJDQUEyQztBQUMxRCxlQUFlLDJDQUEyQztBQUMxRCxlQUFlLDJDQUEyQztBQUMxRCxlQUFlLDJDQUEyQztBQUMxRCxlQUFlLDJDQUEyQztBQUMxRCxlQUFlLDJDQUEyQztBQUMxRCxlQUFlLDJDQUEyQztBQUMxRCxlQUFlLDJDQUEyQztBQUMxRCxlQUFlLDJDQUEyQztBQUMxRCxlQUFlLDZDQUE2QztBQUM1RCxlQUFlLDZDQUE2QztBQUM1RCxlQUFlLDZDQUE2QztBQUM1RCxlQUFlLDZDQUE2QztBQUM1RCxlQUFlLDZDQUE2QztBQUM1RCxtQkFBbUIsbUJBQW1CO0FBQ3RDLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw0REFBVTtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2NpZW50aWZpYy1jYWxjdWxhdG9yLy4vc3JjL2NhbGN1bGF0b3JMb2dpYy5qcyIsIndlYnBhY2s6Ly9zY2llbnRpZmljLWNhbGN1bGF0b3Ivd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc2NpZW50aWZpYy1jYWxjdWxhdG9yL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zY2llbnRpZmljLWNhbGN1bGF0b3Ivd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zY2llbnRpZmljLWNhbGN1bGF0b3Ivd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zY2llbnRpZmljLWNhbGN1bGF0b3IvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgT3BlcmF0b3JzID0gWycrJywgJy0nLCAnKicsICcvJ107XHJcbmNvbnN0IFBPV0VSID0gXCJQT1dFUihcIiwgRkFDVE9SSUFMID0gXCJGQUNUT1JJQUxcIjtcclxuXHJcbmxldCBjYWxjdUJ1dHRvbnMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ3NpbicsXHJcbiAgICAgICAgc3ltYm9sOiAnc2luJyxcclxuICAgICAgICBmb3JtdWxhOiAndHJpZ28oTWF0aC5zaW4sJyxcclxuICAgICAgICB0eXBlOiAndHJpZ29ub21ldHJ5J1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnY29zJyxcclxuICAgICAgICBzeW1ib2w6ICdjb3MnLFxyXG4gICAgICAgIGZvcm11bGE6ICd0cmlnbyhNYXRoLmNvcywnLFxyXG4gICAgICAgIHR5cGU6ICd0cmlnb25vbWV0cnknXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICd0YW4nLFxyXG4gICAgICAgIHN5bWJvbDogJ3RhbicsXHJcbiAgICAgICAgZm9ybXVsYTogJ3RyaWdvKE1hdGgudGFuLCcsXHJcbiAgICAgICAgdHlwZTogJ3RyaWdvbm9tZXRyeSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ29wZW4tcGFyZW50aGVzaXMnLFxyXG4gICAgICAgIHN5bWJvbDogJygnLFxyXG4gICAgICAgIGZvcm11bGE6ICcoJyxcclxuICAgICAgICB0eXBlOiAnbnVtYmVyJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnY2xvc2UtcGFyZW50aGVzaXMnLFxyXG4gICAgICAgIHN5bWJvbDogJyknLFxyXG4gICAgICAgIGZvcm11bGE6ICcpJyxcclxuICAgICAgICB0eXBlOiAnbnVtYmVyJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnbG9nJyxcclxuICAgICAgICBzeW1ib2w6ICdsb2cnLFxyXG4gICAgICAgIGZvcm11bGE6ICdNYXRoLmxvZzEwJyxcclxuICAgICAgICB0eXBlOiAnbWF0aF9mdW5jdGlvbidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ2ZhY3RvcmlhbCcsXHJcbiAgICAgICAgc3ltYm9sOiAnIScsXHJcbiAgICAgICAgZm9ybXVsYTogRkFDVE9SSUFMLFxyXG4gICAgICAgIHR5cGU6ICdtYXRoX2Z1bmN0aW9uJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnc3F1YXJlLXJvb3QnLFxyXG4gICAgICAgIHN5bWJvbDogJ+KImicsXHJcbiAgICAgICAgZm9ybXVsYTogJ01hdGguc3FydCcsXHJcbiAgICAgICAgdHlwZTogJ21hdGhfZnVuY3Rpb24nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdzcXVhcmUnLFxyXG4gICAgICAgIHN5bWJvbDogJ3jCsicsXHJcbiAgICAgICAgZm9ybXVsYTogUE9XRVIsXHJcbiAgICAgICAgdHlwZTogJ21hdGhfZnVuY3Rpb24nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdwb3dlcicsXHJcbiAgICAgICAgc3ltYm9sOiAneDxzdXA+eTwvc3VwPicsXHJcbiAgICAgICAgZm9ybXVsYTogUE9XRVIsXHJcbiAgICAgICAgdHlwZTogJ21hdGhfZnVuY3Rpb24nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdzZXZlbicsXHJcbiAgICAgICAgc3ltYm9sOiA3LFxyXG4gICAgICAgIGZvcm11bGE6IDcsXHJcbiAgICAgICAgdHlwZTogJ251bWJlcidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ2VpZ2h0JyxcclxuICAgICAgICBzeW1ib2w6IDgsXHJcbiAgICAgICAgZm9ybXVsYTogOCxcclxuICAgICAgICB0eXBlOiAnbnVtYmVyJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnbmluZScsXHJcbiAgICAgICAgc3ltYm9sOiA5LFxyXG4gICAgICAgIGZvcm11bGE6IDksXHJcbiAgICAgICAgdHlwZTogJ251bWJlcidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ2RlbGV0ZScsXHJcbiAgICAgICAgc3ltYm9sOiAnREVMJyxcclxuICAgICAgICBmb3JtdWxhOiBmYWxzZSxcclxuICAgICAgICB0eXBlOiAna2V5J1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnYWxsLWNsZWFyJyxcclxuICAgICAgICBzeW1ib2w6ICdBQycsXHJcbiAgICAgICAgZm9ybXVsYTogZmFsc2UsXHJcbiAgICAgICAgdHlwZTogJ2tleSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ2ZvdXInLFxyXG4gICAgICAgIHN5bWJvbDogNCxcclxuICAgICAgICBmb3JtdWxhOiA0LFxyXG4gICAgICAgIHR5cGU6ICdudW1iZXInXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdmaXZlJyxcclxuICAgICAgICBzeW1ib2w6IDUsXHJcbiAgICAgICAgZm9ybXVsYTogNSxcclxuICAgICAgICB0eXBlOiAnbnVtYmVyJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnc2l4JyxcclxuICAgICAgICBzeW1ib2w6IDYsXHJcbiAgICAgICAgZm9ybXVsYTogNixcclxuICAgICAgICB0eXBlOiAnbnVtYmVyJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnbXVsdGlwbGljYXRpb24nLFxyXG4gICAgICAgIHN5bWJvbDogJ8OXJyxcclxuICAgICAgICBmb3JtdWxhOiAnKicsXHJcbiAgICAgICAgdHlwZTogJ29wZXJhdG9yJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnZGl2aXNpb24nLFxyXG4gICAgICAgIHN5bWJvbDogJ8O3JyxcclxuICAgICAgICBmb3JtdWxhOiAnLycsXHJcbiAgICAgICAgdHlwZTogJ29wZXJhdG9yJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnb25lJyxcclxuICAgICAgICBzeW1ib2w6IDEsXHJcbiAgICAgICAgZm9ybXVsYTogMSxcclxuICAgICAgICB0eXBlOiAnbnVtYmVyJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAndHdvJyxcclxuICAgICAgICBzeW1ib2w6IDIsXHJcbiAgICAgICAgZm9ybXVsYTogMixcclxuICAgICAgICB0eXBlOiAnbnVtYmVyJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAndGhyZWUnLFxyXG4gICAgICAgIHN5bWJvbDogMyxcclxuICAgICAgICBmb3JtdWxhOiAzLFxyXG4gICAgICAgIHR5cGU6ICdudW1iZXInXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdhZGRpdGlvbicsXHJcbiAgICAgICAgc3ltYm9sOiAnKycsXHJcbiAgICAgICAgZm9ybXVsYTogJysnLFxyXG4gICAgICAgIHR5cGU6ICdvcGVyYXRvcidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ3N1YnRyYWN0aW9uJyxcclxuICAgICAgICBzeW1ib2w6ICctJyxcclxuICAgICAgICBmb3JtdWxhOiAnLScsXHJcbiAgICAgICAgdHlwZTogJ29wZXJhdG9yJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnemVybycsXHJcbiAgICAgICAgc3ltYm9sOiAwLFxyXG4gICAgICAgIGZvcm11bGE6IDAsXHJcbiAgICAgICAgdHlwZTogJ251bWJlcidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ3BpJyxcclxuICAgICAgICBzeW1ib2w6ICfPgCcsXHJcbiAgICAgICAgZm9ybXVsYTogJ01hdGguUEknLFxyXG4gICAgICAgIHR5cGU6ICdudW1iZXInXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdwZXJjZW50JyxcclxuICAgICAgICBzeW1ib2w6ICclJyxcclxuICAgICAgICBmb3JtdWxhOiAnLzEwMCcsXHJcbiAgICAgICAgdHlwZTogJ251bWJlcidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ2RvdCcsXHJcbiAgICAgICAgc3ltYm9sOiAnLicsXHJcbiAgICAgICAgZm9ybXVsYTogJy4nLFxyXG4gICAgICAgIHR5cGU6ICdudW1iZXInXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdlcXVhbCcsXHJcbiAgICAgICAgc3ltYm9sOiAnPScsXHJcbiAgICAgICAgZm9ybXVsYTogJz0nLFxyXG4gICAgICAgIHR5cGU6ICdjYWxjdWxhdGUnXHJcbiAgICB9XHJcbl1cclxuXHJcbmxldCBjYWxjdURhdGEgPSB7XHJcbiAgICBvcGVyYXRpb246IFtdLFxyXG4gICAgZm9ybXVsYTogW11cclxufVxyXG5cclxuLy8gQ2FsY3VsYXRvciBidXR0b24gY2xpY2sgZnVuY3Rpb25cclxuZnVuY3Rpb24gY2FsY3VsYXRvcihidXR0b24pe1xyXG4gICAgaWYoYnV0dG9uLnR5cGUgPT09ICdvcGVyYXRvcicpe1xyXG4gICAgICAgIGNhbGN1RGF0YS5vcGVyYXRpb24ucHVzaCgnICcgKyBidXR0b24uc3ltYm9sICsgJyAnKTtcclxuICAgICAgICBjYWxjdURhdGEuZm9ybXVsYS5wdXNoKGJ1dHRvbi5mb3JtdWxhKTtcclxuICAgIH0gZWxzZSBpZiAoYnV0dG9uLnR5cGUgPT09ICd0cmlnb25vbWV0cnknKXtcclxuICAgICAgICBjYWxjdURhdGEub3BlcmF0aW9uLnB1c2goYnV0dG9uLnN5bWJvbCArICcoJyk7XHJcbiAgICAgICAgY2FsY3VEYXRhLmZvcm11bGEucHVzaChidXR0b24uZm9ybXVsYSk7XHJcbiAgICB9IGVsc2UgaWYgKGJ1dHRvbi50eXBlID09PSAnbnVtYmVyJyl7XHJcblxyXG4gICAgICAgIGNhbGN1RGF0YS5vcGVyYXRpb24ucHVzaChidXR0b24uc3ltYm9sKTtcclxuICAgICAgICBjYWxjdURhdGEuZm9ybXVsYS5wdXNoKGJ1dHRvbi5mb3JtdWxhKTtcclxuICAgIH0gZWxzZSBpZiAoYnV0dG9uLnR5cGUgPT09ICdtYXRoX2Z1bmN0aW9uJyl7XHJcbiAgICAgICAgbGV0IHN5bWJvbCwgZm9ybXVsYTtcclxuXHJcbiAgICAgICAgaWYoYnV0dG9uLm5hbWUgPT09ICdmYWN0b3JpYWwnKXtcclxuICAgICAgICAgICAgc3ltYm9sID0gJyEnO1xyXG4gICAgICAgICAgICBmb3JtdWxhID0gYnV0dG9uLmZvcm11bGE7XHJcbiAgICAgICAgICAgIGNhbGN1RGF0YS5vcGVyYXRpb24ucHVzaChzeW1ib2wpO1xyXG4gICAgICAgICAgICBjYWxjdURhdGEuZm9ybXVsYS5wdXNoKGZvcm11bGEpO1xyXG4gICAgICAgIH0gZWxzZSBpZihidXR0b24ubmFtZSA9PT0gJ3Bvd2VyJyl7XHJcbiAgICAgICAgICAgIHN5bWJvbCA9ICdeKCc7XHJcbiAgICAgICAgICAgIGZvcm11bGEgPSBidXR0b24uZm9ybXVsYTtcclxuICAgICAgICAgICAgY2FsY3VEYXRhLm9wZXJhdGlvbi5wdXNoKHN5bWJvbCk7XHJcbiAgICAgICAgICAgIGNhbGN1RGF0YS5mb3JtdWxhLnB1c2goZm9ybXVsYSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChidXR0b24ubmFtZSA9PT0gJ3NxdWFyZScpe1xyXG4gICAgICAgICAgICBzeW1ib2wgPSAnXignO1xyXG4gICAgICAgICAgICBmb3JtdWxhID0gYnV0dG9uLmZvcm11bGE7XHJcbiAgICAgICAgICAgIGNhbGN1RGF0YS5vcGVyYXRpb24ucHVzaChzeW1ib2wpO1xyXG4gICAgICAgICAgICBjYWxjdURhdGEuZm9ybXVsYS5wdXNoKGZvcm11bGEpO1xyXG5cclxuICAgICAgICAgICAgY2FsY3VEYXRhLm9wZXJhdGlvbi5wdXNoKFwiMilcIik7XHJcbiAgICAgICAgICAgIGNhbGN1RGF0YS5mb3JtdWxhLnB1c2goXCIyKVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHN5bWJvbCA9IGJ1dHRvbi5zeW1ib2wgKyBcIihcIjtcclxuICAgICAgICAgICAgZm9ybXVsYSA9IGJ1dHRvbi5mb3JtdWxhICsgXCIoXCI7XHJcbiAgICAgICAgICAgIGNhbGN1RGF0YS5vcGVyYXRpb24ucHVzaChzeW1ib2wpO1xyXG4gICAgICAgICAgICBjYWxjdURhdGEuZm9ybXVsYS5wdXNoKGZvcm11bGEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9IGVsc2UgaWYgKGJ1dHRvbi50eXBlID09PSAna2V5Jyl7XHJcbiAgICAgICAgaWYoYnV0dG9uLm5hbWUgPT09ICdhbGwtY2xlYXInKXtcclxuICAgICAgICAgICAgY2FsY3VEYXRhLm9wZXJhdGlvbiA9IFtdO1xyXG4gICAgICAgICAgICBjYWxjdURhdGEuZm9ybXVsYSA9IFtdO1xyXG4gICAgICAgICAgICBzaG93T3V0cHV0UmVzdWx0KDApO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoYnV0dG9uLm5hbWUgPT09ICdkZWxldGUnKXtcclxuICAgICAgICAgICAgY2FsY3VEYXRhLm9wZXJhdGlvbi5wb3AoKTtcclxuICAgICAgICAgICAgY2FsY3VEYXRhLmZvcm11bGEucG9wKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChidXR0b24udHlwZSA9PT0gJ2NhbGN1bGF0ZScpe1xyXG4gICAgICAgIGxldCBmb3JtdWxhX3N0ciA9IGNhbGN1RGF0YS5mb3JtdWxhLmpvaW4oJycpLnRyaW0oKTtcclxuXHJcbiAgICAgICAgbGV0IHBvd2VyU2VhcmNoUmVzdWx0ID0gc2VhcmNoKGNhbGN1RGF0YS5mb3JtdWxhLCBQT1dFUik7XHJcbiAgICAgICAgbGV0IGZhY3RvcmlhbFNlYXJjaFJlc3VsdCA9IHNlYXJjaChjYWxjdURhdGEuZm9ybXVsYSwgRkFDVE9SSUFMKTtcclxuXHJcbiAgICAgICAgY29uc3QgcG93ZXJCYXNlID0gZ2V0UG93ZXJCYXNlKGNhbGN1RGF0YS5mb3JtdWxhLCBwb3dlclNlYXJjaFJlc3VsdCk7XHJcbiAgICAgICAgcG93ZXJCYXNlLmZvckVhY2goIGJhc2UgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdG9SZXBsYWNlID0gYmFzZSArIFBPV0VSO1xyXG4gICAgICAgICAgICBsZXQgcmVwbGFjZW1lbnQgPSBcIk1hdGgucG93KFwiICsgYmFzZSArIFwiLFwiO1xyXG4gICAgICAgICAgICBmb3JtdWxhX3N0ciA9IGZvcm11bGFfc3RyLnJlcGxhY2UodG9SZXBsYWNlLCByZXBsYWNlbWVudCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGZvcm11bGFfc3RyKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBjb25zdCBmYWN0b3JpYWxOdW0gPSBnZXRGYWN0b3JpYWxOdW1iZXIoY2FsY3VEYXRhLmZvcm11bGEsIGZhY3RvcmlhbFNlYXJjaFJlc3VsdCk7XHJcbiAgICAgICAgZmFjdG9yaWFsTnVtLmZvckVhY2goIGZhY3RvcmlhbCA9PiB7XHJcbiAgICAgICAgICAgIGZvcm11bGFfc3RyID0gZm9ybXVsYV9zdHIucmVwbGFjZShmYWN0b3JpYWwudG9SZXBsYWNlLCBmYWN0b3JpYWwucmVwbGFjZW1lbnQpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGxldCByZXN1bHQ7XHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICByZXN1bHQgPSBldmFsKGZvcm11bGFfc3RyKTtcclxuICAgICAgICAgICAgY2FsY3VEYXRhLm9wZXJhdGlvbiA9IFtdO1xyXG4gICAgICAgICAgICBjYWxjdURhdGEuZm9ybXVsYSA9IFtdO1xyXG4gICAgICAgICAgICBzaG93T3V0cHV0UmVzdWx0KHJlc3VsdCk7XHJcbiAgICAgICAgfSBjYXRjaChlcnJvcil7XHJcbiAgICAgICAgICAgIGlmKGVycm9yIGluc3RhbmNlb2YgU3ludGF4RXJyb3Ipe1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gXCJTeW50YXggRXJyb3JcIjtcclxuICAgICAgICAgICAgICAgIHNob3dPdXRwdXRSZXN1bHQocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzaG93T3VwdXRPcGVyYXRpb24oY2FsY3VEYXRhLm9wZXJhdGlvbi5qb2luKCcnKSk7XHJcbiAgICByZXR1cm47XHJcbn1cclxuXHJcblxyXG4vLyBTaG93IHRoZSBPdXRwdXQgb3BlcmF0aW9uL2Zvcm11bGFcclxuZnVuY3Rpb24gc2hvd091cHV0T3BlcmF0aW9uKG9wZXJhdGlvbil7XHJcbiAgICBjb25zdCBvdXRwdXRPcGVyYXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3V0cHV0LW9wZXJhdGlvbicpXHJcbiAgICBvdXRwdXRPcGVyYXRpb24udmFsdWUgPSBvcGVyYXRpb247XHJcbn1cclxuXHJcbi8vIFNob3cgdGhlIE91dHB1dCBSZXN1bHRcclxuZnVuY3Rpb24gc2hvd091dHB1dFJlc3VsdChyZXN1bHQpe1xyXG4gICAgY29uc3Qgb3V0cHV0UmVzdWx0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm91dHB1dC1yZXN1bHQnKTtcclxuICAgIG91dHB1dFJlc3VsdC5pbm5lckhUTUwgPSBgQW5zID0gJHtyZXN1bHR9YDtcclxufVxyXG5cclxuXHJcbi8vVHJpZ29ub21ldHJpYyBGdW5jdGlvblxyXG5mdW5jdGlvbiB0cmlnbyhjYWxsYmFjaywgYW5nbGUpe1xyXG4gICAgcmV0dXJuIGNhbGxiYWNrKGFuZ2xlKTtcclxufVxyXG5cclxuLy9GYWN0b3JpYWwgRnVuY3Rpb25cclxuZnVuY3Rpb24gZmFjdG9yaWFsKG51bWJlcil7XHJcbiAgICBsZXQgYW5zd2VyID0gMTtcclxuXHJcbiAgICBpZihudW1iZXIgJSAxICE9IDApIHJldHVybiBnYW1tYShudW1iZXIgKyAxKTtcclxuICAgIGlmKG51bWJlciA9PT0gMCB8fCBudW1iZXIgPT09IDEpe1xyXG4gICAgICAgIHJldHVybiBhbnN3ZXJcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMTsgaSA8PSBudW1iZXI7IGkrKyl7XHJcbiAgICAgICAgICAgIGFuc3dlciAqPSBpO1xyXG4gICAgICAgICAgICBpZihhbnN3ZXIgPT09IEluZmluaXR5KSByZXR1cm4gSW5maW5pdHk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhbnN3ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIEdldCB0aGUgcG93ZXIgYmFzZSBhbmQgbW92ZSBpdHMgaW5kZXhcclxuZnVuY3Rpb24gZ2V0UG93ZXJCYXNlKGZvcm11bGEsIHBvd2VyU2VhcmNoUmVzdWx0KXtcclxuICAgIGxldCBwb3dlckJhc2VzID0gW107XHJcblxyXG4gICAgcG93ZXJTZWFyY2hSZXN1bHQuZm9yRWFjaCggcG93ZXJJbmRleCA9PiB7XHJcbiAgICAgICAgbGV0IGJhc2UgPSBbXTtcclxuICAgICAgICBsZXQgcGFyZW50aGVzZXNDb3VudCA9IDA7XHJcbiAgICAgICAgbGV0IHByZXZpb3VzSW5kZXggPSBwb3dlckluZGV4IC0gMTtcclxuXHJcbiAgICAgICAgd2hpbGUocHJldmlvdXNJbmRleCA+PSAwKXtcclxuICAgICAgICAgICAgaWYoZm9ybXVsYVtwcmV2aW91c0luZGV4XSA9PSBcIihcIikgcGFyZW50aGVzZXNDb3VudC0tO1xyXG4gICAgICAgICAgICBpZihmb3JtdWxhW3ByZXZpb3VzSW5kZXhdID09IFwiKVwiKSBwYXJlbnRoZXNlc0NvdW50Kys7XHJcblxyXG4gICAgICAgICAgICBsZXQgaXNPcGVyYXRvciA9IGZhbHNlO1xyXG4gICAgICAgICAgICBPcGVyYXRvcnMuZm9yRWFjaChvcGVyYXRvciA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihmb3JtdWxhW3ByZXZpb3VzSW5kZXhdID09PSBvcGVyYXRvcikgaXNPcGVyYXRvciA9IHRydWU7XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICBsZXQgaXNQb3dlciA9IGZvcm11bGFbcHJldmlvdXNJbmRleF0gPT09IFBPV0VSO1xyXG4gICAgICAgICAgICBpZigoaXNPcGVyYXRvciAmJiBwYXJlbnRoZXNlc0NvdW50ID09PSAwKSB8fCBpc1Bvd2VyKSBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGJhc2UudW5zaGlmdChmb3JtdWxhW3ByZXZpb3VzSW5kZXhdKTtcclxuICAgICAgICAgICAgcHJldmlvdXNJbmRleC0tO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwb3dlckJhc2VzLnB1c2goYmFzZS5qb2luKCcnKSk7XHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiBwb3dlckJhc2VzO1xyXG59XHJcblxyXG5cclxuLy8gR2V0IHRoZSBmYWN0b3JpYWwgbnVtYmVyIGFuZCBtb3ZlIHRoZSBudW1iZXIgaW5kZXhcclxuZnVuY3Rpb24gZ2V0RmFjdG9yaWFsTnVtYmVyKGZvcm11bGEsIGZhY3RvcmlhbFNlYXJjaFJlc3VsdCl7XHJcbiAgICBsZXQgbnVtYmVycyA9IFtdO1xyXG4gICAgbGV0IGZhY3RvcmlhbFNlcXVlbmNlID0gMDtcclxuXHJcbiAgICBmYWN0b3JpYWxTZWFyY2hSZXN1bHQuZm9yRWFjaChmYWN0b3JpYWxJbmRleCA9PiB7XHJcbiAgICAgICAgbGV0IG51bSA9IFtdO1xyXG4gICAgICAgIGxldCBuZXh0SW5kZXggPSBmYWN0b3JpYWxJbmRleCArIDE7XHJcbiAgICAgICAgbGV0IG5leHRJbnB1dCA9IGZvcm11bGFbbmV4dEluZGV4XTtcclxuXHJcbiAgICAgICAgaWYobmV4dElucHV0ID09PSBGQUNUT1JJQUwpe1xyXG4gICAgICAgICAgICBmYWN0b3JpYWxTZXF1ZW5jZSArPSAxO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgZmlyc3RGYWN0b3JpYWxJbmRleCA9IGZhY3RvcmlhbEluZGV4IC0gZmFjdG9yaWFsU2VxdWVuY2U7XHJcbiAgICAgICAgbGV0IHByZXZJbmRleCA9IGZpcnN0RmFjdG9yaWFsSW5kZXggLSAxOyBcclxuICAgICAgICBsZXQgcGFyZW50aGVzZXNDb3VudCA9IDA7XHJcblxyXG4gICAgICAgIHdoaWxlKHByZXZJbmRleCA+PSAwKXtcclxuICAgICAgICAgICAgaWYoZm9ybXVsYVtwcmV2SW5kZXhdID09IFwiKFwiKSBwYXJlbnRoZXNlc0NvdW50LS07XHJcbiAgICAgICAgICAgIGlmKGZvcm11bGFbcHJldkluZGV4XSA9PSBcIilcIikgcGFyZW50aGVzZXNDb3VudCsrO1xyXG5cclxuICAgICAgICAgICAgbGV0IGlzT3BlcmF0b3IgPSBmYWxzZTtcclxuICAgICAgICAgICAgT3BlcmF0b3JzLmZvckVhY2gob3BlcmF0b3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoZm9ybXVsYVtwcmV2SW5kZXhdID09PSBvcGVyYXRvcikgaXNPcGVyYXRvciA9IHRydWU7XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICBpZihpc09wZXJhdG9yICYmIHBhcmVudGhlc2VzQ291bnQgPT09IDApIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgbnVtLnVuc2hpZnQoZm9ybXVsYVtwcmV2SW5kZXhdKTtcclxuICAgICAgICAgICAgcHJldkluZGV4LS07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgbnVtYmVyU3RyID0gbnVtLmpvaW4oJycpO1xyXG4gICAgICAgIGNvbnN0IGZhY3RvcmlhbCA9IFwiZmFjdG9yaWFsKFwiLCBjbG9zZVBhcmVudGhlc2lzID0gXCIpXCI7XHJcbiAgICAgICAgbGV0IHRpbWVzID0gZmFjdG9yaWFsU2VxdWVuY2UgKyAxO1xyXG4gICAgICAgIGxldCB0b1JlcGxhY2UgPSBudW1iZXJTdHIgKyBGQUNUT1JJQUwucmVwZWF0KHRpbWVzKTtcclxuICAgICAgICBsZXQgcmVwbGFjZW1lbnQgPSBmYWN0b3JpYWwucmVwZWF0KHRpbWVzKSArIG51bWJlclN0ciArIGNsb3NlUGFyZW50aGVzaXMucmVwZWF0KHRpbWVzKTtcclxuXHJcbiAgICAgICAgbnVtYmVycy5wdXNoKHtcclxuICAgICAgICAgICAgdG9SZXBsYWNlOiB0b1JlcGxhY2UsXHJcbiAgICAgICAgICAgIHJlcGxhY2VtZW50OiByZXBsYWNlbWVudFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGZhY3RvcmlhbFNlcXVlbmNlID0gMDtcclxuICAgIH0pXHJcbiAgICByZXR1cm4gbnVtYmVycztcclxufVxyXG5cclxuLy8gU2VhcmNoIGZvciBQT1dFUi9GQUNUT1JJQUwgaW4gdGhlIGFycmF5XHJcbmZ1bmN0aW9uIHNlYXJjaChhcnJheSwga2V5KXtcclxuICAgIGxldCBzZWFyY2hSZXN1bHQgPSBbXTtcclxuICAgIFxyXG4gICAgYXJyYXkuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcclxuICAgICAgICBpZihlbGVtZW50ID09PSBrZXkpe1xyXG4gICAgICAgICAgICBzZWFyY2hSZXN1bHQucHVzaChpbmRleCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gc2VhcmNoUmVzdWx0O1xyXG59XHJcblxyXG5cclxuLy8gR2FtbWEgRnVuY3Rpb25cclxuZnVuY3Rpb24gZ2FtbWEobikgeyAgXHJcbiAgICBcclxuICAgIHZhciBnID0gNyxcclxuICAgICAgICBwID0gWzAuOTk5OTk5OTk5OTk5ODA5OTMsIDY3Ni41MjAzNjgxMjE4ODUxLCAtMTI1OS4xMzkyMTY3MjI0MDI4LCA3NzEuMzIzNDI4Nzc3NjUzMTMsIC0xNzYuNjE1MDI5MTYyMTQwNTksIDEyLjUwNzM0MzI3ODY4NjkwNSwgLTAuMTM4NTcxMDk1MjY1NzIwMTIsIDkuOTg0MzY5NTc4MDE5NTcxNmUtNiwgMS41MDU2MzI3MzUxNDkzMTE2ZS03XTtcclxuICAgIGlmKG4gPCAwLjUpIHtcclxuICAgICAgcmV0dXJuIE1hdGguUEkgLyBNYXRoLnNpbihuICogTWF0aC5QSSkgLyBnYW1tYSgxIC0gbik7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgbi0tO1xyXG4gICAgICB2YXIgeCA9IHBbMF07XHJcbiAgICAgIGZvcih2YXIgaSA9IDE7IGkgPCBnICsgMjsgaSsrKSB7XHJcbiAgICAgICAgeCArPSBwW2ldIC8gKG4gKyBpKTtcclxuICAgICAgfVxyXG4gICAgICB2YXIgdCA9IG4gKyBnICsgMC41O1xyXG4gICAgICByZXR1cm4gTWF0aC5zcXJ0KDIgKiBNYXRoLlBJKSAqIE1hdGgucG93KHQsIChuICsgMC41KSkgKiBNYXRoLmV4cCgtdCkgKiB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2FsY3VsYXRvcjtcclxuZXhwb3J0IHsgY2FsY3VCdXR0b25zIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgY2FsY3VsYXRvciBmcm9tIFwiLi9jYWxjdWxhdG9yTG9naWNcIjtcclxuaW1wb3J0IHsgY2FsY3VCdXR0b25zIH0gZnJvbSBcIi4vY2FsY3VsYXRvckxvZ2ljXCI7XHJcblxyXG4vLyBCdXR0b25zIGNsaWNrIGV2ZW50XHJcbmZ1bmN0aW9uIG9uQnV0dG9uQ2xpY2soKXtcclxuICAgIGNvbnN0IGlucHV0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbnB1dCcpO1xyXG4gICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpO1xyXG5cclxuICAgIGlucHV0RWxlbWVudC5mb3JFYWNoKGlucHV0ID0+IHtcclxuICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0YXJnZXRCdG4gPSBldmVudC50YXJnZXQ7XHJcblxyXG4gICAgICAgICAgICBjYWxjdUJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoYnV0dG9uLm5hbWUgPT0gdGFyZ2V0QnRuLmlkKSBjYWxjdWxhdG9yKGJ1dHRvbik7XHJcblxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG5cclxuICAgIGJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xyXG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT4ge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbi5ibHVyKCk7XHJcbiAgICAgICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbn1cclxuXHJcbi8vIEtleWJvYXJkIGV2ZW50XHJcbmZ1bmN0aW9uIGhhbmRsZUtleWJvYXJkSW5wdXQoZXZlbnQpIHtcclxuICAgIGNvbnN0IGtleSA9IGV2ZW50LmtleTtcclxuICAgIFxyXG4gICAgY29uc3Qga2V5Ym9hcmRNYXBwaW5nID0ge1xyXG4gICAgICAgICcwJzogeyB0eXBlOiAnbnVtYmVyJywgc3ltYm9sOiAnMCcsIGZvcm11bGE6ICcwJyB9LFxyXG4gICAgICAgICcxJzogeyB0eXBlOiAnbnVtYmVyJywgc3ltYm9sOiAnMScsIGZvcm11bGE6ICcxJyB9LFxyXG4gICAgICAgICcyJzogeyB0eXBlOiAnbnVtYmVyJywgc3ltYm9sOiAnMicsIGZvcm11bGE6ICcyJyB9LFxyXG4gICAgICAgICczJzogeyB0eXBlOiAnbnVtYmVyJywgc3ltYm9sOiAnMycsIGZvcm11bGE6ICczJyB9LFxyXG4gICAgICAgICc0JzogeyB0eXBlOiAnbnVtYmVyJywgc3ltYm9sOiAnNCcsIGZvcm11bGE6ICc0JyB9LFxyXG4gICAgICAgICc1JzogeyB0eXBlOiAnbnVtYmVyJywgc3ltYm9sOiAnNScsIGZvcm11bGE6ICc1JyB9LFxyXG4gICAgICAgICc2JzogeyB0eXBlOiAnbnVtYmVyJywgc3ltYm9sOiAnNicsIGZvcm11bGE6ICc2JyB9LFxyXG4gICAgICAgICc3JzogeyB0eXBlOiAnbnVtYmVyJywgc3ltYm9sOiAnNycsIGZvcm11bGE6ICc3JyB9LFxyXG4gICAgICAgICc4JzogeyB0eXBlOiAnbnVtYmVyJywgc3ltYm9sOiAnOCcsIGZvcm11bGE6ICc4JyB9LFxyXG4gICAgICAgICc5JzogeyB0eXBlOiAnbnVtYmVyJywgc3ltYm9sOiAnOScsIGZvcm11bGE6ICc5JyB9LFxyXG4gICAgICAgICclJzogeyB0eXBlOiAnbnVtYmVyJywgc3ltYm9sOiAnJScsIGZvcm11bGE6ICcvMTAwJ30sXHJcbiAgICAgICAgJysnOiB7IHR5cGU6ICdvcGVyYXRvcicsIHN5bWJvbDogJysnLCBmb3JtdWxhOiAnKycgfSxcclxuICAgICAgICAnLSc6IHsgdHlwZTogJ29wZXJhdG9yJywgc3ltYm9sOiAnLScsIGZvcm11bGE6ICctJyB9LFxyXG4gICAgICAgICcqJzogeyB0eXBlOiAnb3BlcmF0b3InLCBzeW1ib2w6ICcqJywgZm9ybXVsYTogJyonIH0sXHJcbiAgICAgICAgJy8nOiB7IHR5cGU6ICdvcGVyYXRvcicsIHN5bWJvbDogJy8nLCBmb3JtdWxhOiAnLycgfSxcclxuICAgICAgICAnRW50ZXInOiB7IHR5cGU6ICdjYWxjdWxhdGUnIH0sXHJcbiAgICAgICAgJ0JhY2tzcGFjZSc6IHsgdHlwZTogJ2tleScsIG5hbWU6ICdkZWxldGUnIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgYnV0dG9uID0ga2V5Ym9hcmRNYXBwaW5nW2tleV07XHJcblxyXG4gICAgaWYgKGJ1dHRvbikge1xyXG4gICAgICAgIGNhbGN1bGF0b3IoYnV0dG9uKTtcclxuICAgIH1cclxufVxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZUtleWJvYXJkSW5wdXQpO1xyXG5vbkJ1dHRvbkNsaWNrKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==