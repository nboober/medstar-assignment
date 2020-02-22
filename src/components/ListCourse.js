import React from 'react'
import {Link} from 'react-router-dom'

class ListCourse extends React.Component{
    render(){
        return(
            <div>
                <Link to='/course' className="list-group-item list-group-item-action list-group-item-info" onClick={()=>this.props.view(this.props.course)} >
                    <h2>{this.props.course.title}</h2>
                    <p>{this.props.course.description.substring(0, 100)}</p>
                </Link>
            </div>
        )
    }
}

export default ListCourse