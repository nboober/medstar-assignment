import React from 'react'

class Video extends React.Component{
    render(){
        return(
            <div className="videoContainer">
                <video className="video" controls>
                    <source src="movie.mp4" type="video/mp4" />
                    <source src="movie.ogg" type="video/ogg" />
                    Your browser does not support the video tag.
                </video> 
            </div>  
        )
    }
}

export default Video