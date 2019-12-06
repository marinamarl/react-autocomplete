import React, { Component } from 'react'
import axios from 'axios'

const GET_URL = 'http://35.180.182.8/Search'

class Search extends Component {

  state = {
    keywords: '',
    language:'',
    textInput:'',
    results: []
  }

    getInfo = () => {
      setTimeout(() => {
      axios.get(`${GET_URL}?keywords=${this.state.keywords}&language=${this.state.language}&limit=20`)
        .then(({ data }) => {
          this.setState({
            results: data.entries
          })
        })
        //.catch(console.log) TODO:remove in production
      }, 3000)
    }

  handleInputChange = (event) => {
    this.setState({
      keywords: this.search.value,
      language: navigator.userLanguage||navigator.language === 'el' ? 'el' : 'en',
      textInput:this.search.value
      //note: the method of detecting the language via browser preferences
      //prevents the user from having their browser preferences in english whilst
      //typing in greek and recieving results. Setting browser preferences in greek
      //and typing in english gives -some- results because the returning api has some latin characters.
    }, () => {
      if (this.state.keywords && this.state.keywords.length > 1) {
          this.getInfo()
      }
    })
  }
  resultSelected = (value) => {
    this.setState(() => ({
      textInput:value
    }))
  }

  googleSearch = (event) => window.open("//google.com/search?q=" + this.state.textInput, '_blank')

  render() {
    const {results} = this.state
    const {textInput} = this.state
    return (
      <div className='form-wrap'>
          <form>
          <div className ='input-icons-wrap'>
            <i className="fa fa-search"></i>
              <input
                placeholder='type a location'
                type='search'
                value={textInput}
                ref={input => this.search = input}
                onChange={this.handleInputChange}
              />
              <i class="fa fa-microphone"></i>
            </div>
          <ul>
          {results.map((result) => <li onClick={() => this.resultSelected(result.name)}> {result.name} </li>)}
          </ul>
          </form>
        <div className='button-wrap'>
          <button className = {results.length > 0 ? 'active-button':'non-active-button'} onClick={results.length > 0 ? this.googleSearch : null} type='submit'>Click to search</button>
        </div>
      </div>
    )
  }
}

export default Search
