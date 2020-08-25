import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
      return (
        <section className="ftco-section contact-section ftco-no-pb" id="contact-section">
        <div style={{paddingRight:'5px', paddingBottom:'100px'}} className="container">
          <div className="justify-content-center pb-3">
            <div className="col-md-7 heading-section text-center ftco-animate">
              <h1 className="big big-2">Contact</h1>
              <h2 className="mb-4">Contact Me</h2>
              <p>Email me or reach out on social media if you want to talk!</p>
              <br></br>
            </div>
          </div>
          <div id="wrapper" style={{paddingLeft:'15px', marginRight:'15px', overflowX:'scroll'}}>
            <div id="left" className="ftco-animate">
                <div className="box text-center p-4 shadow">
                    <div className="icon d-flex align-items-center justify-content-center">
                    <span className="icon-twitter" />
                    </div>
                    <div>
                    <h3 className="mb-4">Twitter</h3>
                    <p><a href="https://twitter.com/astronosk" target="_blank">@astronosk</a></p>
                    </div>
                </div>
            </div>
            <div id="right" className="ftco-animate">
                <div className="box text-center p-4 shadow">
                    <div className="icon d-flex align-items-center justify-content-center">
                    <span className="icon-twitter" />
                    </div>
                    <div>
                    <h3 className="mb-4">LinkedIn</h3>
                    <p><a href="https://www.linkedin.com/in/sarakvaska/" target="_blank">Profile</a></p>
                    </div>
                </div>
            </div>
            <div id="third" className="ftco-animate">
              <div className="box text-center p-4 shadow">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="icon-paper-plane" />
                </div>
                <div>
                  <h3 className="mb-4">College Email</h3>
                  <p><a href="kvaskas@college.harvard.edu">kvaskas@college.harvard.edu</a></p>
                </div>
              </div>
            </div>
            <div id="fourth" className="ftco-animate">
              <div className="box text-center p-4 shadow">
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