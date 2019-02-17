import React, { Component } from 'react';
import Recipe from './Recipe';
import Navigation from './Navigation';

class App extends Component {
  constructor(props) {
    super(props);
    this.selectNewRecipe = this.selectNewRecipe.bind(this);
    this.state = {
      recipes: [
        {
          title: 'Bagel',
          ingredients: [
            '1 Bagel',
            'Cream cheese',
          ],
          steps: [
            'Slice bagel in half',
            'Spread on cream cheese',
            'Enjoy!',
          ],
          id: 'bagel',
        },
        {
          title: 'Pizza',
          ingredients: [
            '1 Pizza Crust',
            '1 Jar of Pizza Sauce',
            '3 oz Part-Skim Mozerella Cheese',
          ],
          steps: [
            'Put sauce on crust',
            'Sprinkle mozarella cheese over sauce',
            'Bake at 350 degrees for 20 minutes',
          ],
          id: 'pizza',
        },
      ],
      selectedRecipe: null,
    };
  }

  componentDidMount() {
    const recipeToShow = this.state.recipes[1].id || null;
    this.setState({
      // ...this.state,
      selectedRecipe: recipeToShow,
    });
  }

  selectNewRecipe(recipeId) {
    if (recipeId) {
      this.setState({
        // ...this.state,
        selectedRecipe: recipeId,
      });
    }
  }

  render() {
    let recipeToSelect;
    if (this.state.selectedRecipe) {
      const filteredRecipes = this.state.recipes.filter(recipe => recipe.id === this.state.selectedRecipe);
      if (filteredRecipes.length > 0) {
        recipeToSelect = filteredRecipes[0];
      }
    }
    return (
      <div className="App">
        <aside className="sidebar">
          <h1 className="sidebar__title">Recipe Book</h1>
          <Navigation
            recipes={this.state.recipes}
            recipeToSelect={this.selectNewRecipe}
            activeRecipe={this.state.selectedRecipe}
          />
        </aside>
        {
          recipeToSelect
            ? (
              <Recipe
                ingredients={recipeToSelect.ingredients}
                steps={recipeToSelect.steps}
                title={recipeToSelect.title}
              />
            )
            : null
        }
      </div>
    );
  }
}

export default App;
