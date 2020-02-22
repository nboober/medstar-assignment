import React from 'react'

class Instructor extends React.Component{
    render(){
        return(
            <div className="profile">
                <img src={this.props.instructor.image} alt="instructor image" />
                <h1>{this.props.instructor.name}</h1>
                <p>{this.props.instructor.description}</p>
                <p className="title">EMAIL: {this.props.instructor.email}</p>
            </div>
        )
    }
}

export default Instructor