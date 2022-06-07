import React from 'react'
import Button from './Button'

const Board = () => {
    return(
        <>
            <div className='row'>
                <Button value = '1'/>
                <Button value = '2'/>
                <Button value = '3'/>
            </div>
            <div className='row'>
                <Button value = '4'/>
                <Button value = '5'/>
                <Button value = '6'/>
            </div>
            <div className='row'>
                <Button value = '7'/>
                <Button value = '8'/>
                <Button value = '9'/>
            </div>
        </>
    )
}

export default Board;