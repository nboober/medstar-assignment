import React from 'react'

class Instructor extends React.Component{
    render(){
        return(
            <div class="content">
            <div class="card">
                <div class="firstinfo"><img src="https://s3.amazonaws.com/uifaces/faces/twitter/mrvanz/128.jpg"/>
                <div class="profileinfo">
                    <h1>Francesco Moustache</h1>
                    <h3>Python Ninja</h3>
                    <p class="bio">Lived all my life on the top of mount Fuji, learning the way to be a Ninja Dev.</p>
                </div>
                </div>
            </div>
            <div class="badgescard"> <span class="devicons devicons-django"></span><span class="devicons devicons-python"> </span><span class="devicons devicons-codepen"></span><span class="devicons devicons-javascript_badge"></span><span class="devicons devicons-gulp"></span><span class="devicons devicons-angular"></span><span class="devicons devicons-sass"> </span></div>
            </div>
        )
    }
}

export default Instructor