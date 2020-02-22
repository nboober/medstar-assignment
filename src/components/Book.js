import React from 'react'

class Book extends React.Component{
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
            <div className="book">

                <p className="oswalt-font">{this.props.info.courseType.book[this.state.page]}</p>

                <div className="pageTurnerButtons">
                    <button className="btn btn-primary" onClick={() => this.pageTurner(-1)}>Previous Page</button>
                    <button className="btn btn-primary" onClick={() => this.pageTurner(1)}>Next Page</button>
                </div>

            </div>
        )
    }
}

export default Book