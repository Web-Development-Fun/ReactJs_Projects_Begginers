import React, { useContext } from 'react'
import { countContext } from './Context'

function Button() {
    const {setCount}=useContext(countContext);
    return (
        <div>
            <button onClick={()=>setCount((count)=>count+1)}>Increase</button>
        </div>
    )
}

export default Button
