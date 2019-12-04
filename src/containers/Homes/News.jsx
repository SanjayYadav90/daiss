import React from 'react'

function News() {
  return (
    <div className="events-section">
        <div className="container">
            <h3 className="title-txt two"><span>O</span>ur News</h3>
            <div className="col-sm-4 live-grids-hunt3ls">
            <div className="live-left1">
                <img src={"../assets/images/g1.jpg"} className="img-responsive" />
            </div>
                <div className="live-info">
                    <ul>
                        <li><span className="fa fa-calendar-o" aria-hidden="true" /> FEBRUARY 08, 2018</li>
                    </ul>
                    <h4>School funding</h4>
                    <p className="para-1"> Proin ultricies vestibulum velit.Lorem ipsum dolor sit amet.Nam
                        aliquam pretium feugiat.
                    </p>
                </div>
            </div>
            <div className="col-sm-4 live-grids-hunt3ls">
                <div className="live-left2">
                    <img src={"../assets/images/g2.jpg"} className="img-responsive" />
                </div>
                <div className="live-info">
                    <ul>
                        <li><span className="fa fa-calendar-o" aria-hidden="true" /> FEBRUARY 08, 2018</li>
                    </ul>
                    <h4>School funding</h4>
                    <p className="para-1">Proin ultricies vestibulum velit.Lorem ipsum dolor sit amet.Nam
                        aliquam pretium feugiat.
                    </p>
                </div>
            </div>
            <div className="col-sm-4 live-grids-hunt3ls">
                <div className="live-left3">
                    <img src={"../assets/images/g6.jpg"} className="img-responsive" />
                </div>
            <div className="live-info">
                <ul>
                <li><span className="fa fa-calendar-o" aria-hidden="true" /> FEBRUARY 08, 2018</li>
                </ul>
                <h4>School funding</h4>
                <p className="para-1"> Proin ultricies vestibulum velit.Lorem ipsum dolor sit amet.Nam
                aliquam pretium feugiat.
                </p>
            </div>
            </div>
            <div className="clearfix"> </div>
        </div>
    </div>
  )
}

export default News
