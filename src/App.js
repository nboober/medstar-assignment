import React from 'react';
import courses from './courses'
import './App.css';

class App extends React.Component{

  componentDidMount = () => {
    console.log(courses)
  }

  render(){
    return(
      <div>
        hello
      </div>
    )
  }
}

export default App;
