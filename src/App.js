import React from 'react';
import {Switch,Route} from 'react-router-dom'
import allCourses from './courses/courses'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
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
      filterTerms: [],
      courses: allCourses,
      selectedCourse: ""
    }
  }

  componentDidMount = () => {
    this.setFilterValues();
  }

  searchCourses = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  setFilterValues = () => {
    let filter = [];

    allCourses.forEach((course)=>{
      filter.push(course.filter);
    })

    this.setState({
      numberOfFilters: [...new Set(filter.flat())].sort()
    })
  }

  filterCourses = (event) => {
    console.log(event.target.value)

    if(this.state.filterTerms.includes(event.target.value)){

      let index = this.state.filterTerms.indexOf(event.target.value);
      this.state.filterTerms.splice(index,1);
      let newTermList = this.state.filterTerms;

      this.setState({
        filterTerms: newTermList
      },()=>{this.setCourses()})

    }else{

      let array = this.state.filterTerms;
      array.push(event.target.value);

        this.setState({
          filterTerms: array
        },()=>{this.setCourses()})

    }

  }

  setCourses = () => {

      let newCourseList = [];

      if(this.state.filterTerms.length > 0){

        allCourses.forEach(course=>{
          if(course.filter.some(filter => this.state.filterTerms.includes(filter))){
            newCourseList.push(course);
          }
        })
      
        this.setState({
          courses: newCourseList
        })
        
      }else{
        
        this.setState({
          courses: allCourses
        })

      }

  }

  viewSelectedCourse = (course) => {
    this.setState({
      selectedCourse: course
    })
  }

  render(){
    return(
      <>

        <NavBar/>
        
        <Switch>

          <Route exact path='/' render={()=>{
            return <div style={{width: "80%", margin: "0 auto", color: "black"}} >

                      <div style={{display: "inline-block", height: "60vh", marginTop: "10%", background: "gray", padding: '40px'}}>
                        <SearchBar search={this.searchCourses}/>
                        <Filter filters={this.state.numberOfFilters} filter={this.filterCourses}/>
                      </div>

                      <div style={{display: "inline-block", width: "80%", textAlign: "center", float: "right", marginTop: "5%"}}>
                        <CourseContainer courses={this.state.courses ? this.state.courses.filter((course)=>{
                          return course.title.toLowerCase().includes(this.state.searchTerm.toLowerCase())
                        }):null} view={this.viewSelectedCourse}/>
                      </div>

                    </div>
          }}/>
          
          <Route exact path='/course'>
            <CoursePage info={this.state.selectedCourse}/>
          </Route>


        </Switch>

        <Footer/>
        
      </>
    )
  }
}

export default App;
