import React from 'react';
import { Switch,Route } from 'react-router-dom'
import courses from './courses/courses'
import SearchBar from './components/SearchBar'
import Filter from './components/Filter'
import CourseContainer from './containers/CourseContainer'
import CoursePage from './containers/CoursePage'
import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      courses: courses,
      selectedCourse: ""
    }
  }

  viewSelectedCourse = (course) => {
    this.setState({
      selectedCourse: course
    })
  }

  render(){
    return(
      <div>
        <Switch>
          
          <Route exact to='/'>
            <SearchBar/>
            <Filter/>
            <CourseContainer courses={this.state.courses} view={this.viewSelectedCourse}/>
          </Route>

          <Route exact to='/course'>
            <CoursePage info={this.state.selectedCourse}/>
          </Route>

        </Switch>
      </div>
    )
  }
}

export default App;
