import React from 'react'

class CoursePage extends React.Component{
    render(){
        return(
            <div>
                <h2>
                    {this.props.info.title}
                </h2>
            </div>
        )
    }
}

export default CoursePage;