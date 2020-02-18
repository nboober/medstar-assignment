import React from 'react'

class Filter extends React.Component{
    render(){
        return(
            <>
                {this.props.filters ? 
                    <div>
                        {this.props.filters.map((filter)=>{
                            return <div key={filter}>
                                        <label htmlFor={filter} >{filter}</label>
                                        <input id={filter} name={filter} value={filter} type="checkbox" onChange={(event)=>this.props.filter(event)}/>
                                    </div>
                        })}
                    </div>
                : null}
            </>
        )
    }
}

export default Filter;