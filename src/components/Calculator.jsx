import React, { useState } from 'react'
import { calcuButtons, FACTORIAL, POWER, Operators } from '../constants/constant'
import Button from './Button'

export default function Calculator() {
    const [calcuData, setCalcuData] = useState({
        operation: [],
        formula: [],
    })

    const [outputResult, setOutputResult] = useState('Ans = 0')

    const calculator = (button) => {
        let updatedOperation = [...calcuData.operation];
        let updatedFormula = [...calcuData.formula];

        if (button.type === 'operator') {
            updatedOperation.push(' ' + button.symbol + ' ');
            updatedFormula.push(button.formula);
        } else if (button.type === 'number') {
            updatedOperation.push(button.symbol);
            updatedFormula.push(button.formula);
        } else if (button.type === 'trigonometry') {
            updatedOperation.push(button.symbol + '(');
            updatedFormula.push(button.formula);
        } else if (button.type === 'math_function') {
            let symbol, formula;

            if(button.name === 'factorial'){
                symbol = '!';
                formula = button.formula;
                updatedOperation.push(symbol);
                updatedFormula.push(formula);
            } else if (button.name === 'power'){
                symbol = '^(';
                formula = button.formula;
                updatedOperation.push(symbol);
                updatedFormula.push(formula);
            } else if (button.name === 'square'){
                symbol = '^(';
                formula = button.formula;
                updatedOperation.push(symbol);
                updatedFormula.push(formula);

                updatedOperation.push("2)");
                updatedFormula.push("2)");

            } else {
                symbol = button.symbol + "(";
                formula = button.formula + "(";
                updatedOperation.push(symbol);
                updatedFormula.push(formula);
            }

        } else if (button.type === 'key'){
            if(button.name === 'all-clear'){
                updatedOperation = [];
                updatedFormula = [];
                updateOutputResult(0)
            } else if (button.name === 'delete'){
                updatedOperation.pop();
                updatedFormula.pop();
            }
        } 
        
        else if (button.type === 'calculate') {
            let formula_str = updatedFormula.join('').trim();

            let factorialSearchResult = search(updatedFormula, FACTORIAL);
            let powerSearchResult = search(updatedFormula, POWER);

            const powerBase = getPowerBase(updatedFormula, powerSearchResult);
            powerBase.forEach( base => {
                let toReplace = base + POWER;
                let replacement = "Math.pow(" + base + ",";
                formula_str = formula_str.replace(toReplace, replacement);
            })

            const factorialNum = getFactorialNumber(updatedFormula, factorialSearchResult);
            factorialNum.forEach(factorial => {
                formula_str = formula_str.replace(factorial.toReplace, factorial.replacement);
            })

            let result;
            try {
                result = eval(formula_str);
                updatedOperation = [];
                updatedFormula = [];
                updateOutputResult(result);
            }
            catch(error){
                if(error instanceof SyntaxError){
                    result = "Syntax Error";
                    updateOutputResult(result);
                    return
                }
            }
        }

        setCalcuData({
            ...calcuData, 
            operation: updatedOperation, 
            formula: updatedFormula
        })
    }

    const updateOutputResult = (result) => {
        setOutputResult(`Ans = ${result}`)
    }

    const trigo = ((callback, angle) => {
        return callback(angle)
    })

    const factorial = (number) => {
        let ans = 1;

        if(number === 0 || number === 1){
            return ans
        } else {
            for(let i = 1; i <= number; i++){
                ans *= i;
                if(ans === Infinity) return Infinity;
            }
            return ans;
        }
    }

    const getPowerBase = ((formula, powerSearchResult) => {
        let powerBases = [];

        powerSearchResult.forEach(powerIndex => {
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
    })

    const getFactorialNumber = ((formula, factorialSearchResult) => {
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
    })

    const search = ((array, key) => {
        let searchResult = [];

        array.forEach((element, index) => {
            if(element === key){
                searchResult.push(index);
            }
        });

        return searchResult;
    })
    
    return (
        <div className='bg-slate-900 py-5 px-6 rounded-2xl shadow-container mx-4 w-mobile-w mobile:w-auto calcu-container'>
            <div className='bg-slate-800 mb-7 px-3 py-2 text-right rounded-md shadow-inner'>
                <input 
                    value={calcuData.operation.join('')} 
                    type="text" 
                    disabled
                    className='text-gray-500 font-semibold bg-transparent w-full text-right text-2xl'
                />
                <div className='output-result font-semibold outline-none border-none text-3xl text-slate-300 overflow-hidden'>{outputResult}</div>
            </div>
            <div className='flex flex-wrap max-w-[390px] gap-4'>
                {calcuButtons.map((button, index) => (
                    <Button key={index} button={button} calculator={calculator}/>
                ))}
            </div>
        </div>
    )
}
