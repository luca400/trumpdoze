import { React, useState } from 'react';
import './css/App.css';


function App() {


  async function getRandomQuote() {
    // setLoading(true);
    const response = await fetch('https://tronalddump.io/random/quote');
    console.log(response);
    const json = await response.json();
    console.log(json);
    setRandomQuote(json.value);
    setAuthor(json._embedded.author[0].name);
    // setLoading(false);
  }

  // function img(props) {
  //   return <img src='https://giphy.com/gifs/3oEjI6SIIHBdRxXI40/html5' />;
  // }

  // function quote(props) {
  //   return >;
  // }

  // function element(props) {
  //   const isLoading = props.isLoading;
  //   if (isLoading) {
  //     return <img />;
  //   }
  //   return <quote />;
  // }

  const [loading, setLoading] = useState(false);
  const [randomQuote, setRandomQuote] = useState('');
  const [author, setAuthor] = useState('');

  return (
    <div>
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand"><span className='orange'>TRUMP</span> Doze</a>

        </div>
      </nav>
      <div className='quoteSection card'>
        <div className='card-body'>
          <figure class="text-center">
            <blockquote class="blockquote">
              <p class='main'>{randomQuote}</p>
            </blockquote>
            <figcaption class="blockquote-footer">
              {author}
            </figcaption>
          </figure>

        </div>
      </div>
      <button id='quoteButton' onClick={getRandomQuote} type='button' class='btn btn-warning'>Get Trumptized</button>


    </div>

  );
}

export default App;
