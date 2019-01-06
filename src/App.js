import React, { Component } from 'react';
import './App.scss';
import Spinner from './components/spinner/Spinner';
import Overlay from './components/overlay';
import Book from './components/book';
import BookGrid from './components/bookGrid';

class App extends Component {
  state = {
    books: [],
    isLoaded: false
  }

  componentDidMount() {
    fetch("https://gist.githubusercontent.com/BartoszTermena/1850d8b12f0be467a9e55c65275e7b52/raw/8a7419555e923518fbbcde36576b1036dd097290/myBooks.json")
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
          <BookGrid>
            {books.map(book => (
              <Book 
              {...book} 
              key={book.id}/>
            ))}
          </BookGrid>
        </div>
      );
    }
  }
}

export default App;
