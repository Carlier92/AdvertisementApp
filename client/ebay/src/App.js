import React, { Component } from 'react';
import './App.css';
import All from './components/All'
import Board from './containers/board'

class App extends Component {
  render() {
    return (
      <div>
        <Board />
      </div>
    )
  }
}

export default App;



{/* <Router>
<div className="App">
  <Route exact path='/advertisements/:id' component={singleAdvertisement} />
</div>
</Router> */}