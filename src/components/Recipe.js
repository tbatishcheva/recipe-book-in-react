import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Recipe extends Component {
  render() {
    const ingredients = this.props.ingredients.map((ingredient, i) => <li key={i}>{ingredient}</li>);
    const steps = this.props.steps.map((step, i) => <li key={i}>{step}</li>);

    return (
      <div className="Recipe">
        <h2>{this.props.title}</h2>
        <h3>Ingredients</h3>
        <ul>
          {ingredients}
        </ul>
        <h3>Steps</h3>
        <ul>
          {steps}
        </ul>
      </div>
    );
  }
}

Recipe.propTypes = {
  ingredients: PropTypes.array.isRequired,
  steps: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default Recipe;
