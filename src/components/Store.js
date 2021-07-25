import React from 'react'
import img2 from '../images/mock.png'
import '../Store1.css'

function Store() {
    return (
        <div className="dd">
            <div className="ml">
                <div className="ddt">
                <h1 className="gt">Get the Nyghtify App</h1>
                <p1 className="bt">Available on App Store and Google Play-Store</p1>
                <div className="dow">
                    <h1 className="st">one</h1>
                    <h1 className="st">two</h1>

                </div>
                </div>
            </div>

            <div className="mr">
            <img className="mockup" src={img2} alt="" />

            </div>
        </div>
    )
}

export default Store
