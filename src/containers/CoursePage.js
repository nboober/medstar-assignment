import React from 'react'
import Book from '../components/Book'
import Video from '../components/Video'
import Instructor from '../components/Instructor'

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
                            <>
                                <Video/>

                                <div className="instContainer">
                                    <h2>Your Instructors</h2>
                                    {this.props.info.instructors.length > 0 ? this.props.info.instructors.map(instructor => {
                                        return <Instructor instructor={instructor} />
                                    }) : null}
                                </div>

                            </>
                        : null}

                        {this.props.info.courseType.book !== "n/a" ? 
                            <>
                                <Book info={this.props.info}/>

                                <div className="instContainer">
                                    <h2>Your Instructors</h2>
                                    {this.props.info.instructors.length > 0 ? this.props.info.instructors.map(instructor => {
                                        return <Instructor instructor={instructor} />
                                    }) : null}
                                </div>

                            </>
                        :null}


                    </div>
                : null}
            </>
        )
    }
}

export default CoursePage;