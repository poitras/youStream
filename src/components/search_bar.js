import React, { Component } from 'react'
// const Component = React.Component

// class base component so we can add comportement
class SearchBar extends Component {

  constructor(props) {
    super(props)

    this.state = { term: '' }
  }

  // You always need a render function that return JSX
  render() {
    //return <input onChange={this.onInputChange} />
    return <input onChange={event => console.log(event.target.value)} />
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