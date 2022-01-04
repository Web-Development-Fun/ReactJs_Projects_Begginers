import React, { useState } from 'react'
import { useContext } from 'react/cjs/react.development';
import { MovieContext } from './MovieContext';


function AddMovie() {


    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const[movies,setMovies]=useContext(MovieContext);

    const updateName = e => {
        setName(e.target.value)
    }
    const updateprice = e => {
        setPrice(e.target.value)
    }

    const addMovie = e => {
        e.preventDefault();
        setMovies(prevMovies=>[...prevMovies,{name:name,price:price}])
    };

    return (
        <form onSubmit={addMovie}>
            <input type="text" name="name" value={name} onChange={updateName} />
            <input type="text" name="price" value={price} onChange={updateprice} />
            <button>Submit</button>
        </form>
    )
}

export default AddMovie
