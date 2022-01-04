import React, { useContext } from 'react'
import Button from './Button'
import { countContext } from './Context'
function DisplayCount() {
    const{count}=useContext(countContext);
     return (
        <div>
            {count}
            <Button/>
        </div>
    )
}

export default DisplayCount

