import logo from './logo.svg';
import './App.css';
import { useState } from "react";

import axios from 'axios';


function App() {

  const[book, setBook] = useState("");
  const[result, setResult] = useState([]);
  const[apiKey, setApiKey] = useState("AIzaSyB3TefP1Ask31kcsQbW1VliSnMXLyTMHg4");

  function handleChange(event){

    const book = event.target.value;

    axios.get("https://www.googleapis.com/books/v1/volumes?q=" + book + "&key=" + "AIzaSyB3TefP1Ask31kcsQbW1VliSnMXLyTMHg4" )
    .then(data => {
      setResult(data.data.items);
    })

  }

  function handleSubmit(event){
    event.preventDefault();
    console.log(book);
  }

  return (
    <div className = "container">
      <h1>Book Search</h1>
      <form onSubmit={handleSubmit}>
        <div className ="formgrp">
          <input 
          type="text" onChange={handleChange}
          className="formctrl mt-10" 
          placeholder="Search for Books"
          />
        </div>
        <button type="submit" className="btn">
          Search
        </button>
      </form>

      {result.map(book => (
        
        <p>
          <p>Author: {book.volumeInfo.authors}</p>
          <p>Title: {book.volumeInfo.title}</p>

          <img src = {book.volumeInfo.imageLinks.thumbnail} alt={book.title} />
          <p>{book.volumeInfo.description}</p>

          
        
          <a>{book.volumeInfo.infoLink}</a>
        
        </p>
        
      ))}
        
    </div>
  );
}

export default App;
