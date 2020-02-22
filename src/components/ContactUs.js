import React from 'react';

class ContactUs extends React.Component{
    render(){
        return(
            <div className="center">
                <form>
                    <div style={{textAlign: "center"}}>
                        <h3>
                            <b>Phone:</b> <span>999-477-7853</span>
                        </h3>
                        <h3>
                            <b>Email:</b> <span>medstar@gmail.com</span>
                        </h3>
                    </div>

                        <br/>
                    <div style={{fontSize: "1.2rem"}}>

                    <h3>You can send us an email directly from here</h3>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input className="form-control email-inputs" name="user_name" type="text" id="name" required/>
                    </div>

                    <div>
                        <label htmlFor="email">Email</label>
                        <input className="form-control email-inputs" name="user_email" type="text" id="email" required/>
                    </div>

                    <label htmlFor="message">
                        Message
                    </label>
                    <div>
                        <textarea
                        id="message"
                        name="message"
                        placeholder="Put your message here"
                        required
                        className="email-text-area form-control"
                        rows="15"
                        cols="20"
                        />
                    </div>

                    </div>

                    <input type="submit" value="Submit" className="btn-primary btn" />
                </form>
            </div>
        )
    }
}

export default ContactUs