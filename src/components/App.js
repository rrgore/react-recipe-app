// import React, {
//   useEffect,
//   useState
// } from 'react';
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
import UserProfilePage from './UserProfilePage';
import FullRecipePage from './FullRecipePage';


function App() {
  /** State hooks */
  // const [userToken, setUserToken] = useState('');

  // useEffect(() => {        
  //     const token = sessionStorage.getItem('token');
  //     if( token && token !== '' ) {
  //         setUserToken( token );
  //     }
  // }, [userToken])

  // const userLoggedIn = () => ( userToken && userToken !== '' );

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
        <Route path="/profile">
          <UserProfilePage />
        </Route>
        <Route path="/recipe/:id">
          <FullRecipePage />
        </Route>
      </Switch>
  );
}

export default App;
