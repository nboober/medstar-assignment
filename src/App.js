import React from 'react';
import courses from './courses/courses'
import SearchBar from './components/SearchBar'
import Filter from './components/Filter'
import CourseContainer from './containers/CourseContainer'
import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      courses: courses
    }
  }

  render(){
    return(
      <div>
        <SearchBar/>
        <Filter/>
        <CourseContainer courses={this.state.courses}/>
      </div>
    )
  }
}

export default App;
