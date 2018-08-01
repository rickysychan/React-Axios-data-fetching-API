import React, { Component } from 'react';
import './App.css';
import SearchForm from './Components/SearchForm';
import GifList from './Components/GifList';
import axios from 'axios'

export default class App extends Component {
  
  constructor() {
    super();
    this.state = {
      gifs: [],
      loading: true  
    }
  } 

  componentDidMount(){
    axios.get('http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC')
      .then(responseData => this.setState({
        gifs: responseData.data.data,
        loading: false
      }))
      .catch(error => console.log('error in fetching and parsing data: ', error))

    //using fetch

    // fetch('http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC')
    //   .then(response => response.json())
    //   .then(responseData => {
    //     this.setState({ gifs: responseData.data })
    //   })
    //   .catch(error => console.log('error in fetching and parsing data: ', error))
  }

  performSearch = (query = 'cats') => {
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=dc6zaTOxFJmzC`)
      .then(responseData => this.setState({
        gifs: responseData.data.data,
        loading: false
      }))
      .catch(error => console.log('error in fetching and parsing data: ', error))
  }

  render() { 
    console.log(this.state.gifs)
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">GifSearch</h1>
            <SearchForm performSearch={this.performSearch}/>      
          </div>   
        </div>    
        <div className="main-content">
          {
            this.state.loading ?
            <p> Loading </p>
            :
              <GifList data={this.state.gifs}/>
          }
        </div>
      </div>
    );
  }
}
