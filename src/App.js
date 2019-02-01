import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Crime from './Screens/crime';
import { getCategories, getForce, getCrime } from './config/api';

class App extends Component {
  render() {
    // getCategories()
    //   .then(res => {
    //       console.log(res)
    //   })
    //   .catch(e=> {
    //       console.log(e)
    //   }
    // )
    // getForce()
    //   .then(res => {
    //       console.log(res)
    //   })
    //   .catch(e=> {
    //       console.log(e)
    //   }
    // )
    // getCrime('all-crime', 'leicestershire')
    //   .then(res => {
    //       console.log(res)
    //   })
    //   .catch(e=> {
    //       console.log(e)
    //   }
    // )
    return (
      <div className="App">
        <h1>CRIME APP</h1>
        <Crime category={getCategories} force={getForce} crime={getCrime}/>
      </div>
    );
  }
}

export default App;
