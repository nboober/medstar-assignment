import React from 'react'

class CoursePage extends React.Component{
    render(){
        return(
            <>
                {this.props.info ? 
                <div>
                    <h2>
                        {this.props.info.title}
                    </h2>
                    <p>
                        {this.props.info.description}
                    </p>
                </div>
                : null}
            </>
        )
    }
}

export default CoursePage;