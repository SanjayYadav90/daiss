import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Header from './containers/Headers/Header';
import Home from './containers/Homes/Home'
import Footer from './containers/Footers/Footer'

const Routing = props => (
  <div>
    <Switch>
      <Route path="/" exact component={Home} />
      {/* <Route path="/about" component={About} /> */}
    </Switch>
  </div>
)

function App() {
  return (
    <Router>
        <Header />        
          <Routing/>
        <Footer/>
    </Router>
  );
}

export default App;
