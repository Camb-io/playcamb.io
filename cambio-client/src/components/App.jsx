import React from 'react';
import { Table } from './Table'
import { Route, Switch } from 'react-router-dom'
import { Simulator } from './Simulator';

function App() {
  return (
    <main className="app-container">
      <Simulator />
      <Switch>
        <Route exact path="/:slug" component={Table}/>
        <Route exact path="/" render={() => <div>SPLASH</div>}/>
      </Switch>
    </main>
  );
}

export default App;
