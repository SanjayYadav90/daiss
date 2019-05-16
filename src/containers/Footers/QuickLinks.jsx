import React from 'react'

function QuickLinks() {
  return (
    <div className="footer">
        <div className="container">
            <div className="f-bg-hunt3l">
            <div className="col-md-4 hunt3layouts_footer_grid">
                <h3>About Us</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation .</p>
            </div>
            <div className="col-md-4 hunt3layouts_footer_grid hpft">
                <h3>Contact Us</h3>
                <ul className="con_inner_text">
                <li><span className="fa fa-map-marker" aria-hidden="true" />1234k Avenue, 4th block, <label> New York City.</label></li>
                <li><span className="fa fa-envelope-o" aria-hidden="true" /> <a href="mailto:info@example.com">info@example.com</a></li>
                <li><span className="fa fa-phone" aria-hidden="true" /> +1234 567 567</li>
                </ul>
            </div>
            <div className="col-md-4 hunt3layouts_footer_grid">
                <h2>Subscribe</h2>
                <p>By subscribing to our mailing list you will always get latest news from us.</p>
                <form action="#" method="post">
                <input type="email" name="Email" placeholder="Enter your email..." required />
                <button className="btn1"><i className="fa fa-envelope-o" aria-hidden="true" /></button>
                <div className="clearfix"> </div>
                </form>
            </div>
            <div className="clearfix"> </div>
            </div>
        </div>
    </div>
  )
}

export default QuickLinks
