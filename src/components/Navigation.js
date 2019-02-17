import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Navigation extends Component {
  constructor(props) {
    super(props);
    this.changeRecipe = this.changeRecipe.bind(this);
  }

  changeRecipe(id) {
    this.props.recipeToSelect(id);
  }

  render() {
    return (
      <div className="Navigation">
        <nav className="Navigation__nav">
          <ul className="Navigation__list">
            {
             this.props.recipes.map(recipe => (
               <li>
                 <button
                   type="button"
                   id={`${recipe.id}-button`}
                   key={recipe.id}
                   onClick={() => this.changeRecipe(recipe.id)}
                   className={`Navigation__button ${recipe.id === this.props.activeRecipe
                     ? 'Navigation__button--active' : ''}`}
                 >
                   {recipe.title}
                 </button>
               </li>
             ))
          }
          </ul>
        </nav>

      </div>
    );
  }
}

Navigation.propTypes = {
  recipes: PropTypes.array.isRequired,
  recipeToSelect: PropTypes.func.isRequired,
  activeRecipe: PropTypes.string.isRequired,
};

export default Navigation;
