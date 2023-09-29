/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
let calcu_buttons = [
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
        name: 'exponentiation',
        symbol: 'e',
        formula: 'Math.E',
        type: 'number'
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
        symbol: '&',
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



const inputElement = document.querySelectorAll('.input');

inputElement.addEventListener('click', (event) => {
    const targetBtn = event.target;

    calcu_buttons.forEach(button => {
        if(button.name === targetBtn.id){
            calculator(button);
        }
    })
})

function calculator(button){
    console.log(button)
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zY2llbnRpZmljLWNhbGN1bGF0b3IvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IGNhbGN1X2J1dHRvbnMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ3NpbicsXHJcbiAgICAgICAgc3ltYm9sOiAnc2luJyxcclxuICAgICAgICBmb3JtdWxhOiAndHJpZ28oTWF0aC5zaW4sJyxcclxuICAgICAgICB0eXBlOiAndHJpZ29ub21ldHJ5J1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnY29zJyxcclxuICAgICAgICBzeW1ib2w6ICdjb3MnLFxyXG4gICAgICAgIGZvcm11bGE6ICd0cmlnbyhNYXRoLmNvcywnLFxyXG4gICAgICAgIHR5cGU6ICd0cmlnb25vbWV0cnknXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICd0YW4nLFxyXG4gICAgICAgIHN5bWJvbDogJ3RhbicsXHJcbiAgICAgICAgZm9ybXVsYTogJ3RyaWdvKE1hdGgudGFuLCcsXHJcbiAgICAgICAgdHlwZTogJ3RyaWdvbm9tZXRyeSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ29wZW4tcGFyZW50aGVzaXMnLFxyXG4gICAgICAgIHN5bWJvbDogJygnLFxyXG4gICAgICAgIGZvcm11bGE6ICcoJyxcclxuICAgICAgICB0eXBlOiAnbnVtYmVyJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnY2xvc2UtcGFyZW50aGVzaXMnLFxyXG4gICAgICAgIHN5bWJvbDogJyknLFxyXG4gICAgICAgIGZvcm11bGE6ICcpJyxcclxuICAgICAgICB0eXBlOiAnbnVtYmVyJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnbG9nJyxcclxuICAgICAgICBzeW1ib2w6ICdsb2cnLFxyXG4gICAgICAgIGZvcm11bGE6ICdNYXRoLmxvZzEwJyxcclxuICAgICAgICB0eXBlOiAnbWF0aF9mdW5jdGlvbidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ2ZhY3RvcmlhbCcsXHJcbiAgICAgICAgc3ltYm9sOiAnIScsXHJcbiAgICAgICAgZm9ybXVsYTogRkFDVE9SSUFMLFxyXG4gICAgICAgIHR5cGU6ICdtYXRoX2Z1bmN0aW9uJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnc3F1YXJlLXJvb3QnLFxyXG4gICAgICAgIHN5bWJvbDogJ+KImicsXHJcbiAgICAgICAgZm9ybXVsYTogJ01hdGguc3FydCcsXHJcbiAgICAgICAgdHlwZTogJ21hdGhfZnVuY3Rpb24nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdleHBvbmVudGlhdGlvbicsXHJcbiAgICAgICAgc3ltYm9sOiAnZScsXHJcbiAgICAgICAgZm9ybXVsYTogJ01hdGguRScsXHJcbiAgICAgICAgdHlwZTogJ251bWJlcidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ3Bvd2VyJyxcclxuICAgICAgICBzeW1ib2w6ICd4PHN1cD55PC9zdXA+JyxcclxuICAgICAgICBmb3JtdWxhOiBQT1dFUixcclxuICAgICAgICB0eXBlOiAnbWF0aF9mdW5jdGlvbidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ3NldmVuJyxcclxuICAgICAgICBzeW1ib2w6IDcsXHJcbiAgICAgICAgZm9ybXVsYTogNyxcclxuICAgICAgICB0eXBlOiAnbnVtYmVyJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnZWlnaHQnLFxyXG4gICAgICAgIHN5bWJvbDogOCxcclxuICAgICAgICBmb3JtdWxhOiA4LFxyXG4gICAgICAgIHR5cGU6ICdudW1iZXInXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICduaW5lJyxcclxuICAgICAgICBzeW1ib2w6IDksXHJcbiAgICAgICAgZm9ybXVsYTogOSxcclxuICAgICAgICB0eXBlOiAnbnVtYmVyJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnZGVsZXRlJyxcclxuICAgICAgICBzeW1ib2w6ICdERUwnLFxyXG4gICAgICAgIGZvcm11bGE6IGZhbHNlLFxyXG4gICAgICAgIHR5cGU6ICdrZXknXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdhbGwtY2xlYXInLFxyXG4gICAgICAgIHN5bWJvbDogJ0FDJyxcclxuICAgICAgICBmb3JtdWxhOiBmYWxzZSxcclxuICAgICAgICB0eXBlOiAna2V5J1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnZm91cicsXHJcbiAgICAgICAgc3ltYm9sOiA0LFxyXG4gICAgICAgIGZvcm11bGE6IDQsXHJcbiAgICAgICAgdHlwZTogJ251bWJlcidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ2ZpdmUnLFxyXG4gICAgICAgIHN5bWJvbDogNSxcclxuICAgICAgICBmb3JtdWxhOiA1LFxyXG4gICAgICAgIHR5cGU6ICdudW1iZXInXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdzaXgnLFxyXG4gICAgICAgIHN5bWJvbDogNixcclxuICAgICAgICBmb3JtdWxhOiA2LFxyXG4gICAgICAgIHR5cGU6ICdudW1iZXInXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdtdWx0aXBsaWNhdGlvbicsXHJcbiAgICAgICAgc3ltYm9sOiAnw5cnLFxyXG4gICAgICAgIGZvcm11bGE6ICcqJyxcclxuICAgICAgICB0eXBlOiAnb3BlcmF0b3InXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdkaXZpc2lvbicsXHJcbiAgICAgICAgc3ltYm9sOiAnw7cnLFxyXG4gICAgICAgIGZvcm11bGE6ICcvJyxcclxuICAgICAgICB0eXBlOiAnb3BlcmF0b3InXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdvbmUnLFxyXG4gICAgICAgIHN5bWJvbDogMSxcclxuICAgICAgICBmb3JtdWxhOiAxLFxyXG4gICAgICAgIHR5cGU6ICdudW1iZXInXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICd0d28nLFxyXG4gICAgICAgIHN5bWJvbDogMixcclxuICAgICAgICBmb3JtdWxhOiAyLFxyXG4gICAgICAgIHR5cGU6ICdudW1iZXInXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICd0aHJlZScsXHJcbiAgICAgICAgc3ltYm9sOiAzLFxyXG4gICAgICAgIGZvcm11bGE6IDMsXHJcbiAgICAgICAgdHlwZTogJ251bWJlcidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ2FkZGl0aW9uJyxcclxuICAgICAgICBzeW1ib2w6ICcrJyxcclxuICAgICAgICBmb3JtdWxhOiAnKycsXHJcbiAgICAgICAgdHlwZTogJ29wZXJhdG9yJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnc3VidHJhY3Rpb24nLFxyXG4gICAgICAgIHN5bWJvbDogJy0nLFxyXG4gICAgICAgIGZvcm11bGE6ICctJyxcclxuICAgICAgICB0eXBlOiAnb3BlcmF0b3InXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICd6ZXJvJyxcclxuICAgICAgICBzeW1ib2w6IDAsXHJcbiAgICAgICAgZm9ybXVsYTogMCxcclxuICAgICAgICB0eXBlOiAnbnVtYmVyJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAncGknLFxyXG4gICAgICAgIHN5bWJvbDogJ8+AJyxcclxuICAgICAgICBmb3JtdWxhOiAnTWF0aC5QSScsXHJcbiAgICAgICAgdHlwZTogJ251bWJlcidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ3BlcmNlbnQnLFxyXG4gICAgICAgIHN5bWJvbDogJyYnLFxyXG4gICAgICAgIGZvcm11bGE6ICcvMTAwJyxcclxuICAgICAgICB0eXBlOiAnbnVtYmVyJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnZG90JyxcclxuICAgICAgICBzeW1ib2w6ICcuJyxcclxuICAgICAgICBmb3JtdWxhOiAnLicsXHJcbiAgICAgICAgdHlwZTogJ251bWJlcidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ2VxdWFsJyxcclxuICAgICAgICBzeW1ib2w6ICc9JyxcclxuICAgICAgICBmb3JtdWxhOiAnPScsXHJcbiAgICAgICAgdHlwZTogJ2NhbGN1bGF0ZSdcclxuICAgIH1cclxuXVxyXG5cclxuXHJcblxyXG5jb25zdCBpbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaW5wdXQnKTtcclxuXHJcbmlucHV0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgY29uc3QgdGFyZ2V0QnRuID0gZXZlbnQudGFyZ2V0O1xyXG5cclxuICAgIGNhbGN1X2J1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xyXG4gICAgICAgIGlmKGJ1dHRvbi5uYW1lID09PSB0YXJnZXRCdG4uaWQpe1xyXG4gICAgICAgICAgICBjYWxjdWxhdG9yKGJ1dHRvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSlcclxuXHJcbmZ1bmN0aW9uIGNhbGN1bGF0b3IoYnV0dG9uKXtcclxuICAgIGNvbnNvbGUubG9nKGJ1dHRvbilcclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==