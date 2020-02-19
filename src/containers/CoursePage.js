import React from 'react'

class CoursePage extends React.Component{
    render(){
        return(
            <>
                {this.props.info ? 
                    <div className="coursePage">
                        <h2>
                            {this.props.info.title}
                        </h2>
                        <hr/>
                        <p style={{marginTop: '2%'}}>
                            {this.props.info.description}
                        </p>

                        <button id="signUpButton" className="btn btn-primary">
                            Sign Up
                        </button>

                    </div>
                : null}
            </>
        )
    }
}

export default CoursePage;