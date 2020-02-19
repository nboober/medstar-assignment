import React from 'react';
import {Link} from 'react-router-dom';

class Course extends React.Component{
    render(){
        return(
            <Link to='/course' style={{display: "inline-block", margin: "10px"}} onClick={()=>this.props.view(this.props.course)} >
                    <div className="card text-white bg-info mb-3" style={{maxWidth: "18rem"}}>
                        <div className="card-body">
                            <h5 className="card-title">{this.props.course.title}</h5>
                            <p className="card-text">{this.props.course.description}</p>
                        </div>
                    </div>
            </Link>
        )
    }
}

export default Course;