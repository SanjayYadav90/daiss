import React from 'react';
import {Link} from 'react-router-dom';

function NavHeader() {
  return (
    <div className="top-bar-hunt3layouts">
        <div className="container">
            <nav className="navbar navbar-default">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
                </button>
                <h1><Link to="/">Bettering</Link></h1>
            </div>
            {/* navbar-header */}
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                <li><Link to="/" className="active">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li>
                    <Link to="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Pages <span className="caret" /></Link>
                    <ul className="dropdown-menu">
                    <li><Link to="/">Web Icons</Link></li>
                    <li><Link to="/">Short Codes</Link></li>
                    </ul>
                </li>
                <li><Link to="contact.html">Contact</Link></li>
                </ul>
            </div>
            <div className="search-bar-hunileits">
                <div className="cd-main-header">
                <ul className="cd-header-buttons">
                    <li><a className="cd-search-trigger" href="#cd-search"> <span /></a></li>
                </ul>
                {/* cd-header-buttons */}
                </div>
                <div id="cd-search" className="cd-search">
                <form action="#" method="post">
                    <input name="Search" type="search" placeholder="Click enter after typing..." />
                </form>
                </div>
            </div>
            <div className="clearfix"> </div>
            </nav>
        </div>
    </div>
  )
}

export default NavHeader
