import React from 'react';
import { Route } from 'react-router';
import { Main, Login, SignUp, Detail, Edit, PostWrite} from '../pages/index';
import './App.css';

function App() {
  return (
    <div className="App">
      <Route path="/" component={Main} exact></Route>
      <Route path="/login" component={Login} ></Route>
      <Route path="/signup" component={SignUp} ></Route>
      <Route path="/postwrite" component={PostWrite}></Route>
      <Route path="/edit" component={Edit} ></Route>
      <Route path="/detail" component={Detail} ></Route>
    </div>
  );
}

export default App;
