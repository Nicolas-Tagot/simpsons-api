import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import axios from 'axios';
import QuoteCard from './components/QuoteCard';


const nelsonMuntz = {
    quote : 'Shoplifting is a victimless crime, like punching someone in the dark.',
    character : "Nelson Muntz",
    }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.getSim = this.getSim.bind(this);
    this.state = {
      charactere: nelsonMuntz,
  }


}


getSim() {

  axios.get('https://thesimpsonsquoteapi.glitch.me/quotes')
  .then(response => response.data)
  .then(data => {
      console.log(data)
      this.setState({
        charactere: data[0],
      });
  });
}
  render() {
    return (
      <div className="App">
        <Navbar />
      <button type="button" onClick={this.getSim}>Get Quote</button>
        <QuoteCard charactere={this.state.charactere} />
      </div>
    );
  }
}


export default App;
