/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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


const inputElement = document.querySelectorAll('.input');
const outputResult = document.querySelector('.output-result');
const outputOperation = document.getElementById('output-operation')
const buttons = document.querySelectorAll('button');

inputElement.forEach(input => {
    input.addEventListener('click', (event) => {
        const targetBtn = event.target;

        calcuButtons.forEach(button => {
            if(button.name == targetBtn.id) calculator(button);

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
            symbol = '^(2';
            formula = button.formula;
            calcuData.operation.push(symbol);
            calcuData.formula.push(formula);

        }
        
        else {
            symbol = `${button.symbol}(`;
            formula = `${button.formula}(`;
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
        formula_str = calcuData.formula.join('').trim();
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
}

function showOuputOperation(operation){
    outputOperation.value = operation;
}

function showOutputResult(result){
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


// GAMMA FUNCTINON
function gamma(n) {  // accurate to about 15 decimal places
    //some magic constants 
    var g = 7, // g represents the precision desired, p is the values of p[i] to plug into Lanczos' formula
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0wsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsY0FBYztBQUN0Qyx5QkFBeUIsZUFBZTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsT0FBTztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sdUJBQXVCLGFBQWE7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixXQUFXO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2NpZW50aWZpYy1jYWxjdWxhdG9yLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IE9wZXJhdG9ycyA9IFsnKycsICctJywgJyonLCAnLyddO1xyXG5jb25zdCBQT1dFUiA9IFwiUE9XRVIoXCIsIEZBQ1RPUklBTCA9IFwiRkFDVE9SSUFMXCI7XHJcblxyXG5sZXQgY2FsY3VCdXR0b25zID0gW1xyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdzaW4nLFxyXG4gICAgICAgIHN5bWJvbDogJ3NpbicsXHJcbiAgICAgICAgZm9ybXVsYTogJ3RyaWdvKE1hdGguc2luLCcsXHJcbiAgICAgICAgdHlwZTogJ3RyaWdvbm9tZXRyeSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ2NvcycsXHJcbiAgICAgICAgc3ltYm9sOiAnY29zJyxcclxuICAgICAgICBmb3JtdWxhOiAndHJpZ28oTWF0aC5jb3MsJyxcclxuICAgICAgICB0eXBlOiAndHJpZ29ub21ldHJ5J1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAndGFuJyxcclxuICAgICAgICBzeW1ib2w6ICd0YW4nLFxyXG4gICAgICAgIGZvcm11bGE6ICd0cmlnbyhNYXRoLnRhbiwnLFxyXG4gICAgICAgIHR5cGU6ICd0cmlnb25vbWV0cnknXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdvcGVuLXBhcmVudGhlc2lzJyxcclxuICAgICAgICBzeW1ib2w6ICcoJyxcclxuICAgICAgICBmb3JtdWxhOiAnKCcsXHJcbiAgICAgICAgdHlwZTogJ251bWJlcidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ2Nsb3NlLXBhcmVudGhlc2lzJyxcclxuICAgICAgICBzeW1ib2w6ICcpJyxcclxuICAgICAgICBmb3JtdWxhOiAnKScsXHJcbiAgICAgICAgdHlwZTogJ251bWJlcidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ2xvZycsXHJcbiAgICAgICAgc3ltYm9sOiAnbG9nJyxcclxuICAgICAgICBmb3JtdWxhOiAnTWF0aC5sb2cxMCcsXHJcbiAgICAgICAgdHlwZTogJ21hdGhfZnVuY3Rpb24nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdmYWN0b3JpYWwnLFxyXG4gICAgICAgIHN5bWJvbDogJyEnLFxyXG4gICAgICAgIGZvcm11bGE6IEZBQ1RPUklBTCxcclxuICAgICAgICB0eXBlOiAnbWF0aF9mdW5jdGlvbidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ3NxdWFyZS1yb290JyxcclxuICAgICAgICBzeW1ib2w6ICfiiJonLFxyXG4gICAgICAgIGZvcm11bGE6ICdNYXRoLnNxcnQnLFxyXG4gICAgICAgIHR5cGU6ICdtYXRoX2Z1bmN0aW9uJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnc3F1YXJlJyxcclxuICAgICAgICBzeW1ib2w6ICd4wrInLFxyXG4gICAgICAgIGZvcm11bGE6IFBPV0VSLFxyXG4gICAgICAgIHR5cGU6ICdtYXRoX2Z1bmN0aW9uJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAncG93ZXInLFxyXG4gICAgICAgIHN5bWJvbDogJ3g8c3VwPnk8L3N1cD4nLFxyXG4gICAgICAgIGZvcm11bGE6IFBPV0VSLFxyXG4gICAgICAgIHR5cGU6ICdtYXRoX2Z1bmN0aW9uJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnc2V2ZW4nLFxyXG4gICAgICAgIHN5bWJvbDogNyxcclxuICAgICAgICBmb3JtdWxhOiA3LFxyXG4gICAgICAgIHR5cGU6ICdudW1iZXInXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdlaWdodCcsXHJcbiAgICAgICAgc3ltYm9sOiA4LFxyXG4gICAgICAgIGZvcm11bGE6IDgsXHJcbiAgICAgICAgdHlwZTogJ251bWJlcidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ25pbmUnLFxyXG4gICAgICAgIHN5bWJvbDogOSxcclxuICAgICAgICBmb3JtdWxhOiA5LFxyXG4gICAgICAgIHR5cGU6ICdudW1iZXInXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdkZWxldGUnLFxyXG4gICAgICAgIHN5bWJvbDogJ0RFTCcsXHJcbiAgICAgICAgZm9ybXVsYTogZmFsc2UsXHJcbiAgICAgICAgdHlwZTogJ2tleSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ2FsbC1jbGVhcicsXHJcbiAgICAgICAgc3ltYm9sOiAnQUMnLFxyXG4gICAgICAgIGZvcm11bGE6IGZhbHNlLFxyXG4gICAgICAgIHR5cGU6ICdrZXknXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdmb3VyJyxcclxuICAgICAgICBzeW1ib2w6IDQsXHJcbiAgICAgICAgZm9ybXVsYTogNCxcclxuICAgICAgICB0eXBlOiAnbnVtYmVyJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnZml2ZScsXHJcbiAgICAgICAgc3ltYm9sOiA1LFxyXG4gICAgICAgIGZvcm11bGE6IDUsXHJcbiAgICAgICAgdHlwZTogJ251bWJlcidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ3NpeCcsXHJcbiAgICAgICAgc3ltYm9sOiA2LFxyXG4gICAgICAgIGZvcm11bGE6IDYsXHJcbiAgICAgICAgdHlwZTogJ251bWJlcidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ211bHRpcGxpY2F0aW9uJyxcclxuICAgICAgICBzeW1ib2w6ICfDlycsXHJcbiAgICAgICAgZm9ybXVsYTogJyonLFxyXG4gICAgICAgIHR5cGU6ICdvcGVyYXRvcidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ2RpdmlzaW9uJyxcclxuICAgICAgICBzeW1ib2w6ICfDtycsXHJcbiAgICAgICAgZm9ybXVsYTogJy8nLFxyXG4gICAgICAgIHR5cGU6ICdvcGVyYXRvcidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ29uZScsXHJcbiAgICAgICAgc3ltYm9sOiAxLFxyXG4gICAgICAgIGZvcm11bGE6IDEsXHJcbiAgICAgICAgdHlwZTogJ251bWJlcidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ3R3bycsXHJcbiAgICAgICAgc3ltYm9sOiAyLFxyXG4gICAgICAgIGZvcm11bGE6IDIsXHJcbiAgICAgICAgdHlwZTogJ251bWJlcidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ3RocmVlJyxcclxuICAgICAgICBzeW1ib2w6IDMsXHJcbiAgICAgICAgZm9ybXVsYTogMyxcclxuICAgICAgICB0eXBlOiAnbnVtYmVyJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnYWRkaXRpb24nLFxyXG4gICAgICAgIHN5bWJvbDogJysnLFxyXG4gICAgICAgIGZvcm11bGE6ICcrJyxcclxuICAgICAgICB0eXBlOiAnb3BlcmF0b3InXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdzdWJ0cmFjdGlvbicsXHJcbiAgICAgICAgc3ltYm9sOiAnLScsXHJcbiAgICAgICAgZm9ybXVsYTogJy0nLFxyXG4gICAgICAgIHR5cGU6ICdvcGVyYXRvcidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ3plcm8nLFxyXG4gICAgICAgIHN5bWJvbDogMCxcclxuICAgICAgICBmb3JtdWxhOiAwLFxyXG4gICAgICAgIHR5cGU6ICdudW1iZXInXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdwaScsXHJcbiAgICAgICAgc3ltYm9sOiAnz4AnLFxyXG4gICAgICAgIGZvcm11bGE6ICdNYXRoLlBJJyxcclxuICAgICAgICB0eXBlOiAnbnVtYmVyJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAncGVyY2VudCcsXHJcbiAgICAgICAgc3ltYm9sOiAnJScsXHJcbiAgICAgICAgZm9ybXVsYTogJy8xMDAnLFxyXG4gICAgICAgIHR5cGU6ICdudW1iZXInXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdkb3QnLFxyXG4gICAgICAgIHN5bWJvbDogJy4nLFxyXG4gICAgICAgIGZvcm11bGE6ICcuJyxcclxuICAgICAgICB0eXBlOiAnbnVtYmVyJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnZXF1YWwnLFxyXG4gICAgICAgIHN5bWJvbDogJz0nLFxyXG4gICAgICAgIGZvcm11bGE6ICc9JyxcclxuICAgICAgICB0eXBlOiAnY2FsY3VsYXRlJ1xyXG4gICAgfVxyXG5dXHJcblxyXG5sZXQgY2FsY3VEYXRhID0ge1xyXG4gICAgb3BlcmF0aW9uOiBbXSxcclxuICAgIGZvcm11bGE6IFtdXHJcbn1cclxuXHJcblxyXG5jb25zdCBpbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaW5wdXQnKTtcclxuY29uc3Qgb3V0cHV0UmVzdWx0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm91dHB1dC1yZXN1bHQnKTtcclxuY29uc3Qgb3V0cHV0T3BlcmF0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ291dHB1dC1vcGVyYXRpb24nKVxyXG5jb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJyk7XHJcblxyXG5pbnB1dEVsZW1lbnQuZm9yRWFjaChpbnB1dCA9PiB7XHJcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRhcmdldEJ0biA9IGV2ZW50LnRhcmdldDtcclxuXHJcbiAgICAgICAgY2FsY3VCdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcclxuICAgICAgICAgICAgaWYoYnV0dG9uLm5hbWUgPT0gdGFyZ2V0QnRuLmlkKSBjYWxjdWxhdG9yKGJ1dHRvbik7XHJcblxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG59KVxyXG5cclxuYnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+IHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgYnV0dG9uLmJsdXIoKTtcclxuICAgICAgICB9LCAxMDApO1xyXG4gICAgfSlcclxufSlcclxuXHJcblxyXG5mdW5jdGlvbiBjYWxjdWxhdG9yKGJ1dHRvbil7XHJcbiAgICBpZihidXR0b24udHlwZSA9PT0gJ29wZXJhdG9yJyl7XHJcbiAgICAgICAgY2FsY3VEYXRhLm9wZXJhdGlvbi5wdXNoKCcgJyArIGJ1dHRvbi5zeW1ib2wgKyAnICcpO1xyXG4gICAgICAgIGNhbGN1RGF0YS5mb3JtdWxhLnB1c2goYnV0dG9uLmZvcm11bGEpO1xyXG4gICAgfSBlbHNlIGlmIChidXR0b24udHlwZSA9PT0gJ3RyaWdvbm9tZXRyeScpe1xyXG4gICAgICAgIGNhbGN1RGF0YS5vcGVyYXRpb24ucHVzaChidXR0b24uc3ltYm9sICsgJygnKTtcclxuICAgICAgICBjYWxjdURhdGEuZm9ybXVsYS5wdXNoKGJ1dHRvbi5mb3JtdWxhKTtcclxuICAgIH0gZWxzZSBpZiAoYnV0dG9uLnR5cGUgPT09ICdudW1iZXInKXtcclxuICAgICAgICBjYWxjdURhdGEub3BlcmF0aW9uLnB1c2goYnV0dG9uLnN5bWJvbCk7XHJcbiAgICAgICAgY2FsY3VEYXRhLmZvcm11bGEucHVzaChidXR0b24uZm9ybXVsYSk7XHJcbiAgICB9IGVsc2UgaWYgKGJ1dHRvbi50eXBlID09PSAnbWF0aF9mdW5jdGlvbicpe1xyXG4gICAgICAgIGxldCBzeW1ib2wsIGZvcm11bGE7XHJcblxyXG4gICAgICAgIGlmKGJ1dHRvbi5uYW1lID09PSAnZmFjdG9yaWFsJyl7XHJcbiAgICAgICAgICAgIHN5bWJvbCA9ICchJztcclxuICAgICAgICAgICAgZm9ybXVsYSA9IGJ1dHRvbi5mb3JtdWxhO1xyXG4gICAgICAgICAgICBjYWxjdURhdGEub3BlcmF0aW9uLnB1c2goc3ltYm9sKTtcclxuICAgICAgICAgICAgY2FsY3VEYXRhLmZvcm11bGEucHVzaChmb3JtdWxhKTtcclxuICAgICAgICB9IGVsc2UgaWYoYnV0dG9uLm5hbWUgPT09ICdwb3dlcicpe1xyXG4gICAgICAgICAgICBzeW1ib2wgPSAnXignO1xyXG4gICAgICAgICAgICBmb3JtdWxhID0gYnV0dG9uLmZvcm11bGE7XHJcbiAgICAgICAgICAgIGNhbGN1RGF0YS5vcGVyYXRpb24ucHVzaChzeW1ib2wpO1xyXG4gICAgICAgICAgICBjYWxjdURhdGEuZm9ybXVsYS5wdXNoKGZvcm11bGEpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoYnV0dG9uLm5hbWUgPT09ICdzcXVhcmUnKXtcclxuICAgICAgICAgICAgc3ltYm9sID0gJ14oMic7XHJcbiAgICAgICAgICAgIGZvcm11bGEgPSBidXR0b24uZm9ybXVsYTtcclxuICAgICAgICAgICAgY2FsY3VEYXRhLm9wZXJhdGlvbi5wdXNoKHN5bWJvbCk7XHJcbiAgICAgICAgICAgIGNhbGN1RGF0YS5mb3JtdWxhLnB1c2goZm9ybXVsYSk7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgc3ltYm9sID0gYCR7YnV0dG9uLnN5bWJvbH0oYDtcclxuICAgICAgICAgICAgZm9ybXVsYSA9IGAke2J1dHRvbi5mb3JtdWxhfShgO1xyXG4gICAgICAgICAgICBjYWxjdURhdGEub3BlcmF0aW9uLnB1c2goc3ltYm9sKTtcclxuICAgICAgICAgICAgY2FsY3VEYXRhLmZvcm11bGEucHVzaChmb3JtdWxhKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSBlbHNlIGlmIChidXR0b24udHlwZSA9PT0gJ2tleScpe1xyXG4gICAgICAgIGlmKGJ1dHRvbi5uYW1lID09PSAnYWxsLWNsZWFyJyl7XHJcbiAgICAgICAgICAgIGNhbGN1RGF0YS5vcGVyYXRpb24gPSBbXTtcclxuICAgICAgICAgICAgY2FsY3VEYXRhLmZvcm11bGEgPSBbXTtcclxuICAgICAgICAgICAgc2hvd091dHB1dFJlc3VsdCgwKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGJ1dHRvbi5uYW1lID09PSAnZGVsZXRlJyl7XHJcbiAgICAgICAgICAgIGNhbGN1RGF0YS5vcGVyYXRpb24ucG9wKCk7XHJcbiAgICAgICAgICAgIGNhbGN1RGF0YS5mb3JtdWxhLnBvcCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoYnV0dG9uLnR5cGUgPT09ICdjYWxjdWxhdGUnKXtcclxuICAgICAgICBmb3JtdWxhX3N0ciA9IGNhbGN1RGF0YS5mb3JtdWxhLmpvaW4oJycpLnRyaW0oKTtcclxuICAgICAgICBsZXQgcmVzdWx0O1xyXG5cclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGV2YWwoZm9ybXVsYV9zdHIpO1xyXG4gICAgICAgICAgICBjYWxjdURhdGEub3BlcmF0aW9uID0gW107XHJcbiAgICAgICAgICAgIGNhbGN1RGF0YS5mb3JtdWxhID0gW107XHJcbiAgICAgICAgICAgIHNob3dPdXRwdXRSZXN1bHQocmVzdWx0KTtcclxuICAgICAgICB9IGNhdGNoKGVycm9yKXtcclxuICAgICAgICAgICAgaWYoZXJyb3IgaW5zdGFuY2VvZiBTeW50YXhFcnJvcil7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBcIlN5bnRheCBFcnJvclwiO1xyXG4gICAgICAgICAgICAgICAgc2hvd091dHB1dFJlc3VsdChyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG5cclxuICAgIH1cclxuXHJcbiAgICBzaG93T3VwdXRPcGVyYXRpb24oY2FsY3VEYXRhLm9wZXJhdGlvbi5qb2luKCcnKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dPdXB1dE9wZXJhdGlvbihvcGVyYXRpb24pe1xyXG4gICAgb3V0cHV0T3BlcmF0aW9uLnZhbHVlID0gb3BlcmF0aW9uO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93T3V0cHV0UmVzdWx0KHJlc3VsdCl7XHJcbiAgICBvdXRwdXRSZXN1bHQuaW5uZXJIVE1MID0gYEFucyA9ICR7cmVzdWx0fWA7XHJcbn1cclxuXHJcblxyXG4vL1RyaWdvbm9tZXRyaWMgRnVuY3Rpb25cclxuZnVuY3Rpb24gdHJpZ28oY2FsbGJhY2ssIGFuZ2xlKXtcclxuICAgIHJldHVybiBjYWxsYmFjayhhbmdsZSk7XHJcbn1cclxuXHJcbi8vRmFjdG9yaWFsIEZ1bmN0aW9uXHJcbmZ1bmN0aW9uIGZhY3RvcmlhbChudW1iZXIpe1xyXG4gICAgbGV0IGFuc3dlciA9IDE7XHJcblxyXG4gICAgaWYobnVtYmVyICUgMSAhPSAwKSByZXR1cm4gZ2FtbWEobnVtYmVyICsgMSk7XHJcbiAgICBpZihudW1iZXIgPT09IDAgfHwgbnVtYmVyID09PSAxKXtcclxuICAgICAgICByZXR1cm4gYW5zd2VyXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDE7IGkgPD0gbnVtYmVyOyBpKyspe1xyXG4gICAgICAgICAgICBhbnN3ZXIgKj0gaTtcclxuICAgICAgICAgICAgaWYoYW5zd2VyID09PSBJbmZpbml0eSkgcmV0dXJuIEluZmluaXR5O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYW5zd2VyO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLy8gR0FNTUEgRlVOQ1RJTk9OXHJcbmZ1bmN0aW9uIGdhbW1hKG4pIHsgIC8vIGFjY3VyYXRlIHRvIGFib3V0IDE1IGRlY2ltYWwgcGxhY2VzXHJcbiAgICAvL3NvbWUgbWFnaWMgY29uc3RhbnRzIFxyXG4gICAgdmFyIGcgPSA3LCAvLyBnIHJlcHJlc2VudHMgdGhlIHByZWNpc2lvbiBkZXNpcmVkLCBwIGlzIHRoZSB2YWx1ZXMgb2YgcFtpXSB0byBwbHVnIGludG8gTGFuY3pvcycgZm9ybXVsYVxyXG4gICAgICAgIHAgPSBbMC45OTk5OTk5OTk5OTk4MDk5MywgNjc2LjUyMDM2ODEyMTg4NTEsIC0xMjU5LjEzOTIxNjcyMjQwMjgsIDc3MS4zMjM0Mjg3Nzc2NTMxMywgLTE3Ni42MTUwMjkxNjIxNDA1OSwgMTIuNTA3MzQzMjc4Njg2OTA1LCAtMC4xMzg1NzEwOTUyNjU3MjAxMiwgOS45ODQzNjk1NzgwMTk1NzE2ZS02LCAxLjUwNTYzMjczNTE0OTMxMTZlLTddO1xyXG4gICAgaWYobiA8IDAuNSkge1xyXG4gICAgICByZXR1cm4gTWF0aC5QSSAvIE1hdGguc2luKG4gKiBNYXRoLlBJKSAvIGdhbW1hKDEgLSBuKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBuLS07XHJcbiAgICAgIHZhciB4ID0gcFswXTtcclxuICAgICAgZm9yKHZhciBpID0gMTsgaSA8IGcgKyAyOyBpKyspIHtcclxuICAgICAgICB4ICs9IHBbaV0gLyAobiArIGkpO1xyXG4gICAgICB9XHJcbiAgICAgIHZhciB0ID0gbiArIGcgKyAwLjU7XHJcbiAgICAgIHJldHVybiBNYXRoLnNxcnQoMiAqIE1hdGguUEkpICogTWF0aC5wb3codCwgKG4gKyAwLjUpKSAqIE1hdGguZXhwKC10KSAqIHg7XHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=