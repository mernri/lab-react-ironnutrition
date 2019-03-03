import React from "react";

class AddNewFoodForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      calories: this.props.calories,
      image: this.props.image
    };
  }

  handleChange = event => {
    let { name, value } = event.target;
    if (name === "calories" || name === "quantity") {
      value = parseInt(value);
    }
    this.setState({ [name]: value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.props.addFood(this.state);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Image:</label>
          <input
            type="text"
            name="image"
            value={this.state.image}
            onChange={e => this.handleChange(e)}
          />

          <label>Name</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={e => this.handleChange(e)}
          />

          <label>Number of calories: </label>
          <input
            type="number"
            name="calories"
            value={this.state.calories}
            onChange={e => this.handleChange(e)}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default AddNewFoodForm;
