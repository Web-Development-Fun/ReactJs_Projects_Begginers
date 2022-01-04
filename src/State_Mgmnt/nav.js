import { useContext } from "react"
import { MovieContext } from "./MovieContext"


function Nav(props) {
    // eslint-disable-next-line
    const [movies,setMovies]=useContext(MovieContext)
    return (
        <nav>
            <h3>Anil</h3>
            <p> Lsit of movies : {movies.length}</p>
        </nav>
        
    )
} 

export default Nav
