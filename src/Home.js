import React from "react";
import styled from "styled-components";
import Item from "./Item";
// import Header from "./Header";
import SearchIcon from './search.svg';
import { useState,useEffect } from 'react';
// import Fade from 'react-reveal/Fade';
// import { useState,useEffect } from 'react';
// const movie1={
//     "Title": "Italian Spiderman",
//     "Year": "2007",
//     "imdbID": "tt2705436",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg"
// }

const API_URL='http://www.omdbapi.com/?i=tt3896198&apikey=19fbd290';
function Home () {
    const [movies,setMovies] =useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        // console.log(movies);
        setMovies(data.Search);
        console.log(setMovies);
    }

    useEffect ( () => {
        searchMovies('batman');
    },[]);
    
    
    
    return (
        // {
        //     movies.lenght > 0
        //      ? (
        //         <Container>
        //             <Item movie={movies[0]}/>
        //         </Container>
        //      )
        // }
        
        <Container1>
        {/* <UserSearch>
        <form>
                    <input
                        placeholder='Search here..'
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button type="submit">
                        <img 
                        src={SearchIcon}
                        alt='search'
                        onClick={ () => searchMovies(searchTerm)}
                        />
                    </button>
                    
                </form>
        </UserSearch>     */}

        <div className="search">
            <input 
                id="Search-Bar"
                placeholder="Search for movies..."
                value={searchTerm}
                onChange={ (e) => setSearchTerm(e.target.value)}
            />
            <img 
                id="Search-Image"
                src={SearchIcon}
                alt="Search"
                onClick={ () =>searchMovies(searchTerm)}
            />
        </div>
            
            {movies?.length > 0
             ? (
                
                <Container> 
                    {movies.map( (movie) => (
                        <Item movie={movie} />
                    ) )}
                </Container> 
               
                
             ) : (
             <div>
                <h1>No movies found</h1>
             </div>)
            }
        </Container1> 

    )
}

export default Home


const Container = styled.div`
    ${'' /* border:2px solid red; */}
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:start;
    margin:5% 5% 0 5%;
    
    
`

const Container1=styled.div`
    
`

const UserSearch = styled.div`
   
    ${'' /* form{
        display:flex;
        justify-content:center;
    }
    form input{
        border:1px solid black;
        width:30%;
        height:5vh;
        font-size:3vh;
        background-color:#d1d1d1;
    }
    form button{
        width:2%;
        background-color:#bed4ca;
    } */}
`