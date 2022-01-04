import React,{useState} from 'react'
import { createContext } from 'react/cjs/react.development';



export const MovieContext=createContext();


export function MovieProvider(props) {

    const [movies,setMovies]=useState([

        {
            name:"Harry",
            price:'$10',
            id:1
        },
    
        {
            name:"potter",
            price:'$10',
            id:4
        },
    
        {
            name:"Inception",
            price:'$10',
            id:3
        },
    
        {
            name:"godzilla",
            price:'$10',
            id:2
        } 
    ]);
    return (
        <MovieContext.Provider value={[movies,setMovies]}>
            {props.children}
        </MovieContext.Provider>
        )
}
export default MovieProvider
