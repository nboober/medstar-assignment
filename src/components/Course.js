import React from 'react';
import {Link} from 'react-router-dom'

class Course extends React.Component{
    render(){
        return(
            <Link to='/course' style={{width: "200px", height: "200px", display: "inline-block"}} onClick={()=>this.props.view(this.props.course)} >
                <h2>{this.props.course.title}</h2>
                <p>{this.props.course.description}</p>
            </Link>
        )
    }
}

export default Course;