import React,{useState} from 'react';

function Movie(props) {
    
    return (
        <>
       <h1>{props.name}</h1>
       <h1>{props.price}</h1>
        </>
        )
}

export default Movie;
