import React from 'react'

function Testimonials() {
  return (
    <div className="testimonials">
        <div className="container">
            <h3 className="title-txt"><span>T</span>estimonials</h3>
            <div className="col-md-6 testimonials-main">
            <section className="slider">
                <div className="flexslider">
                <ul className="slides">
                    <li>
                    <div className="inner-testimonials-hunt3ls">
                        <img src="images/1.jpg" alt=" " className="img-responsive" />
                        <div className="testimonial-info-huntre">
                        <h5>Andy Wovel</h5>
                        <span>Lorem Ipsum</span>
                        <p className="para-hunt3ls">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis hendrerit lobortis elementum, Quis nostrum exercitationem
                            ullam corporis suscipit laboriosam. 
                        </p>
                        </div>
                    </div>
                    </li>
                    <li>
                    <div className="inner-testimonials-hunt3ls">
                        <img src="images/2.jpg" alt=" " className="img-responsive" />
                        <div className="testimonial-info-huntre">
                        <h5>Bernard Russo</h5>
                        <span>Lorem Ipsum</span>
                        <p className="para-hunt3ls">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis hendrerit lobortis elementum, Quis nostrum exercitationem
                            ullam corporis suscipit laboriosam. 
                        </p>
                        </div>
                    </div>
                    </li>
                    <li>
                    <div className="inner-testimonials-hunt3ls">
                        <img src="images/3.jpg" alt=" " className="img-responsive" />
                        <div className="testimonial-info-huntre">
                        <h5>Alex Merphy &amp; July Mao</h5>
                        <span>Lorem Ipsum</span>
                        <p className="para-hunt3ls">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis hendrerit lobortis elementum, Quis nostrum exercitationem
                            ullam corporis suscipit laboriosam. 
                        </p>
                        </div>
                    </div>
                    </li>
                </ul>
                </div>
            </section>
            </div>
            <div className="clearfix"> </div>
        </div>
    </div>
  )
}

export default Testimonials
