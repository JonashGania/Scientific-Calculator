import math

def calculate():
    while True:
        print('\n1. add         6. power         11. tan' +      
              '\n2. subtract    7. log10          0. exit' + 
              '\n3. multiply    8. square root' + 
              '\n4. divide      9. sin' +
              '\n5. factorial  10. cos' )
        user_input = input('Select the number of the operation: ')
        
        if user_input == '0':
            break
        
        match user_input:
            case '1':
                perform_calculation(addition)
            case '2':
                perform_calculation(subtraction)
            case '3':
                perform_calculation(multiplication)
            case '4':
                perform_calculation(division)
            case '5':
                factorial()
            case '6':
                perform_calculation(power)
            case '7':
                logarithm()
            case '8':
                square_root()
            case '9':
                sin()
            case '10':
                cos()
            case '11':
                tan()
            case default:
                print('\nInvalid operation. Please check your operation.')

def perform_calculation(operation):
    try:
        input_1 = float(input('Enter first input: '))
        input_2 = float(input('Enter second input: '))
        
        result = operation(input_1,input_2)
        print(f"\nResult: {result}")
    except ValueError:
        print(f"\nInvalid input: Values must be number.")

def addition(a, b):
    return a + b
    
def subtraction(a, b):
    return a - b

def multiplication(a, b):
    return a * b

def division(a, b):
    if b == 0:
        return 'Infinity'
    
    return a / b

def factorial():
    try:
        input1 = int(input('Enter first input: '))
        print(f"\nResult: {math.factorial(input1)}")
    except ValueError:
        print('\nInvalid input: Values must not be negative or string.')

def power(a, b):
    return math.pow(a,b)


def logarithm():
    try:
        input1 = int(input('Enter first input: '))
        print(f"\nResult: {math.log10(input1)}")
    except ValueError:
        print('\nInvalid input: Values must not be negative or string.')


def square_root():
    try:
        input1 = float(input('Enter first input: '))
        print(f"\nResult: {math.sqrt(input1)}")
    except ValueError:
        print('\nInvalid input: Values must not be negative or string.')

def sin():
    try:
        input1 = float(input('Enter first input: '))
        print(f"\nResult: {math.sin(input1)}")
    except ValueError:
        print('\nInvalid input: Values must be a number.')

def cos():
    try:
        input1 = float(input('Enter first input: '))
        print(f"\nResult: {math.cos(input1)}")
    except ValueError:
        print('\nInvalid input: Values must be a number.')

def tan():
    try:
        input1 = float(input('Enter first input: '))
        print(f"\nResult: {math.tan(input1)}")
    except ValueError:
        print('\nInvalid input: Values must be a number.')


calculate()