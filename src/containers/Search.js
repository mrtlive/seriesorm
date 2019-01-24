import React, { Component } from 'react'
import axios from 'axios'

import Suggestions from './Suggestions'

const API_KEY = "b057a775c59a798f1c16d2979343aa79"
const API_URL = 'https://api.themoviedb.org/3/search/movie'

class Search extends Component {
  state = {
    error: false,
    query: '',
    results: []
  }


  getInfo = () => {
    axios.get(`${API_URL}?api_key=${API_KEY}&language=en-US&query=${this.state.query}&page=1&include_adult=false`)
      .then(({ data }) => {
        this.setState({
          results:data.results
        })
      })
      .catch(() => this.setState({ error: true }))
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        // this.showDropdown()
        if (this.state.query.length > 0) {
          this.getInfo()
        }
      } else if (!this.state.query) {
        // this.hideDropdown()
      }
    })
  }

  render() {
    return (
      <form>
        <input
          placeholder="Filmi aramak için..."
          ref={input => this.search = input}
          onChange={this.handleInputChange}
        />
        <Suggestions results={this.state.results} />
      </form>
    )
  }
}

export default Search
