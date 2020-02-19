import React from 'react';
import Course from '../components/Course'

class CourseContainer extends React.Component{
    render(){
        return(
            <>
                {this.props.courses ? this.props.courses.length === 0 ? "No Search results Found" : this.props.courses.map(course=>{
                    return <Course key={course.id} course={course} view={this.props.view}/>
                })
            : null}
            </>
        )
    }
}

export default CourseContainer;