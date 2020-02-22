import React from 'react'
import Book from '../components/Book'
import Video from '../components/Video'

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
                        <h4>Description:</h4>
                        <p className="description">
                            {this.props.info.description}
                        </p>

                        {this.props.info.courseType.video !== "n/a" ? 

                            <Video/>

                        : null}

                        {this.props.info.courseType.book !== "n/a" ? 

                            <Book info={this.props.info}/>
                        
                        :null}


                    </div>
                : null}
            </>
        )
    }
}

export default CoursePage;