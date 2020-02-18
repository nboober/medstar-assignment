import React from 'react';
import {Switch,Route} from 'react-router-dom'
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
      
        <Switch>

          <Route exact path='/' render={()=>{
            return <div>
                    <SearchBar/>
                    <Filter/>
                    <CourseContainer courses={this.state.courses} view={this.viewSelectedCourse}/>
                  </div>
          }}/>
          
          <Route exact path='/course'>
            <CoursePage info={this.state.selectedCourse}/>
          </Route>


        </Switch>

    )
  }
}

export default App;
