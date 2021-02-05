import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Traininglist from './component/Traininglist';
import Customerlist from './component/Customerlist';
import Calendar from './component/Calendar';
import Navigator from './component/Navigator';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gym Application</h1>
        </header>
        <BrowserRouter>
        <div>
        <Navigator/>        
        <Switch>
        <Route exact path="/" render={() => <h1> Home </h1>  }/>
        <Route path="/traininglist"component={Traininglist}/>
        <Route path="/customerlist"component={Customerlist}/>
        <Route path="/calendar"component={Calendar}/>        
        </Switch>
        <p> Please select "Training", "Customer" or "Calendar" tabs to see the lists</p>
        </div>
        </BrowserRouter>   
      </div>
    );
  }
}

export default App;
