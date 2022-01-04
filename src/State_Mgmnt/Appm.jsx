import React , {useState} from 'react'
//import {MovieProvider} from './MovieListContext';
import MovieList from './MovieList';
import Nav from './nav';
import MovieProvider from './MovieContext';
import AddMovie from './AddMovie';


function Appm() {

    return (
        <MovieProvider>     
        <div>
            <Nav/>
            <AddMovie/>
            <MovieList />
        </div></MovieProvider>
    )
}

export default Appm;
