import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';

import HomePage from './HomePage';
import LoginPage from './LoginPage';
import RecipesPage from './RecipesPage';
import TagsPage from './TagsPage';
import IngredientsPage from './IngredientsPage';


function App() {
  return (
    
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/recipes">
          <RecipesPage />
        </Route>
        <Route path="/tags">
          <TagsPage />
        </Route>
        <Route path="/ingredients">
          <IngredientsPage />
        </Route>
      </Switch>
  );
}

export default App;
