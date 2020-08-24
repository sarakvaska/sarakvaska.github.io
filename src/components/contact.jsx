import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
      return (
        <section className="ftco-section contact-section ftco-no-pb" id="contact-section">
        <div style={{paddingLeft:'30px', paddingRight:'5px', height:'80vh'}} className="container">
          <div className="justify-content-center pb-3">
            <div className="col-md-7 heading-section text-center ftco-animate">
              <h1 className="big big-2">Contact</h1>
              <h2 className="mb-4">Contact Me</h2>
              <p>Email me or reach out on social media if you want to talk!</p>
              <br></br>
            </div>
          </div>
          <div style={{marginLeft:'80px', height:'80vh'}}className="row d-flex contact-info">
            <div className="col-md-6 col-lg-3 d-flex ftco-animate">
                <div className="align-self-stretch box text-center p-4 shadow">
                    <div className="icon d-flex align-items-center justify-content-center">
                    <span className="icon-twitter" />
                    </div>
                    <div>
                    <h3 className="mb-4">Twitter</h3>
                    <p><a href="https://twitter.com/astronosk" target="_blank">@astronosk</a></p>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-lg-3 d-flex ftco-animate">
                <div className="align-self-stretch box text-center p-4 shadow">
                    <div className="icon d-flex align-items-center justify-content-center">
                    <span className="icon-twitter" />
                    </div>
                    <div>
                    <h3 className="mb-4">LinkedIn</h3>
                    <p><a href="https://www.linkedin.com/in/sarakvaska/" target="_blank">Profile</a></p>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-lg-3 d-flex ftco-animate">
              <div className="align-self-stretch box text-center p-4 shadow">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="icon-paper-plane" />
                </div>
                <div>
                  <h3 className="mb-4">College Email</h3>
                  <p><a href="kvaskas@college.harvard.edu">kvaskas@college.harvard.edu</a></p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 d-flex ftco-animate">
              <div className="align-self-stretch box text-center p-4 shadow">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="icon-paper-plane" />
                </div>
                <div>
                  <h3 className="mb-4">Personal Email</h3>
                  <p><a href="kvaskasm@gmail.com">kvaskasm@gmail.com</a></p>
                </div>
              </div>
            </div>
          </div> 
        </div>
      </section>
      )
    }
}