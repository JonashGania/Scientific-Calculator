import calculator from "./calculatorLogic";
import { calcuButtons } from "./calculatorLogic";
import calculate from "./calculatorCli";

// Buttons click event
function onButtonClick(){
    const inputElement = document.querySelectorAll('.input');
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
        calculator(button);
    }
}

document.addEventListener('keydown', handleKeyboardInput);
onButtonClick();
calculate();