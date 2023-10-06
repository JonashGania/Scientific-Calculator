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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsT0FBTztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sdUJBQXVCLGFBQWE7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixXQUFXO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxVQUFVLEVBQUM7Ozs7Ozs7VUM3YTFCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOMkM7QUFDTTtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksMERBQVk7QUFDeEIsZ0RBQWdELDREQUFVO0FBQzFEO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSwyQ0FBMkM7QUFDMUQsZUFBZSwyQ0FBMkM7QUFDMUQsZUFBZSwyQ0FBMkM7QUFDMUQsZUFBZSwyQ0FBMkM7QUFDMUQsZUFBZSwyQ0FBMkM7QUFDMUQsZUFBZSwyQ0FBMkM7QUFDMUQsZUFBZSwyQ0FBMkM7QUFDMUQsZUFBZSwyQ0FBMkM7QUFDMUQsZUFBZSwyQ0FBMkM7QUFDMUQsZUFBZSwyQ0FBMkM7QUFDMUQsZUFBZSw2Q0FBNkM7QUFDNUQsZUFBZSw2Q0FBNkM7QUFDNUQsZUFBZSw2Q0FBNkM7QUFDNUQsZUFBZSw2Q0FBNkM7QUFDNUQsZUFBZSw2Q0FBNkM7QUFDNUQsbUJBQW1CLG1CQUFtQjtBQUN0Qyx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsNERBQVU7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NjaWVudGlmaWMtY2FsY3VsYXRvci8uL3NyYy9jYWxjdWxhdG9yTG9naWMuanMiLCJ3ZWJwYWNrOi8vc2NpZW50aWZpYy1jYWxjdWxhdG9yL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NjaWVudGlmaWMtY2FsY3VsYXRvci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc2NpZW50aWZpYy1jYWxjdWxhdG9yL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc2NpZW50aWZpYy1jYWxjdWxhdG9yL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc2NpZW50aWZpYy1jYWxjdWxhdG9yLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IE9wZXJhdG9ycyA9IFsnKycsICctJywgJyonLCAnLyddO1xyXG5jb25zdCBQT1dFUiA9IFwiUE9XRVIoXCIsIEZBQ1RPUklBTCA9IFwiRkFDVE9SSUFMXCI7XHJcblxyXG5sZXQgY2FsY3VCdXR0b25zID0gW1xyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdzaW4nLFxyXG4gICAgICAgIHN5bWJvbDogJ3NpbicsXHJcbiAgICAgICAgZm9ybXVsYTogJ3RyaWdvKE1hdGguc2luLCcsXHJcbiAgICAgICAgdHlwZTogJ3RyaWdvbm9tZXRyeSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ2NvcycsXHJcbiAgICAgICAgc3ltYm9sOiAnY29zJyxcclxuICAgICAgICBmb3JtdWxhOiAndHJpZ28oTWF0aC5jb3MsJyxcclxuICAgICAgICB0eXBlOiAndHJpZ29ub21ldHJ5J1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAndGFuJyxcclxuICAgICAgICBzeW1ib2w6ICd0YW4nLFxyXG4gICAgICAgIGZvcm11bGE6ICd0cmlnbyhNYXRoLnRhbiwnLFxyXG4gICAgICAgIHR5cGU6ICd0cmlnb25vbWV0cnknXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdvcGVuLXBhcmVudGhlc2lzJyxcclxuICAgICAgICBzeW1ib2w6ICcoJyxcclxuICAgICAgICBmb3JtdWxhOiAnKCcsXHJcbiAgICAgICAgdHlwZTogJ251bWJlcidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ2Nsb3NlLXBhcmVudGhlc2lzJyxcclxuICAgICAgICBzeW1ib2w6ICcpJyxcclxuICAgICAgICBmb3JtdWxhOiAnKScsXHJcbiAgICAgICAgdHlwZTogJ251bWJlcidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ2xvZycsXHJcbiAgICAgICAgc3ltYm9sOiAnbG9nJyxcclxuICAgICAgICBmb3JtdWxhOiAnTWF0aC5sb2cxMCcsXHJcbiAgICAgICAgdHlwZTogJ21hdGhfZnVuY3Rpb24nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdmYWN0b3JpYWwnLFxyXG4gICAgICAgIHN5bWJvbDogJyEnLFxyXG4gICAgICAgIGZvcm11bGE6IEZBQ1RPUklBTCxcclxuICAgICAgICB0eXBlOiAnbWF0aF9mdW5jdGlvbidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ3NxdWFyZS1yb290JyxcclxuICAgICAgICBzeW1ib2w6ICfiiJonLFxyXG4gICAgICAgIGZvcm11bGE6ICdNYXRoLnNxcnQnLFxyXG4gICAgICAgIHR5cGU6ICdtYXRoX2Z1bmN0aW9uJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnc3F1YXJlJyxcclxuICAgICAgICBzeW1ib2w6ICd4wrInLFxyXG4gICAgICAgIGZvcm11bGE6IFBPV0VSLFxyXG4gICAgICAgIHR5cGU6ICdtYXRoX2Z1bmN0aW9uJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAncG93ZXInLFxyXG4gICAgICAgIHN5bWJvbDogJ3g8c3VwPnk8L3N1cD4nLFxyXG4gICAgICAgIGZvcm11bGE6IFBPV0VSLFxyXG4gICAgICAgIHR5cGU6ICdtYXRoX2Z1bmN0aW9uJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnc2V2ZW4nLFxyXG4gICAgICAgIHN5bWJvbDogNyxcclxuICAgICAgICBmb3JtdWxhOiA3LFxyXG4gICAgICAgIHR5cGU6ICdudW1iZXInXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdlaWdodCcsXHJcbiAgICAgICAgc3ltYm9sOiA4LFxyXG4gICAgICAgIGZvcm11bGE6IDgsXHJcbiAgICAgICAgdHlwZTogJ251bWJlcidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ25pbmUnLFxyXG4gICAgICAgIHN5bWJvbDogOSxcclxuICAgICAgICBmb3JtdWxhOiA5LFxyXG4gICAgICAgIHR5cGU6ICdudW1iZXInXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdkZWxldGUnLFxyXG4gICAgICAgIHN5bWJvbDogJ0RFTCcsXHJcbiAgICAgICAgZm9ybXVsYTogZmFsc2UsXHJcbiAgICAgICAgdHlwZTogJ2tleSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ2FsbC1jbGVhcicsXHJcbiAgICAgICAgc3ltYm9sOiAnQUMnLFxyXG4gICAgICAgIGZvcm11bGE6IGZhbHNlLFxyXG4gICAgICAgIHR5cGU6ICdrZXknXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdmb3VyJyxcclxuICAgICAgICBzeW1ib2w6IDQsXHJcbiAgICAgICAgZm9ybXVsYTogNCxcclxuICAgICAgICB0eXBlOiAnbnVtYmVyJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnZml2ZScsXHJcbiAgICAgICAgc3ltYm9sOiA1LFxyXG4gICAgICAgIGZvcm11bGE6IDUsXHJcbiAgICAgICAgdHlwZTogJ251bWJlcidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ3NpeCcsXHJcbiAgICAgICAgc3ltYm9sOiA2LFxyXG4gICAgICAgIGZvcm11bGE6IDYsXHJcbiAgICAgICAgdHlwZTogJ251bWJlcidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ211bHRpcGxpY2F0aW9uJyxcclxuICAgICAgICBzeW1ib2w6ICfDlycsXHJcbiAgICAgICAgZm9ybXVsYTogJyonLFxyXG4gICAgICAgIHR5cGU6ICdvcGVyYXRvcidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ2RpdmlzaW9uJyxcclxuICAgICAgICBzeW1ib2w6ICfDtycsXHJcbiAgICAgICAgZm9ybXVsYTogJy8nLFxyXG4gICAgICAgIHR5cGU6ICdvcGVyYXRvcidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ29uZScsXHJcbiAgICAgICAgc3ltYm9sOiAxLFxyXG4gICAgICAgIGZvcm11bGE6IDEsXHJcbiAgICAgICAgdHlwZTogJ251bWJlcidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ3R3bycsXHJcbiAgICAgICAgc3ltYm9sOiAyLFxyXG4gICAgICAgIGZvcm11bGE6IDIsXHJcbiAgICAgICAgdHlwZTogJ251bWJlcidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ3RocmVlJyxcclxuICAgICAgICBzeW1ib2w6IDMsXHJcbiAgICAgICAgZm9ybXVsYTogMyxcclxuICAgICAgICB0eXBlOiAnbnVtYmVyJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnYWRkaXRpb24nLFxyXG4gICAgICAgIHN5bWJvbDogJysnLFxyXG4gICAgICAgIGZvcm11bGE6ICcrJyxcclxuICAgICAgICB0eXBlOiAnb3BlcmF0b3InXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdzdWJ0cmFjdGlvbicsXHJcbiAgICAgICAgc3ltYm9sOiAnLScsXHJcbiAgICAgICAgZm9ybXVsYTogJy0nLFxyXG4gICAgICAgIHR5cGU6ICdvcGVyYXRvcidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ3plcm8nLFxyXG4gICAgICAgIHN5bWJvbDogMCxcclxuICAgICAgICBmb3JtdWxhOiAwLFxyXG4gICAgICAgIHR5cGU6ICdudW1iZXInXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdwaScsXHJcbiAgICAgICAgc3ltYm9sOiAnz4AnLFxyXG4gICAgICAgIGZvcm11bGE6ICdNYXRoLlBJJyxcclxuICAgICAgICB0eXBlOiAnbnVtYmVyJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAncGVyY2VudCcsXHJcbiAgICAgICAgc3ltYm9sOiAnJScsXHJcbiAgICAgICAgZm9ybXVsYTogJy8xMDAnLFxyXG4gICAgICAgIHR5cGU6ICdudW1iZXInXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdkb3QnLFxyXG4gICAgICAgIHN5bWJvbDogJy4nLFxyXG4gICAgICAgIGZvcm11bGE6ICcuJyxcclxuICAgICAgICB0eXBlOiAnbnVtYmVyJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnZXF1YWwnLFxyXG4gICAgICAgIHN5bWJvbDogJz0nLFxyXG4gICAgICAgIGZvcm11bGE6ICc9JyxcclxuICAgICAgICB0eXBlOiAnY2FsY3VsYXRlJ1xyXG4gICAgfVxyXG5dXHJcblxyXG5sZXQgY2FsY3VEYXRhID0ge1xyXG4gICAgb3BlcmF0aW9uOiBbXSxcclxuICAgIGZvcm11bGE6IFtdXHJcbn1cclxuXHJcbi8vIENhbGN1bGF0b3IgYnV0dG9uIGNsaWNrIGZ1bmN0aW9uXHJcbmZ1bmN0aW9uIGNhbGN1bGF0b3IoYnV0dG9uKXtcclxuICAgIGlmKGJ1dHRvbi50eXBlID09PSAnb3BlcmF0b3InKXtcclxuICAgICAgICBjYWxjdURhdGEub3BlcmF0aW9uLnB1c2goJyAnICsgYnV0dG9uLnN5bWJvbCArICcgJyk7XHJcbiAgICAgICAgY2FsY3VEYXRhLmZvcm11bGEucHVzaChidXR0b24uZm9ybXVsYSk7XHJcbiAgICB9IGVsc2UgaWYgKGJ1dHRvbi50eXBlID09PSAndHJpZ29ub21ldHJ5Jyl7XHJcbiAgICAgICAgY2FsY3VEYXRhLm9wZXJhdGlvbi5wdXNoKGJ1dHRvbi5zeW1ib2wgKyAnKCcpO1xyXG4gICAgICAgIGNhbGN1RGF0YS5mb3JtdWxhLnB1c2goYnV0dG9uLmZvcm11bGEpO1xyXG4gICAgfSBlbHNlIGlmIChidXR0b24udHlwZSA9PT0gJ251bWJlcicpe1xyXG5cclxuICAgICAgICBjYWxjdURhdGEub3BlcmF0aW9uLnB1c2goYnV0dG9uLnN5bWJvbCk7XHJcbiAgICAgICAgY2FsY3VEYXRhLmZvcm11bGEucHVzaChidXR0b24uZm9ybXVsYSk7XHJcbiAgICB9IGVsc2UgaWYgKGJ1dHRvbi50eXBlID09PSAnbWF0aF9mdW5jdGlvbicpe1xyXG4gICAgICAgIGxldCBzeW1ib2wsIGZvcm11bGE7XHJcblxyXG4gICAgICAgIGlmKGJ1dHRvbi5uYW1lID09PSAnZmFjdG9yaWFsJyl7XHJcbiAgICAgICAgICAgIHN5bWJvbCA9ICchJztcclxuICAgICAgICAgICAgZm9ybXVsYSA9IGJ1dHRvbi5mb3JtdWxhO1xyXG4gICAgICAgICAgICBjYWxjdURhdGEub3BlcmF0aW9uLnB1c2goc3ltYm9sKTtcclxuICAgICAgICAgICAgY2FsY3VEYXRhLmZvcm11bGEucHVzaChmb3JtdWxhKTtcclxuICAgICAgICB9IGVsc2UgaWYoYnV0dG9uLm5hbWUgPT09ICdwb3dlcicpe1xyXG4gICAgICAgICAgICBzeW1ib2wgPSAnXignO1xyXG4gICAgICAgICAgICBmb3JtdWxhID0gYnV0dG9uLmZvcm11bGE7XHJcbiAgICAgICAgICAgIGNhbGN1RGF0YS5vcGVyYXRpb24ucHVzaChzeW1ib2wpO1xyXG4gICAgICAgICAgICBjYWxjdURhdGEuZm9ybXVsYS5wdXNoKGZvcm11bGEpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoYnV0dG9uLm5hbWUgPT09ICdzcXVhcmUnKXtcclxuICAgICAgICAgICAgc3ltYm9sID0gJ14oJztcclxuICAgICAgICAgICAgZm9ybXVsYSA9IGJ1dHRvbi5mb3JtdWxhO1xyXG4gICAgICAgICAgICBjYWxjdURhdGEub3BlcmF0aW9uLnB1c2goc3ltYm9sKTtcclxuICAgICAgICAgICAgY2FsY3VEYXRhLmZvcm11bGEucHVzaChmb3JtdWxhKTtcclxuXHJcbiAgICAgICAgICAgIGNhbGN1RGF0YS5vcGVyYXRpb24ucHVzaChcIjIpXCIpO1xyXG4gICAgICAgICAgICBjYWxjdURhdGEuZm9ybXVsYS5wdXNoKFwiMilcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBzeW1ib2wgPSBidXR0b24uc3ltYm9sICsgXCIoXCI7XHJcbiAgICAgICAgICAgIGZvcm11bGEgPSBidXR0b24uZm9ybXVsYSArIFwiKFwiO1xyXG4gICAgICAgICAgICBjYWxjdURhdGEub3BlcmF0aW9uLnB1c2goc3ltYm9sKTtcclxuICAgICAgICAgICAgY2FsY3VEYXRhLmZvcm11bGEucHVzaChmb3JtdWxhKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSBlbHNlIGlmIChidXR0b24udHlwZSA9PT0gJ2tleScpe1xyXG4gICAgICAgIGlmKGJ1dHRvbi5uYW1lID09PSAnYWxsLWNsZWFyJyl7XHJcbiAgICAgICAgICAgIGNhbGN1RGF0YS5vcGVyYXRpb24gPSBbXTtcclxuICAgICAgICAgICAgY2FsY3VEYXRhLmZvcm11bGEgPSBbXTtcclxuICAgICAgICAgICAgc2hvd091dHB1dFJlc3VsdCgwKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGJ1dHRvbi5uYW1lID09PSAnZGVsZXRlJyl7XHJcbiAgICAgICAgICAgIGNhbGN1RGF0YS5vcGVyYXRpb24ucG9wKCk7XHJcbiAgICAgICAgICAgIGNhbGN1RGF0YS5mb3JtdWxhLnBvcCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoYnV0dG9uLnR5cGUgPT09ICdjYWxjdWxhdGUnKXtcclxuICAgICAgICBsZXQgZm9ybXVsYV9zdHIgPSBjYWxjdURhdGEuZm9ybXVsYS5qb2luKCcnKS50cmltKCk7XHJcblxyXG4gICAgICAgIGxldCBwb3dlclNlYXJjaFJlc3VsdCA9IHNlYXJjaChjYWxjdURhdGEuZm9ybXVsYSwgUE9XRVIpO1xyXG4gICAgICAgIGxldCBmYWN0b3JpYWxTZWFyY2hSZXN1bHQgPSBzZWFyY2goY2FsY3VEYXRhLmZvcm11bGEsIEZBQ1RPUklBTCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHBvd2VyQmFzZSA9IGdldFBvd2VyQmFzZShjYWxjdURhdGEuZm9ybXVsYSwgcG93ZXJTZWFyY2hSZXN1bHQpO1xyXG4gICAgICAgIHBvd2VyQmFzZS5mb3JFYWNoKCBiYXNlID0+IHtcclxuICAgICAgICAgICAgbGV0IHRvUmVwbGFjZSA9IGJhc2UgKyBQT1dFUjtcclxuICAgICAgICAgICAgbGV0IHJlcGxhY2VtZW50ID0gXCJNYXRoLnBvdyhcIiArIGJhc2UgKyBcIixcIjtcclxuICAgICAgICAgICAgZm9ybXVsYV9zdHIgPSBmb3JtdWxhX3N0ci5yZXBsYWNlKHRvUmVwbGFjZSwgcmVwbGFjZW1lbnQpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGNvbnN0IGZhY3RvcmlhbE51bSA9IGdldEZhY3RvcmlhbE51bWJlcihjYWxjdURhdGEuZm9ybXVsYSwgZmFjdG9yaWFsU2VhcmNoUmVzdWx0KTtcclxuICAgICAgICBmYWN0b3JpYWxOdW0uZm9yRWFjaCggZmFjdG9yaWFsID0+IHtcclxuICAgICAgICAgICAgZm9ybXVsYV9zdHIgPSBmb3JtdWxhX3N0ci5yZXBsYWNlKGZhY3RvcmlhbC50b1JlcGxhY2UsIGZhY3RvcmlhbC5yZXBsYWNlbWVudCk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgbGV0IHJlc3VsdDtcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGV2YWwoZm9ybXVsYV9zdHIpO1xyXG4gICAgICAgICAgICBjYWxjdURhdGEub3BlcmF0aW9uID0gW107XHJcbiAgICAgICAgICAgIGNhbGN1RGF0YS5mb3JtdWxhID0gW107XHJcbiAgICAgICAgICAgIHNob3dPdXRwdXRSZXN1bHQocmVzdWx0KTtcclxuICAgICAgICB9IGNhdGNoKGVycm9yKXtcclxuICAgICAgICAgICAgaWYoZXJyb3IgaW5zdGFuY2VvZiBTeW50YXhFcnJvcil7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBcIlN5bnRheCBFcnJvclwiO1xyXG4gICAgICAgICAgICAgICAgc2hvd091dHB1dFJlc3VsdChyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNob3dPdXB1dE9wZXJhdGlvbihjYWxjdURhdGEub3BlcmF0aW9uLmpvaW4oJycpKTtcclxuICAgIHJldHVybjtcclxufVxyXG5cclxuXHJcbi8vIFNob3cgdGhlIE91dHB1dCBvcGVyYXRpb24vZm9ybXVsYVxyXG5mdW5jdGlvbiBzaG93T3VwdXRPcGVyYXRpb24ob3BlcmF0aW9uKXtcclxuICAgIGNvbnN0IG91dHB1dE9wZXJhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdXRwdXQtb3BlcmF0aW9uJylcclxuICAgIG91dHB1dE9wZXJhdGlvbi52YWx1ZSA9IG9wZXJhdGlvbjtcclxufVxyXG5cclxuLy8gU2hvdyB0aGUgT3V0cHV0IFJlc3VsdFxyXG5mdW5jdGlvbiBzaG93T3V0cHV0UmVzdWx0KHJlc3VsdCl7XHJcbiAgICBjb25zdCBvdXRwdXRSZXN1bHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3V0cHV0LXJlc3VsdCcpO1xyXG4gICAgb3V0cHV0UmVzdWx0LmlubmVySFRNTCA9IGBBbnMgPSAke3Jlc3VsdH1gO1xyXG59XHJcblxyXG5cclxuLy9Ucmlnb25vbWV0cmljIEZ1bmN0aW9uXHJcbmZ1bmN0aW9uIHRyaWdvKGNhbGxiYWNrLCBhbmdsZSl7XHJcbiAgICByZXR1cm4gY2FsbGJhY2soYW5nbGUpO1xyXG59XHJcblxyXG4vL0ZhY3RvcmlhbCBGdW5jdGlvblxyXG5mdW5jdGlvbiBmYWN0b3JpYWwobnVtYmVyKXtcclxuICAgIGxldCBhbnN3ZXIgPSAxO1xyXG5cclxuICAgIGlmKG51bWJlciAlIDEgIT0gMCkgcmV0dXJuIGdhbW1hKG51bWJlciArIDEpO1xyXG4gICAgaWYobnVtYmVyID09PSAwIHx8IG51bWJlciA9PT0gMSl7XHJcbiAgICAgICAgcmV0dXJuIGFuc3dlclxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBmb3IobGV0IGkgPSAxOyBpIDw9IG51bWJlcjsgaSsrKXtcclxuICAgICAgICAgICAgYW5zd2VyICo9IGk7XHJcbiAgICAgICAgICAgIGlmKGFuc3dlciA9PT0gSW5maW5pdHkpIHJldHVybiBJbmZpbml0eTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFuc3dlcjtcclxuICAgIH1cclxufVxyXG5cclxuLy8gR2V0IHRoZSBwb3dlciBiYXNlIGFuZCBtb3ZlIGl0cyBpbmRleFxyXG5mdW5jdGlvbiBnZXRQb3dlckJhc2UoZm9ybXVsYSwgcG93ZXJTZWFyY2hSZXN1bHQpe1xyXG4gICAgbGV0IHBvd2VyQmFzZXMgPSBbXTtcclxuXHJcbiAgICBwb3dlclNlYXJjaFJlc3VsdC5mb3JFYWNoKCBwb3dlckluZGV4ID0+IHtcclxuICAgICAgICBsZXQgYmFzZSA9IFtdO1xyXG4gICAgICAgIGxldCBwYXJlbnRoZXNlc0NvdW50ID0gMDtcclxuICAgICAgICBsZXQgcHJldmlvdXNJbmRleCA9IHBvd2VySW5kZXggLSAxO1xyXG5cclxuICAgICAgICB3aGlsZShwcmV2aW91c0luZGV4ID49IDApe1xyXG4gICAgICAgICAgICBpZihmb3JtdWxhW3ByZXZpb3VzSW5kZXhdID09IFwiKFwiKSBwYXJlbnRoZXNlc0NvdW50LS07XHJcbiAgICAgICAgICAgIGlmKGZvcm11bGFbcHJldmlvdXNJbmRleF0gPT0gXCIpXCIpIHBhcmVudGhlc2VzQ291bnQrKztcclxuXHJcbiAgICAgICAgICAgIGxldCBpc09wZXJhdG9yID0gZmFsc2U7XHJcbiAgICAgICAgICAgIE9wZXJhdG9ycy5mb3JFYWNoKG9wZXJhdG9yID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKGZvcm11bGFbcHJldmlvdXNJbmRleF0gPT09IG9wZXJhdG9yKSBpc09wZXJhdG9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIGxldCBpc1Bvd2VyID0gZm9ybXVsYVtwcmV2aW91c0luZGV4XSA9PT0gUE9XRVI7XHJcbiAgICAgICAgICAgIGlmKChpc09wZXJhdG9yICYmIHBhcmVudGhlc2VzQ291bnQgPT09IDApIHx8IGlzUG93ZXIpIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgYmFzZS51bnNoaWZ0KGZvcm11bGFbcHJldmlvdXNJbmRleF0pO1xyXG4gICAgICAgICAgICBwcmV2aW91c0luZGV4LS07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBvd2VyQmFzZXMucHVzaChiYXNlLmpvaW4oJycpKTtcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIHBvd2VyQmFzZXM7XHJcbn1cclxuXHJcblxyXG4vLyBHZXQgdGhlIGZhY3RvcmlhbCBudW1iZXIgYW5kIG1vdmUgdGhlIG51bWJlciBpbmRleFxyXG5mdW5jdGlvbiBnZXRGYWN0b3JpYWxOdW1iZXIoZm9ybXVsYSwgZmFjdG9yaWFsU2VhcmNoUmVzdWx0KXtcclxuICAgIGxldCBudW1iZXJzID0gW107XHJcbiAgICBsZXQgZmFjdG9yaWFsU2VxdWVuY2UgPSAwO1xyXG5cclxuICAgIGZhY3RvcmlhbFNlYXJjaFJlc3VsdC5mb3JFYWNoKGZhY3RvcmlhbEluZGV4ID0+IHtcclxuICAgICAgICBsZXQgbnVtID0gW107XHJcbiAgICAgICAgbGV0IG5leHRJbmRleCA9IGZhY3RvcmlhbEluZGV4ICsgMTtcclxuICAgICAgICBsZXQgbmV4dElucHV0ID0gZm9ybXVsYVtuZXh0SW5kZXhdO1xyXG5cclxuICAgICAgICBpZihuZXh0SW5wdXQgPT09IEZBQ1RPUklBTCl7XHJcbiAgICAgICAgICAgIGZhY3RvcmlhbFNlcXVlbmNlICs9IDE7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBmaXJzdEZhY3RvcmlhbEluZGV4ID0gZmFjdG9yaWFsSW5kZXggLSBmYWN0b3JpYWxTZXF1ZW5jZTtcclxuICAgICAgICBsZXQgcHJldkluZGV4ID0gZmlyc3RGYWN0b3JpYWxJbmRleCAtIDE7IFxyXG4gICAgICAgIGxldCBwYXJlbnRoZXNlc0NvdW50ID0gMDtcclxuXHJcbiAgICAgICAgd2hpbGUocHJldkluZGV4ID49IDApe1xyXG4gICAgICAgICAgICBpZihmb3JtdWxhW3ByZXZJbmRleF0gPT0gXCIoXCIpIHBhcmVudGhlc2VzQ291bnQtLTtcclxuICAgICAgICAgICAgaWYoZm9ybXVsYVtwcmV2SW5kZXhdID09IFwiKVwiKSBwYXJlbnRoZXNlc0NvdW50Kys7XHJcblxyXG4gICAgICAgICAgICBsZXQgaXNPcGVyYXRvciA9IGZhbHNlO1xyXG4gICAgICAgICAgICBPcGVyYXRvcnMuZm9yRWFjaChvcGVyYXRvciA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihmb3JtdWxhW3ByZXZJbmRleF0gPT09IG9wZXJhdG9yKSBpc09wZXJhdG9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIGlmKGlzT3BlcmF0b3IgJiYgcGFyZW50aGVzZXNDb3VudCA9PT0gMCkgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBudW0udW5zaGlmdChmb3JtdWxhW3ByZXZJbmRleF0pO1xyXG4gICAgICAgICAgICBwcmV2SW5kZXgtLTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBudW1iZXJTdHIgPSBudW0uam9pbignJyk7XHJcbiAgICAgICAgY29uc3QgZmFjdG9yaWFsID0gXCJmYWN0b3JpYWwoXCIsIGNsb3NlUGFyZW50aGVzaXMgPSBcIilcIjtcclxuICAgICAgICBsZXQgdGltZXMgPSBmYWN0b3JpYWxTZXF1ZW5jZSArIDE7XHJcbiAgICAgICAgbGV0IHRvUmVwbGFjZSA9IG51bWJlclN0ciArIEZBQ1RPUklBTC5yZXBlYXQodGltZXMpO1xyXG4gICAgICAgIGxldCByZXBsYWNlbWVudCA9IGZhY3RvcmlhbC5yZXBlYXQodGltZXMpICsgbnVtYmVyU3RyICsgY2xvc2VQYXJlbnRoZXNpcy5yZXBlYXQodGltZXMpO1xyXG5cclxuICAgICAgICBudW1iZXJzLnB1c2goe1xyXG4gICAgICAgICAgICB0b1JlcGxhY2U6IHRvUmVwbGFjZSxcclxuICAgICAgICAgICAgcmVwbGFjZW1lbnQ6IHJlcGxhY2VtZW50XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgZmFjdG9yaWFsU2VxdWVuY2UgPSAwO1xyXG4gICAgfSlcclxuICAgIHJldHVybiBudW1iZXJzO1xyXG59XHJcblxyXG4vLyBTZWFyY2ggZm9yIFBPV0VSL0ZBQ1RPUklBTCBpbiB0aGUgYXJyYXlcclxuZnVuY3Rpb24gc2VhcmNoKGFycmF5LCBrZXkpe1xyXG4gICAgbGV0IHNlYXJjaFJlc3VsdCA9IFtdO1xyXG4gICAgXHJcbiAgICBhcnJheS5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGlmKGVsZW1lbnQgPT09IGtleSl7XHJcbiAgICAgICAgICAgIHNlYXJjaFJlc3VsdC5wdXNoKGluZGV4KTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiBzZWFyY2hSZXN1bHQ7XHJcbn1cclxuXHJcblxyXG4vLyBHYW1tYSBGdW5jdGlvblxyXG5mdW5jdGlvbiBnYW1tYShuKSB7ICBcclxuICAgIFxyXG4gICAgdmFyIGcgPSA3LFxyXG4gICAgICAgIHAgPSBbMC45OTk5OTk5OTk5OTk4MDk5MywgNjc2LjUyMDM2ODEyMTg4NTEsIC0xMjU5LjEzOTIxNjcyMjQwMjgsIDc3MS4zMjM0Mjg3Nzc2NTMxMywgLTE3Ni42MTUwMjkxNjIxNDA1OSwgMTIuNTA3MzQzMjc4Njg2OTA1LCAtMC4xMzg1NzEwOTUyNjU3MjAxMiwgOS45ODQzNjk1NzgwMTk1NzE2ZS02LCAxLjUwNTYzMjczNTE0OTMxMTZlLTddO1xyXG4gICAgaWYobiA8IDAuNSkge1xyXG4gICAgICByZXR1cm4gTWF0aC5QSSAvIE1hdGguc2luKG4gKiBNYXRoLlBJKSAvIGdhbW1hKDEgLSBuKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBuLS07XHJcbiAgICAgIHZhciB4ID0gcFswXTtcclxuICAgICAgZm9yKHZhciBpID0gMTsgaSA8IGcgKyAyOyBpKyspIHtcclxuICAgICAgICB4ICs9IHBbaV0gLyAobiArIGkpO1xyXG4gICAgICB9XHJcbiAgICAgIHZhciB0ID0gbiArIGcgKyAwLjU7XHJcbiAgICAgIHJldHVybiBNYXRoLnNxcnQoMiAqIE1hdGguUEkpICogTWF0aC5wb3codCwgKG4gKyAwLjUpKSAqIE1hdGguZXhwKC10KSAqIHg7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjYWxjdWxhdG9yO1xyXG5leHBvcnQgeyBjYWxjdUJ1dHRvbnMgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBjYWxjdWxhdG9yIGZyb20gXCIuL2NhbGN1bGF0b3JMb2dpY1wiO1xyXG5pbXBvcnQgeyBjYWxjdUJ1dHRvbnMgfSBmcm9tIFwiLi9jYWxjdWxhdG9yTG9naWNcIjtcclxuXHJcbi8vIEJ1dHRvbnMgY2xpY2sgZXZlbnRcclxuZnVuY3Rpb24gb25CdXR0b25DbGljaygpe1xyXG4gICAgY29uc3QgaW5wdXRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmlucHV0Jyk7XHJcbiAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJyk7XHJcblxyXG4gICAgaW5wdXRFbGVtZW50LmZvckVhY2goaW5wdXQgPT4ge1xyXG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldEJ0biA9IGV2ZW50LnRhcmdldDtcclxuXHJcbiAgICAgICAgICAgIGNhbGN1QnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihidXR0b24ubmFtZSA9PSB0YXJnZXRCdG4uaWQpIGNhbGN1bGF0b3IoYnV0dG9uKTtcclxuXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcblxyXG4gICAgYnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PiB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uLmJsdXIoKTtcclxuICAgICAgICAgICAgfSwgMTAwKTtcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxufVxyXG5cclxuLy8gS2V5Ym9hcmQgZXZlbnRcclxuZnVuY3Rpb24gaGFuZGxlS2V5Ym9hcmRJbnB1dChldmVudCkge1xyXG4gICAgY29uc3Qga2V5ID0gZXZlbnQua2V5O1xyXG4gICAgXHJcbiAgICBjb25zdCBrZXlib2FyZE1hcHBpbmcgPSB7XHJcbiAgICAgICAgJzAnOiB7IHR5cGU6ICdudW1iZXInLCBzeW1ib2w6ICcwJywgZm9ybXVsYTogJzAnIH0sXHJcbiAgICAgICAgJzEnOiB7IHR5cGU6ICdudW1iZXInLCBzeW1ib2w6ICcxJywgZm9ybXVsYTogJzEnIH0sXHJcbiAgICAgICAgJzInOiB7IHR5cGU6ICdudW1iZXInLCBzeW1ib2w6ICcyJywgZm9ybXVsYTogJzInIH0sXHJcbiAgICAgICAgJzMnOiB7IHR5cGU6ICdudW1iZXInLCBzeW1ib2w6ICczJywgZm9ybXVsYTogJzMnIH0sXHJcbiAgICAgICAgJzQnOiB7IHR5cGU6ICdudW1iZXInLCBzeW1ib2w6ICc0JywgZm9ybXVsYTogJzQnIH0sXHJcbiAgICAgICAgJzUnOiB7IHR5cGU6ICdudW1iZXInLCBzeW1ib2w6ICc1JywgZm9ybXVsYTogJzUnIH0sXHJcbiAgICAgICAgJzYnOiB7IHR5cGU6ICdudW1iZXInLCBzeW1ib2w6ICc2JywgZm9ybXVsYTogJzYnIH0sXHJcbiAgICAgICAgJzcnOiB7IHR5cGU6ICdudW1iZXInLCBzeW1ib2w6ICc3JywgZm9ybXVsYTogJzcnIH0sXHJcbiAgICAgICAgJzgnOiB7IHR5cGU6ICdudW1iZXInLCBzeW1ib2w6ICc4JywgZm9ybXVsYTogJzgnIH0sXHJcbiAgICAgICAgJzknOiB7IHR5cGU6ICdudW1iZXInLCBzeW1ib2w6ICc5JywgZm9ybXVsYTogJzknIH0sXHJcbiAgICAgICAgJyUnOiB7IHR5cGU6ICdudW1iZXInLCBzeW1ib2w6ICclJywgZm9ybXVsYTogJy8xMDAnfSxcclxuICAgICAgICAnKyc6IHsgdHlwZTogJ29wZXJhdG9yJywgc3ltYm9sOiAnKycsIGZvcm11bGE6ICcrJyB9LFxyXG4gICAgICAgICctJzogeyB0eXBlOiAnb3BlcmF0b3InLCBzeW1ib2w6ICctJywgZm9ybXVsYTogJy0nIH0sXHJcbiAgICAgICAgJyonOiB7IHR5cGU6ICdvcGVyYXRvcicsIHN5bWJvbDogJyonLCBmb3JtdWxhOiAnKicgfSxcclxuICAgICAgICAnLyc6IHsgdHlwZTogJ29wZXJhdG9yJywgc3ltYm9sOiAnLycsIGZvcm11bGE6ICcvJyB9LFxyXG4gICAgICAgICdFbnRlcic6IHsgdHlwZTogJ2NhbGN1bGF0ZScgfSxcclxuICAgICAgICAnQmFja3NwYWNlJzogeyB0eXBlOiAna2V5JywgbmFtZTogJ2RlbGV0ZScgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBidXR0b24gPSBrZXlib2FyZE1hcHBpbmdba2V5XTtcclxuXHJcbiAgICBpZiAoYnV0dG9uKSB7XHJcbiAgICAgICAgY2FsY3VsYXRvcihidXR0b24pO1xyXG4gICAgfVxyXG59XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlS2V5Ym9hcmRJbnB1dCk7XHJcbm9uQnV0dG9uQ2xpY2soKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9