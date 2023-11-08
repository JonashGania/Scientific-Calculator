export const Operators = ['+', '-', '*', '/'];
export const POWER = "POWER(";
export const FACTORIAL = "FACTORIAL";

export let calcuButtons = [
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
        symbol: 'x^y',
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