import React from 'react'

class SearchBar extends React.Component{
    render(){
        return(
            <div>
                Search Our Courses:<br/>
                <input type="text" onChange={(event)=>this.props.search(event)} placeholder="Course 1"/>
            </div>
        )
    }
}

export default SearchBar