import React from 'react'


export default function Button({button, calculator}) {
    const onButtonClick = () => {
        calculator(button)
    }

    return (
        <button 
            onClick={onButtonClick}
            className='text-lg w-10 h-8 mobile:w-16 mobile:h-12 bg-slate-300 rounded-md font-semibold shadow-button'
        >
            {button.symbol}
        </button>
    )
}
