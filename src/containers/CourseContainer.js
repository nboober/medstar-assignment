import React from 'react';
import Course from '../components/Course'
import ListCourse from '../components/ListCourse'

class CourseContainer extends React.Component{
    render(){
        return(
            <>
                {this.props.courses ? 
                    this.props.courses.length === 0 ? 
                    
                        "No Search results Found" 
                        
                            : this.props.viewType === "box" ? 

                                this.props.courses.map(course=>{
                                
                                    return <Course key={course.id} course={course} view={this.props.view}/>                  

                                }) 
                                
                                :   <div class="list-group">
                                        {this.props.courses.map(course=>{
            
                                            return <ListCourse key={course.id} course={course} view={this.props.view} />
                                                
                                        })}

                                    </div>
                : null}
            </>
        )
    }
}

export default CourseContainer;