import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './index.css';
import Contact from './Contact';
import About from './about';
import Error from './Error';
import User from './user';
import Menu from './Menu';
import Search from './search';

const App = () => {
  const Name=()=>{
    return <h1>My name is..</h1>
  }
  return(
  <>
    <Menu/>
    <Switch>
      <Route exact path="/" component={About} />
      <Route exact  path="/user/:name" component={User} />
      <Route exact  path="/contact" component={Contact} />
      <Route exact  path="/search" component={Search} />
      <Route path="/contact/name" component={Name} />
      <Route component={Error}/>
    </Switch>
  </>
  );
};


export default App;