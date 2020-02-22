import React from 'react'

class Register extends React.Component{
    render(){
        return(
            <div className="center">

                <form>
                    <div className="form-group">
                        <label htmlFor="InputEmail">Email address</label>
                        <input type="email" className="form-control" id="InputEmail" aria-describedby="emailHelp" placeholder="Enter email"/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="InputPassword">Password</label>
                        <input type="password" className="form-control" id="InputPassword" placeholder="Password"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="InputPasswordConfirm">Confirm Password</label>
                        <input type="password" className="form-control" id="InputPasswordConfirm" placeholder="Password"/>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="Check"/>
                        <label className="form-check-label" htmlFor="Check">Remember Me</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Register</button>
                </form>

            </div>
        )
    }
}

export default Register