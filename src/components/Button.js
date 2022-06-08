import React from 'react'

const Button = ({ value }) => {
    return(
        <>
            <button type="button" className='button'>{ value }</button>
        </>
    )
}

export default Button;