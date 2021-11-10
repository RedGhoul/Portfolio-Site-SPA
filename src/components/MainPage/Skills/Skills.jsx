import React, { Component } from 'react'
import './Skills.css'
export class Skills extends Component {
    render() {
        return (
            <div id="fh5co-skills" className="fh5co-bg-dark" style={{ background: '#ff9000e6', color: 'white' }}>
                <div className="container">
                    <div className="row" style={{ paddingTop: "-25px", paddingBottom: "20px" }}>
                        <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                            <h2 style={{ color: 'white' }}>My Skills</h2>
                        </div>
                    </div>
                    <div className="row row-pb-md">
                        <div style={{ paddingTop: "5px" }} className="col-md-3 col-sm-6 col-xs-12 text-center">
                            - C# (.net6, 4.8)
                        </div>
                        <div style={{ paddingTop: "5px" }} className="col-md-3 col-sm-6 col-xs-12 text-center">
                            - Java (8+)
                        </div>
                        <div style={{ paddingTop: "5px" }} className="col-md-3 col-sm-6 col-xs-12 text-center">
                            - SQL (MySql, SqlServer (TSQL))
                        </div>
                        <div style={{ paddingTop: "5px" }} className="col-md-3 col-sm-6 col-xs-12 text-center">
                            - React (Functional Components)
                        </div>
                        <div style={{ paddingTop: "5px" }} className="col-md-3 col-sm-6 col-xs-12 text-center">
                            - React Native
                        </div>
                        <div style={{ paddingTop: "5px" }} className="col-md-3 col-sm-6 col-xs-12 text-center">
                            - Electron (Desktop Development)
                        </div>
                        <div style={{ paddingTop: "5px" }} className="col-md-3 col-sm-6 col-xs-12 text-center">
                            - Angular (6+)
                        </div>
                        <div style={{ paddingTop: "5px" }} className="col-md-3 col-sm-6 col-xs-12 text-center">
                            - Unity (Game Engine)
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Skills
