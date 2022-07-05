import React from 'react'
import styled from "styled-components"
import SearchIcon from './search.svg';
import { useState,useEffect } from 'react';
import Tada from 'react-reveal/Tada';

const API_URL='http://www.omdbapi.com/?i=tt3896198&apikey=19fbd290';

function Header() {

    // const [searchTerm, setSearchTerm] = useState('');
    // const [movies,setMovies] =useState([]);

    // const searchMovies = async (title) => {
    //     const response = await fetch(`${API_URL}&s=${title}`);
    //     const data = await response.json();
    //     // console.log(movies);
    //     setMovies(data.Search);
    //     console.log(setMovies);
    // }

    // useEffect ( () => {
    //     searchMovies('searchTerm');
    // },[]);

    return (
        <Container>
            <Tada>
            <h2>ShowsFlix</h2>
            </Tada>
            
            {/* <Menu>
                <li><a href="#">HOME</a></li>
                <li><a href="#">MOVIES</a></li>
                <li><a href="#">TV SHOWS</a></li>
                <li><a href="#">WEB SERIES</a></li>
                <li><a href="#">GENRE</a></li>
                
            </Menu> */}
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
            </UserSearch> */}
        </Container>
    )
}

export default Header
// export searchTerm;

const Container = styled.div`
    width:100%;
    h2{
        color:red;
        font-size:8vh;
        text-align:center;
    }
`

const Menu = styled.div`
    display:flex;
    ${'' /* display:none; */}
    list-style:none;
    justify-content:center;
    a{
        text-decoration:none;
        font-size:3vh;
        color:black;
    }
    li{
        ${'' /* border: 2px solid black; */}
        ${'' /* display:inline-block; */}
        border:2px solid grey;
        background-color:#d0b7b7;
        padding:1% 2% 1% 2%;
        margin:2% 0% 2% 0%;
        width:15%;
        text-align:center;
    }
`

const UserSearch = styled.div`
   
    form{
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
    }
`

