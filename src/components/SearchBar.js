import React from 'react'

class SearchBar extends React.Component{
    render(){
        return(
            <div>
                Search Our Course By Name Here <br/>
                <input type="text" onChange={(event)=>this.props.search(event)}/>
            </div>
        )
    }
}

export default SearchBar