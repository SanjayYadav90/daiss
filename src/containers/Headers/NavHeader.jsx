import React from 'react'

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
                <h1><a href="index.html">Bettering</a></h1>
            </div>
            {/* navbar-header */}
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                <li><a href="index.html" className="active">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="gallery.html">Gallery</a></li>
                <li>
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Pages <span className="caret" /></a>
                    <ul className="dropdown-menu">
                    <li><a href="icons.html">Web Icons</a></li>
                    <li><a href="codes.html">Short Codes</a></li>
                    </ul>
                </li>
                <li><a href="contact.html">Contact</a></li>
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
