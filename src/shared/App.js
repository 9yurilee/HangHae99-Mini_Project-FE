import React from 'react';
import { Route } from 'react-router';
import './App.css';
import {Detail, Login, Main, PostWrite, SignUp, Edit} from '../pages/index';

function App() {
  return (
    <div className="App">
      <Route path={'/'} component={Main} exact/> 
      <Route path={'/login'} component={Login}/>
      <Route path={'/signup'} component={SignUp}/>
      <Route path={'/write'} component={PostWrite} exact/>
      <Route path={'/edit'} component={Edit}/>
      <Route path={'/detail'} component={Detail}/>
      {/* /detail => /detail/:id 로, /edit => /postwrite/:id로 */}
    </div>
  );
}

export default App;
