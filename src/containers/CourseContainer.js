import React from 'react';
import Course from '../components/Course'
import ListCourse from '../components/ListCourse'

class CourseContainer extends React.Component{
    render(){
        return(
            <>
                {this.props.courses ? this.props.courses.length === 0 ? "No Search results Found" : this.props.courses.map(course=>{
                    return this.props.viewType === "box" ? <Course key={course.id} course={course} view={this.props.view}/> : <ListCourse key={course.id} course={course} view={this.props.view} />
                })
            : null}
            </>
        )
    }
}

export default CourseContainer;