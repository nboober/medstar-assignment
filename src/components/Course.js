import React from 'react';

class Course extends React.Component{
    render(){
        return(
            <div style={{width: "200px", height: "200px", display: "inline-block"}} >
                <h2>{this.props.course.title}</h2>
                <p>{this.props.course.description}</p>
            </div>
        )
    }
}

export default Course;