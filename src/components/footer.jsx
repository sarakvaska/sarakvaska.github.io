import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            <section className="ftco-section ftco-footer">
                <div className="container">
                    <div style={{height:'70vh'}} className="row">
                        <div className="col-md">
                            <div className="ftco-footer-widget mb-4">
                                <h2 className="ftco-heading-2">Connect</h2>
                                    <p>Connect with me on social or through email!</p>
                                        <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                                            <li className="ftco-animate"><a href="https://www.linkedin.com/in/sarakvaska/" target="_blank"><span className="icon-linkedin" /></a></li>
                                            <li className="ftco-animate"><a href="https://twitter.com/astronosk" target="_blank"><span className="icon-twitter" /></a></li>
                                            <li className="ftco-animate"><a href="https://www.facebook.com/sarakvaska23/" target="_blank"><span className="icon-facebook" /></a></li>
                                        </ul>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="ftco-footer-widget mb-4 ml-md-4">
                                <h2 className="ftco-heading-2">Links</h2>
                                    <ul className="list-unstyled">
                                        <li><a href="#"><span className="icon-long-arrow-right mr-2" />Home</a></li>
                                        <li><a href="#about-section"><span className="icon-long-arrow-right mr-2" />About</a></li>
                                        <li><a href="#resume-section"><span className="icon-long-arrow-right mr-2" />Resume</a></li>
                                        <li><a href="#projects-section"><span className="icon-long-arrow-right mr-2" />Projects</a></li>
                                        <li><a href="#interests-section"><span className="icon-long-arrow-right mr-2" />Interests</a></li>
                                        <li><a href="#contact-section"><span className="icon-long-arrow-right mr-2" />Contact</a></li>
                                    </ul>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="ftco-footer-widget mb-4">
                                <h2 className="ftco-heading-2">Services</h2>
                                    <ul className="list-unstyled">
                                        <li><span className="icon-long-arrow-right mr-2" />Web Development</li>
                                        <li><span className="icon-long-arrow-right mr-2" />Product Management</li>
                                        <li><span className="icon-long-arrow-right mr-2" />Web Design</li>
                                    </ul>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="ftco-footer-widget mb-4">
                                <h2 className="ftco-heading-2">Have a Question?</h2>
                                <div className="block-23 mb-3">
                                    <ul>
                                    <li><span className="icon icon-envelope" /><span className="text">kvaskasm@gmail.com</span></li>
                                    <li><span className="icon icon-envelope" /><span className="text">kvaskas@college.harvard.edu</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div style={{height:'25vh', paddingTop:'50px'}} className="col-md-12 text-center">
                            <p>{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                            Copyright © All rights reserved | Thanks to <a href="https://colorlib.com" target="_blank">Colorlib</a> for the template inspiration <i className="icon-heart color-danger" aria-hidden="true"></i>
                            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}