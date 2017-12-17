import React, { Component } from 'react'
// const Component = React.Component

// class base component so we can add comportement
class SearchBar extends Component {
  constructor(props) {
    // call the function from its parent Component
    super(props)

    // We pass a object to state
    this.state = { term: '' }
  }

  // You always need a render function that return JSX
  render() {
    //return <input onChange={this.onInputChange} />
    return (
      <div>
        <input
          value={this.state.term} 
          onChange={event => this.setState({ term: event.target.value })} />
        <p>{this.state.term}</p>
      </div>
    )
  }

  // onInputChange(event) {
  //   console.log('>>>>>>', event.target.value); 
  // }

}

// Functionnal component that return plain JSX
// const SearchBar = () => {
//   return <input />
// }

export default SearchBar