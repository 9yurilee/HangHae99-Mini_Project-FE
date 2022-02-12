import React from 'react';
import { Route } from 'react-router';
import { Main, Login, Register, Detail, Edit, PostWrite} from '../pages/index';
import './App.css';
import Header from '../component/Header'

function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/" component={Main} exact></Route>
      <Route path="/login" component={Login} ></Route>
      <Route path="/register" component={Register} ></Route>
      <Route path="/postwrite" component={PostWrite}></Route>
      <Route path="/edit" component={Edit} ></Route>
      <Route path="/detail" component={Detail} ></Route>
    </div>
  );
}

export default App;
