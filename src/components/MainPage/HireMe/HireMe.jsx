import React, { Component } from 'react'
import './HireMe.css'
class HireMe extends Component {
    render() {
        return (
            <div id="fh5co-started" className="animate-box" style={{ background: 'white', color: 'black' }}>
                <div className="container">
                    <div className="col-md-8 col-md-offset-2 text-center">
                        <h2 style={{ color: 'black', fontSize: 'xx-large' }}>Lets get build something together</h2>
                        <a rel="noopener noreferrer" target="_blank" className="btn-contact" style={{
                            background: 'rgba(255, 144, 0, 0.9)',
                            padding: '5px',
                            color: 'white',
                            height: '50px',
                            width: '70px',
                            cursor: 'pointer'
                        }} href="mailto:avaneesab5@gmail.com">Get In Touch</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default HireMe
