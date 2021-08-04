import React, { Component } from 'react'
import  '../Registration1.css'

export default class Registration1 extends Component {
    render() {
        return (
            <div className="register1main">
                <br/>
                <br/>
                <br/>
                <h1 className="r9h1">Registration Form (page 2)</h1>
                <h1 className="r1h1">Upload AAdhar Crad</h1>
                <div className="input1">
                <input  className="inputr2"  type="file" name="img" />
                </div>
                <h1 className="r1h1">Upload Pro Pic</h1>
                <div className="input1">
                
                <input  className="inputr2"  type="file" name="img" />
                </div>

                

            </div>
        )
    }
}
