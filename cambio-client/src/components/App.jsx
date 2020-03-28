import React from 'react';
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
  );
}

export default App;
