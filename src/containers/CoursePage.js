import React from 'react'
import Book from '../components/Book'

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

                        <div className="videoContainer">
                            <video className="video" controls>
                                <source src="movie.mp4" type="video/mp4" />
                                <source src="movie.ogg" type="video/ogg" />
                                Your browser does not support the video tag.
                            </video> 
                        </div>

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