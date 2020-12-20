import React, { Component } from 'react'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

export default class Projects extends Component {
    constructor(props) {
        super(props);
     
        this.state = {
          photoIndex: 0,
          isOpen1: false,
          isOpen2: false,
          isOpen3: false, 
          isOpen4: false, 
          isOpen5: false, 
          isOpen6: false
        };
      }
  render() {
    const { photoIndex, isOpen1, isOpen2, isOpen3, isOpen4, isOpen5, isOpen6 } = this.state;
    const imagesSUAS = [
        require('./work-1.png'),
        require('./suas-2.png'),
        require('./suas-3.png'),
        require('./suas-4.png'),
    ];
    const imagesMiami = [
        require('./work-2.png'),
        require('./miami-3.png'),
        require('./miami-4.png'),
        require('./miami-5.png'),
    ];
    const imagesCapOne = [
        require('./work-3.png'),
        require('./capOne-4.png'),
    ];
    
    const imagesTaste = [
        require('./work-4.png'),
        require('./taste-6.png'),
        require('./taste-7.png')
    ];
    
    const imagesMC = [
        require('./work-6.png'),
        require('./MC2.png'),
        require('./MC3.png'),
        require('./MC4.png'),
        require('./MC5.png'),
        require('./MC6.png'),
        require('./MC7.png'),
    ];
    
    const imagesZoom = [
        require('./work-5.png'),
        require('./Z2.png'),
        require('./Z3.png'),
        require('./Z4.png'),
        require('./Z5.png'),
    ];
    
    const captionsSUAS = [
        'The home page of the sUAS IMS application',
        'The Inventory Drone page',
        'The checkout page',
        'The calendar availability page',
    ];

    const captionsMiami = [
        "This page shows all of Miami's Bus Routes",
        'This page shows the number of bus stops per Zipcode area around the city',
        'This page explores whether the distribution of bus stops is determined by Zip Code income',
        'This page explores whether the distribution of bus stops is determined by Median Population',
    ];

    const captionsCap = [
        'This website was created as a tool for property owners to see how much they should list their San Francisco property for on Airbnb in order to maximize profit'
    ]

    const captionsTaste = [
        'This website was built to provide recipes using everyday ingredients', 
        'An example recipe for steak that a user submitted', 
        'The page where users can add their own recipes to the database'
    ];

    const captionsMC = [
        'This website was built as a way to visualize the Top Christmas songs on the Billboard Hot 100 Chart through 1958 - 2017',
    ];

    const captionsZoom = [
        'This project was created to investigate, and solve, the problem of fair bandwidth allocation in the home. To read our final report, visit: https://github.com/sarakvaska/CS143-Final-Project', 
        'This table represents the bandwidth taken on Zoom depending on activity', 
        'Our prioritization pyramid. We prioritized Zoom and Skype over Email and streaming apps', 
        'Our network topology for testing bandwidth allocation', 
        'The delay times we calculated based on our formula; read more about our calculations on my Github'
    ]

    return (
        <div>
            <section className="ftco-section-1" id="projects-section">
                <div className="container-fluid px-md-0">
                    <div className="no-gutters justify-content-center pb-5">
                        <div className="col-md-12 heading-section text-center ftco-animate">
                            <h1 className="big big-2">Projects</h1>
                            <h2 className="mb-4">My Projects</h2>
                            <p>Below are projects I've created for classes and internships!</p>
                        </div>
                    </div>
                <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}} >
                    <div style={{height:'50%', width:'100%', paddingBottom:'1.25em'}} className="col-md-4">
                        <div className="project img-1 ftco-animate d-flex justify-content-center align-items-center" style={{backgroundImage: 'url(' + require('./work-1.png') + ')'}}>
                            <div className="overlay" />
                                <div className="text text-center p-4">
                                    <h3><a onClick={() => this.setState({ isOpen1: true })}>sUAS IMS</a></h3>
                                    {isOpen1 && (
                                        <Lightbox
                                            imageCaption={captionsSUAS[photoIndex]}
                                            mainSrc={imagesSUAS[photoIndex]}
                                            nextSrc={imagesSUAS[(photoIndex + 1) % imagesSUAS.length]}
                                            prevSrc={imagesSUAS[(photoIndex + imagesSUAS.length - 1) % imagesSUAS.length]}
                                            onCloseRequest={() => this.setState({ isOpen1: false })}
                                            onMovePrevRequest={() =>
                                                this.setState({
                                                    photoIndex: (photoIndex + imagesSUAS.length - 1) % imagesSUAS.length,
                                                })
                                            }
                                            onMoveNextRequest={() =>
                                                this.setState({
                                                    photoIndex: (photoIndex + 1) % imagesSUAS.length,
                                            })}
                                    />)}
                                    <span>A drone reservation system</span>
                                </div>
                            </div>
                        </div>
                    <div style={{height:'50%', width:'100%', paddingBottom:'1.25em'}} className="col-md-4">
                        <div className="project img-1 ftco-animate d-flex justify-content-center align-items-center" style={{backgroundImage: 'url(' + require('./work-2.png') + ')'}}>
                            <div className="overlay" />
                                <div className="text text-center p-4">
                                    <h3><a onClick={() => this.setState({ isOpen2: true })}>Public Transportation Coverage</a></h3>
                                    {isOpen2 && (
                                        <Lightbox
                                            imageCaption={captionsMiami[photoIndex]}
                                            mainSrc={imagesMiami[photoIndex]}
                                            nextSrc={imagesMiami[(photoIndex + 1) % imagesMiami.length]}
                                            prevSrc={imagesMiami[(photoIndex + imagesMiami.length - 1) % imagesMiami.length]}
                                            onCloseRequest={() => this.setState({ isOpen2: false })}
                                            onMovePrevRequest={() =>
                                                this.setState({
                                                    photoIndex: (photoIndex + imagesMiami.length - 1) % imagesMiami.length,
                                                })
                                            }
                                            onMoveNextRequest={() =>
                                                this.setState({
                                                    photoIndex: (photoIndex + 1) % imagesMiami.length,
                                                })
                                    }/>)}
                                    <span>in Miami</span>
                                </div>
                            </div>
                        </div>
                    <div style={{height:'50%', width:'100%', paddingBottom:'1.25em'}} className="col-md-4">
                        <div className="project img-1 ftco-animate d-flex justify-content-center align-items-center" style={{backgroundImage: 'url(' + require('./work-3.png') + ')'}}>
                            <div className="overlay" />
                                <div className="text text-center p-4">
                                    <h3><a onClick={() => this.setState({ isOpen3: true })}>CapOne</a></h3>
                                    {isOpen3 && (
                                        <Lightbox
                                            imageCaption={captionsCap[photoIndex]}
                                            mainSrc={imagesCapOne[photoIndex]}
                                            nextSrc={imagesCapOne[(photoIndex + 1) % imagesCapOne.length]}
                                            prevSrc={imagesCapOne[(photoIndex + imagesCapOne.length - 1) % imagesCapOne.length]}
                                            onCloseRequest={() => this.setState({ isOpen3: false })}
                                            onMovePrevRequest={() =>
                                                this.setState({
                                                    photoIndex: (photoIndex + imagesCapOne.length - 1) % imagesCapOne.length,
                                                })
                                            }
                                            onMoveNextRequest={() =>
                                                this.setState({
                                                    photoIndex: (photoIndex + 1) % imagesCapOne.length,
                                                })
                                    }/>)}
                                    <span>An Airbnb Helper</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}} >
                    <div style={{backgroundPosition: 'center center', height:'50%', width:'100%', paddingBottom:'1.25em'}} className="col-md-4">
                        <div className="project img-1 ftco-animate d-flex justify-content-center align-items-center" style={{backgroundImage: 'url(' + require('./work-4.png') + ')', backgroundPosition: 'center center'}}>
                            <div className="overlay" />
                                <div className="text text-center p-4">
                                    <h3><a onClick={() => this.setState({ isOpen4: true })}>Epicure Taste</a></h3>
                                    {isOpen4 && (
                                        <Lightbox
                                            imageCaption={captionsTaste[photoIndex]}
                                            mainSrc={imagesTaste[photoIndex]}
                                            nextSrc={imagesTaste[(photoIndex + 1) % imagesTaste.length]}
                                            prevSrc={imagesTaste[(photoIndex + imagesTaste.length - 1) % imagesTaste.length]}
                                            onCloseRequest={() => this.setState({ isOpen4: false })}
                                            onMovePrevRequest={() =>
                                                this.setState({
                                                    photoIndex: (photoIndex + imagesTaste.length - 1) % imagesTaste.length,
                                                })
                                            }
                                            onMoveNextRequest={() =>
                                                this.setState({
                                                    photoIndex: (photoIndex + 1) % imagesTaste.length,
                                                })
                                    }/>)}
                                    <span>Recipes using everyday ingredients</span>
                                </div>
                            </div>
                        </div>
                    <div style={{height:'50%', width:'100%',  paddingBottom:'1.25em'}} className="col-md-4">
                        <div className="project img-1 ftco-animate d-flex justify-content-center align-items-center" style={{backgroundImage: 'url(' + require('./work-6.png'), backgroundPosition: 'center center'}}>
                            <div className="overlay" />
                                <div className="text text-center p-4">
                                    <h3><a onClick={() => this.setState({ isOpen5: true })}>Mariah Carey Season</a></h3>
                                    {isOpen5 && (
                                        <Lightbox
                                            imageCaption={captionsMC[photoIndex]}
                                            mainSrc={imagesMC[photoIndex]}
                                            nextSrc={imagesMC[(photoIndex + 1) % imagesMC.length]}
                                            prevSrc={imagesMC[(photoIndex + imagesMC.length - 1) % imagesMC.length]}
                                            onCloseRequest={() => this.setState({ isOpen5: false })}
                                            onMovePrevRequest={() =>
                                                this.setState({
                                                    photoIndex: (photoIndex + imagesMC.length - 1) % imagesMC.length,
                                                })
                                            }
                                            onMoveNextRequest={() =>
                                                this.setState({
                                                    photoIndex: (photoIndex + 1) % imagesMC.length,
                                                })
                                    }/>)}
                                    <span>Visualizing the Top Christmas Songs</span>
                                </div>
                            </div>
                        </div>
                    <div style={{height:'50%', width:'100%',  paddingBottom:'1.25em'}} className="col-md-4">
                        <div className="project img-1 ftco-animate d-flex justify-content-center align-items-center" style={{backgroundImage: 'url(' + require('./work-5.png'), backgroundPosition: 'center right'}}>
                            <div className="overlay" />
                                <div className="text text-center p-4">
                                    <h3><a onClick={() => this.setState({ isOpen6: true })}>An Algorithm in Pursuit of Network Fairness</a></h3>
                                    {isOpen6 && (
                                        <Lightbox
                                            imageCaption={captionsZoom[photoIndex]}
                                            mainSrc={imagesZoom[photoIndex]}
                                            nextSrc={imagesZoom[(photoIndex + 1) % imagesZoom.length]}
                                            prevSrc={imagesZoom[(photoIndex + imagesZoom.length - 1) % imagesZoom.length]}
                                            onCloseRequest={() => this.setState({ isOpen6: false })}
                                            onMovePrevRequest={() =>
                                                this.setState({
                                                    photoIndex: (photoIndex + imagesZoom.length - 1) % imagesZoom.length,
                                                })
                                            }
                                            onMoveNextRequest={() =>
                                                this.setState({
                                                    photoIndex: (photoIndex + 1) % imagesZoom.length,
                                                })
                                    }/>)}
                                    <span>Bandwidth Allocation at Home in a Zoom World</span>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
            <br></br><br></br><br></br>
        </div>
    )
  }
}