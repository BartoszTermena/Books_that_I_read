import React, { Component } from 'react';
import './App.scss';
import Spinner from './components/spinner/Spinner';
import Overlay from './components/overlay';
import Book from './components/book';

class App extends Component {
  state = {
    books: [],
    isLoaded: false
  }

  componentDidMount() {
    fetch("https://gist.githubusercontent.com/BartoszTermena/68b9ed87dedf14f59e515d49fb9afba8/raw/9f78bc14d466f12203e7d414a8cd734c94cd6f1f/myBooks.json")
    .then(res => res.json())
    .then(json => {
      this.setState({
        books: json,
        isLoaded: true
      })
    })
    .catch(err => {
      throw err;
    })
  }
  render() {
    let { isLoaded, books } = this.state;
    if(!isLoaded) {
      return (
      <Overlay>
        <Spinner /> 
      </Overlay>
      )
    } else {
      return (
        <div className="app">
          {books.map(book => (
            <Book 
            {...book} 
            key={book.id}/>
          ))}
        </div>
      );
    }
  }
}

export default App;
