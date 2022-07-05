// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Home from './Home';
// import { useState,useEffect } from 'react';
// import SearchIcon from './search.svg';
// 19fbd290

// const API_URL='http://www.omdbapi.com/?i=tt3896198&apikey=19fbd290';

function App() {
  // const [movies,setMovies] =useState([]);
  // const searchMovies = async (title) => {
  //   const response = await fetch(`${API_URL}&s=${title}`);
  //   const data = await response.json();

  //   setMovies(data.Search);
  // }

  // useEffect ( () => {
  //   searchMovies('Spiderman');
  // },[]);
  return (
    <div className="App">
      <Header/>
      <Home/>
    </div>
  );
}

export default App;
