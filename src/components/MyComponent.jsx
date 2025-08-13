import React, { useState, useContext } from 'react'
import { MyContext } from '../context/MyContext'
const MyComponent = () => {
    const { value, setValue } = useContext(MyContext)
    return (
        <div>
            <p>
                {value}
            </p>
            <button
                onClick={() => setValue("Update from Component!")}
            >update</button>
        </div>
    )
}

export default MyComponent