import React from 'react';
import './App.css';
import {Route,Switch,Link} from "react-router-dom";
import GetAll from './GetAll';
import GetOne from './GetOne';
import CreateRecords from './CreateRecords';
import UpdateRecords from './UpdateRecords';

function App() {
  return (
    <div className="App">
       <Switch>
        <Route exact path="/" component={GetAll}/>
        <Route  path="/GetOne" component={GetOne}/>
        <Route  path="/CreateRecords" component={CreateRecords}/>
        <Route  path="/UpdateRecords" component={UpdateRecords}/>
       </Switch>
      <Link to="/GetOne">GetOne Record </Link> <br/>
      <Link to="/CreateRecords">Create Record</Link> <br/>
      <Link to="/UpdateRecords">Update Record</Link> <br/>
    </div>
  );
}

export default App;
