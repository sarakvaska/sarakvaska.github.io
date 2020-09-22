import React, { Component } from 'react'

export default class Resume extends Component {
  render() {
    return (
        <section className="ftco-section" id="resume-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <nav id="navi">
                            <ul>
                                <li><a href="#page-1">Education</a></li>
                                <li><a href="#page-2">Experience</a></li>
                                <li><a href="#page-3">Technical Skills</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-md-9">
                        <div id="page-1" className="page one" style={{marginBottom: '10px'}}>
                            <h2 className="heading">Education and Extracurricular</h2>
                            <div className="resume-wrap d-flex ftco-animate">
                                <div className="icon d-flex align-items-center justify-content-center">
                                    <span className="flaticon-ideas" />
                                </div>
                            <div className="text pl-3">
                                <span className="date">2017 - 2021</span>
                                    <h2>Bachelor of Arts in Computer Science</h2>
                                    <span className="position">Harvard College</span>
                                    <p>Studied Computer Science with a Secondary in Astrophysics.</p>
                                    <p>Relevant Courswork: Functional Programming and Abstraction, Discrete Mathematics for Computer
Science, Theoretical Computer Science, Data Structures and Algorithms, Data</p>
                            </div>
                        </div>
                        <div className="resume-wrap d-flex ftco-animate">
                            <div className="icon d-flex align-items-center justify-content-center">
                                <span className="flaticon-ideas" />
                            </div>
                            <div className="text pl-3">
                                <span className="date">2018 - 2021</span>
                                <h2>Girls Who Code Co-Director</h2>
                                <span className="position">Women in Computer Science</span>
                                <ul>
                                    <li>Created a curriculum for each fall and spring, teaching a group of around 25 girls the foundations of computer science.</li>
                                    <li>The curriculums taught have included Python, Robotics, HTML/CSS, and animation.</li>
                                    <li>Implemented mentorship and pen-pal programs to connect women studying computer science with
young girls interested in coding.</li>
                                    <li>Increased the breadth of the program from the Boston area, to nationwide, and then internationally.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="resume-wrap d-flex ftco-animate">
                            <div className="icon d-flex align-items-center justify-content-center">
                                <span className="flaticon-ideas" />
                            </div>
                            <div className="text pl-3">
                                <span className="date">2019 - 2020</span>
                                <h2>Festa, Design Co-Chair</h2>
                                <span className="position">Quincy Housing Committee</span>
                                <ul>
                                    <li>As Festa co-chair in the Spring, planned and organized a bi-weekly housing Festa for around 100-150 people, meant to be a place where all members of the dorm could come and enjoy music, drinks, and food.</li>
                                    <li>As Design co-chair for the fall, responsible for planning house activities as well as working with the design board to create posters
promoting our events including game nights, watch parties, open mic nights, and alumni panels.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div id="page-2" className="page two" style={{marginBottom: '10px'}}>
                        <h2 className="heading">Experience</h2>
                        <div className="resume-wrap d-flex ftco-animate">
                            <div className="icon d-flex align-items-center justify-content-center">
                                <span className="flaticon-ideas" />
                            </div>
                            <div className="text pl-3">
                                <span className="date">June - August 2019, June - August 2020</span>
                                <h2>Software Engineer Intern</h2>
                                <span className="position">NASA Jet Propulsion Laboratory</span>
                                <ul>
                                    <li>Worked on the small Uninhabited Aerial System Information Management System (sUAS IMS) application, which functions as a drone reservation system for scientists and engineers at JPL.</li>
                                    <li>Implemented in C# using the .NET Framework.</li>
                                    <li>Wrote API endpoints to enable Cron Job email reminders, created an Inventory page enabled with calendar availability and filtering, and implemented pickup time functionality for user reservations.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="resume-wrap d-flex ftco-animate">
                            <div className="icon d-flex align-items-center justify-content-center">
                                <span className="flaticon-ideas" />
                            </div>
                            <div className="text pl-3">
                                <span className="date">2018 - Present</span>
                                <h2>Senior Digital Communications Intern</h2>
                                <span className="position">Harvard Admissions and Financial Aid</span>
                                <ul>
                                    <li>Overseeing the publishing of Student Blogs on the Harvard College website; once students write their blogs, I check to ensure they’re written using language for the web and have all the proper formatting guidelines, then I approve it to go live on the website.</li>
                                    <li>Spearheaded the Shoestring Guide Project; consolidated all information from an outdated app over to the College website in the form of 6 written guides.</li>   
                                </ul>
                            </div>
                        </div>
                        <div className="resume-wrap d-flex ftco-animate">
                            <div className="icon d-flex align-items-center justify-content-center">
                                <span className="flaticon-ideas" />
                            </div>
                            <div className="text pl-3">
                                <span className="date">May 2018 - August 2018 </span>
                                <h2>Teaching Assistant</h2>
                                <span className="position">Girls Who Code</span>
                                <ul>
                                    <li>Supported the primary instructor in maintaining an exciting, engaging, and accessible classroom environment for a highly diverse group of 20 high school girls; effectively addressed students' 
                                        challenges and questions to ensure that all students are engaged and actively learning course material.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="resume-wrap d-flex ftco-animate">
                            <div className="icon d-flex align-items-center justify-content-center">
                                <span className="flaticon-ideas" />
                            </div>
                            <div className="text pl-3">
                                <span className="date">May 2018 - August 2018</span>
                                <h2>Google CodeU</h2>
                                <span className="position">Google</span>
                                <ul>
                                    <li>Collaborated with a team of peers to design and implement a web application using Java, JavaScript,
                                        HTML and CSS over the course of 12 weeks, leveraging various Google Cloud Platform APIs, including App Engine and Datastore
                                    </li>
                                    <li>Learned and followed industry best practices such as: contributing to open source software using Git
                                        and GitHub, conducting regular code reviews with/for teammates, designing new components and interfaces and leading them to completion.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="resume-wrap d-flex ftco-animate">
                            <div className="icon d-flex align-items-center justify-content-center">
                                <span className="flaticon-ideas" />
                            </div>
                            <div className="text pl-3">
                                <span className="date">2016 - 2017</span>
                                <h2>Airport Ambassador</h2>
                                <span className="position">Miami International Airport</span>
                                <ul>
                                    <li>Interned at Miami International Airport as an Airport Ambassador through my senior year of high school.</li>
                                    <li>Worked in arrivals, helping travelers through the airport and answering their questions about flights, flight times and how to navigate the airport and the city of Miami.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div id="page-3" className="page three">
                        <h2 className="heading">Technical Skills</h2>
          <div style={{display: '-webkit-box', display: '-ms-flexbox', display: 'flex', flexWrap: 'wrap', marginRight: '-15px', marginLeft: '-15px' }}>
            <div className="col-md-6 animate-box" style={{paddingTop: 0, paddingBottom: 0, height: '50px'}}>
              <div className="progress-wrap ftco-animate">
                <h3>HTML</h3>
                <div className="progress">
                  <div className="progress-bar color-1" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} style={{width: '90%'}}>
                    <span>90%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 animate-box" >
              <div className="progress-wrap ftco-animate">
                <h3>JavaScript</h3>
                <div className="progress">
                  <div className="progress-bar color-2" role="progressbar" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} style={{width: '85%'}}>
                    <span>85%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 animate-box">
              <div className="progress-wrap ftco-animate">
                <h3>CSS</h3>
                <div className="progress">
                  <div className="progress-bar color-3" role="progressbar" aria-valuenow={95} aria-valuemin={0} aria-valuemax={100} style={{width: '95%'}}>
                    <span>95%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 animate-box">
              <div className="progress-wrap ftco-animate">
                <h3>R</h3>
                <div className="progress">
                  <div className="progress-bar color-4" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} style={{width: '90%'}}>
                    <span>90%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 animate-box">
              <div className="progress-wrap ftco-animate">
                <h3>C#</h3>
                <div className="progress">
                  <div className="progress-bar color-5" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{width: '70%'}}>
                    <span>70%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 animate-box">
              <div className="progress-wrap ftco-animate">
                <h3>Python</h3>
                <div className="progress">
                  <div className="progress-bar color-6" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}}>
                    <span>80%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>
        </div>
    </section>
    )
  }
}