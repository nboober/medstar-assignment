import React from 'react';
import Course from '../components/Course'

class CourseContainer extends React.Component{
    render(){
        return(
            <div>
                {this.props.courses ? this.props.courses.map(course=>{
                    return <Course key={course.title} course={course}/>
                })
            : null}
            </div>
        )
    }
}

export default CourseContainer;