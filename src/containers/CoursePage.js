import React from 'react'

class CoursePage extends React.Component{
    constructor(){
        super();
        this.state={
            page: 0
        }
    }

    pageTurner = (direction) => {
        let newPage = this.state.page += direction;

        if(newPage > this.props.info.courseType.book.length-1){
            newPage = 0
        }else if(newPage < 0){
            newPage = this.props.info.courseType.book.length-1;
        }

        this.setState({
            page: newPage
        })

    }

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
                        <div className="book">

                            <p className="oswalt-font">{this.props.info.courseType.book[this.state.page]}</p>

                            <div className="pageTurnerButtons">
                                <button className="btn btn-primary" onClick={() => this.pageTurner(-1)}>Previous Page</button>
                                <button className="btn btn-primary" onClick={() => this.pageTurner(1)}>Next Page</button>
                            </div>
                        </div>
                        :null}


                    </div>
                : null}
            </>
        )
    }
}

export default CoursePage;