import React from 'react'

class Filter extends React.Component{
    constructor(){
        super()
        this.state={
            filterTerms: ""
        }
    }

    componentDidMount = () => {
        this.setState({
            filterTerms: this.props.filterTerms
        },()=>{
            this.checkCheckBoxes();
        })
    }

    checkCheckBoxes = () => {
        this.state.filterTerms.map(term=>{
            document.getElementById(term).checked = true
        })
    }

    render(){
        return(
            <>
                {this.props.filters ? 
                    <div className="form-check">
                        {this.props.filters.map((filter)=>{
                            return <div key={filter}>
                                        <input className="form-check-input" id={filter} name={filter} value={filter} type="checkbox" onChange={(event)=>this.props.filter(event)}/>
                                        <label className="form-check-label" htmlFor={filter} >{filter}</label>
                                    </div>
                        })}
                    </div>
                : null}
            </>
        )
    }
}

export default Filter;