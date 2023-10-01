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

function showOuputOperation(operation){
    const outputOperation = document.getElementById('output-operation')
    outputOperation.value = operation;
}

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


export default calculator;
export { calcuButtons };