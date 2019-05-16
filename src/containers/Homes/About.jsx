import React from 'react'

function About() {
  return (
    <div className="about">
        <div className="container">
            <div className="about-main">
            <div className="about-right">
                <h3 className="subheading-hunt3-hunile">About Us</h3>
                <p className="para-hunt3-hunileits">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis tristique est, et egestas odio, sed interdum risus.</p>
                {'{'}/* stats  */{'}'}
                <div className="stats">
                <div className="stats_inner">
                    <div className="col-md-6 col-sm-6 col-xs-6 stat-grids">
                    <p className="counter-hunileits-hunt3layouts">20</p>
                    <div className="stats-text-huntre">
                        <h3>CLASSES</h3>
                    </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-6 stat-grids">
                    <p className="counter-hunileits-hunt3layouts">87</p>
                    <div className="stats-text-huntre">
                        <h3>REVIEWS</h3>
                    </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-6 stat-grids">
                    <p className="counter-hunileits-hunt3layouts">12</p>
                    <div className="stats-text-huntre">
                        <h3> ACTIVITIES</h3>
                    </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-6 stat-grids">
                    <p className="counter-hunileits-hunt3layouts">45</p>
                    <div className="stats-text-huntre">
                        <h3>PRIZE LAURATES</h3>
                    </div>
                    </div>
                    <div className="clearfix"> </div>
                </div>
                </div>
                {'{'}/* stats  */{'}'}
            </div>
            </div>
        </div>
    </div>
  )
}

export default About
