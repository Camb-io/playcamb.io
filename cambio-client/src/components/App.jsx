import React from 'react';
<<<<<<< HEAD
import { Table } from './Table'
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <main className="app-container">
      <Switch>
        <Route exact path="/:slug" component={Table}/>
        <Route exact path="/" render={() => <div>SPLASH</div>}/>
      </Switch>
    </main>
=======
import Board from './Board/Board.main'

function App() {
  return (
    <div className="App">
      <Board/>
    </div>
>>>>>>> decks and resizing the card, setting hand inside of current user
  );
}

export default App;
