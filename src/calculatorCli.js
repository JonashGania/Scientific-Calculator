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


export default calculate;