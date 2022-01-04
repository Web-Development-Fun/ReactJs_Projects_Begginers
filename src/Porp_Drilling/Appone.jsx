import React, { useState } from 'react'
import DisplayCount from './DisplayCount';
import { countContext } from './Context';

function Appone() {

    const [count, setCount] = useState(0);
    return (
        <div className="App">
            <countContext.Provider value={{count,setCount}}>
                <DisplayCount />
            </countContext.Provider>
        </div>
    )
}

export default Appone
