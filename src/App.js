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
      searchTerm: "",
      numberOfFilters: "",
      filterTerms: "",
      courses: courses,
      selectedCourse: ""
    }
  }

  componentDidMount = () => {

    let filter = [];

    courses.map((course)=>{
      filter.push(course.filter);
    })

    this.setState({
      numberOfFilters: filter.flat()
    })

  }

  searchCourses = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
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
                    <SearchBar search={this.searchCourses}/>
                    <Filter filters={this.state.numberOfFilters}/>
                    <CourseContainer courses={this.state.courses.filter((course)=>{
                      return course.title.toLowerCase().includes(this.state.searchTerm.toLowerCase())
                    })} view={this.viewSelectedCourse}/>
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
