import React, { Component } from 'react'

export default class Introduction extends Component {
  render() {
    return (
        <div>
            <section className="ftco-about img ftco-section ftco-no-pt ftco-no-pb goto-here" id="about-section">
                <div className="container">
    		        <div className="row d-flex no-gutters">
    			        <div className="col-md-6 col-lg-6 d-flex">
    				        <div className="img-about img d-flex align-items-stretch">
    					        <div className="overlay"></div>
	    				        <div className="img d-flex align-self-stretch align-items-center" style={{backgroundImage:'url(' + require('./about.jpg') + ')'}}>
	    				    </div>
    				    </div>
    			    </div>
                    <div className="col-md-6 col-lg-6 pl-md-5 py-5">
                        <div className="row justify-content-start pb-3"> 
                        <div className="col-md-12 heading-section">
                                <h2 className="mb-4">About Me</h2>
                                <p>I'm a senior at Harvard studying Computer Science with a Secondary in Astrophysics. I'm originally from Miami, FL!</p>
                                <p>After college, I want to be a PM at a tech company because I love learning, building things, and I'm really passionate about creating products that deliver an amazing user experience. </p>
                                <p>Apart from work and class, I love spending time with my friends and family, running, and anything that has to do with Gordon Ramsay, Taylor Swift or Seinfeld! </p>
                                <ul className="about-info mt-4 px-md-0 px-2">
                                    <li className="d-flex"><span>Name:</span> <span>Sara Kvaska</span></li>
                                    <li className="d-flex"><span>College Email:</span> <span>kvaskas@college.harvard.edu</span></li>
                                    <li className="d-flex"><span>Personal Email:</span> <span>kvaskasm@gmail.com</span></li>
                                </ul>
                            </div>
                            <div className="counter-wrap d-flex mt-md-3">
                            <div className="text" style={{alignItems:'center'}}>
                                <p><a href="/files/Sara_Kvaska_Resume.pdf" className="btn btn-primary py-3 px-3" download>Download Resume</a></p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <br></br><br></br><br></br><br></br>
            </section>
        </div>
    )
  }
}