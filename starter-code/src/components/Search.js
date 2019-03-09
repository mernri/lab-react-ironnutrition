import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        userInput: ""
    }
    this.handleUserInput = this.handleUserInput.bind(this)
  }

  handleUserInput = event => {
      this.setState({
          userInput: event.target.value
      })
  }

  render() {
    return (
      <div>
        <input className="input" type="text" placeholder="Find a Food" onChange={this.handleUserInput} value={this.state.userInput} />
        {/* <h1>{this.state.userInput}</h1> */}
      </div>
    );
  }
}

export default Search;
