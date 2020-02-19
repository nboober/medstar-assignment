import React from 'react'

class CoursePage extends React.Component{
    render(){
        return(
            <>
                {this.props.info ? 
                    <div style={{height: '70vh', width: '80vw', margin: '0 auto', marginTop: '5%'}}>
                        <h2>
                            {this.props.info.title}
                        </h2>
                        <hr/>
                        <p style={{marginTop: '2%'}}>
                            {this.props.info.description}
                        </p>

                        <button style={{width: '150px', margin: '0 auto', marginTop: '2%'}} className="btn btn-primary">
                            Sign Up
                        </button>

                    </div>
                : null}
            </>
        )
    }
}

export default CoursePage;