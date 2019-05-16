import React from 'react'

function TopHeader() {
  return (
    <div className="top">
        <div className="container">
            <div className="col-md-9 top-left">
            <ul>
                <li><i className="fa fa-map-marker" aria-hidden="true" /> 1143 New York, USA</li>
                <li><i className="fa fa-phone" aria-hidden="true" /> +(010) 221 918 811</li>
                <li><i className="fa fa-envelope-o" aria-hidden="true" /> <a href="mailto:info@example.com">info@example.com</a></li>
            </ul>
            </div>
            <div className="col-md-3 top-middle">
            <ul>
                <li><a href="#"><i className="fa fa-facebook" /></a></li>
                <li><a href="#"><i className="fa fa-twitter" /></a></li>
                <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                <li><a href="#"><i className="fa fa-linkedin" /></a></li>
            </ul>
            </div>
            <div className="clearfix" />
        </div>
    </div>
  )
}

export default TopHeader
