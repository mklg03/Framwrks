
import './App.css';
import React, { useState, useEffect } from 'react';



const GIFS = [
  'https://media2.giphy.com/media/p01H8mAU7geAw/giphy.gif?cid=ecf05e47f7351d0ad0a93a924e15f47a30373bfd0ed96891&rid=giphy.gif',
  'https://media0.giphy.com/media/EPcvhM28ER9XW/giphy.gif?cid=ecf05e471fe1750ee7b9ae81b63da08554ea780f15736904&rid=giphy.gif'
];

const DIFFERENT_GIFS = [
  'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExYnptdzhmeWswbWJqd3Vna3czbTl6N3huZ3Y0NHcwODU5Mml1cXhjbyZlcD12MV9naWZzX3RyZW5kaW5nJmN0PWc/OjmrBW4ZQbWjkq6RkC/giphy.webp'
  
];

function App() {
  const [gifs, setGifs] = useState(GIFS);

  useEffect(function() {
    setGifs(DIFFERENT_GIFS)
  }, [])


  return (
    <div className="App">
      <section className="App-content">
        {gifs.map(singleGif => (
          <img src={singleGif} alt="gif" key={singleGif} />
        ))}
          <button onClick={()=> setGifs(DIFFERENT_GIFS)}>Cambiar gifs   </button>
      </section>
    </div>
  );
}

export default App;



