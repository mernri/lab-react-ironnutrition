import React from "react";
import ReactDOM from "react-dom";
import "bulma/css/bulma.css";
import foods from "./foods.json";
import FoodBox from "./components/FoodBox.js";
import AddNewFood from "./components/AddNewFood.js";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foods: foods,
      showForm: false
    };
  }

  toggleForm = event => {
    this.setState({
      showForm: !this.state.showForm
    });
  };

  addFoodHandler = food => {
    const foodsCopy = [...this.state.foods];
    foodsCopy.push(food);
    this.setState({
      foods: foodsCopy
    });
  };

  // {...food} = spread operator. Permet de récupérer toutes les propriétés d'un objet

  render() {
    return (
      <div className="App">
        {/* Affiche le bouton pour afficher  */}
        <button onClick={this.toggleForm}> Add new Food </button>
        {this.state.showForm && (
          <AddNewFood
            foods={this.state.foods}
            addFood={food => this.addFoodHandler(food)}
          />
        )}

        {/* Affiche la liste des foodbox */}
        {this.state.foods.map((food, index) => {
          return <FoodBox key={index} {...food} />;
        })}
      </div>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
