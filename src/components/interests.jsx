import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';

export default class Interests extends Component {
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
      const friends = [
        'images/friends.jpeg',
        ];
      const captionsFriends = [
          'My best friends and I at college. I love them!'
      ]
      const fish = [
        'images/fish.jpeg',
        ];
      const captionsFish = [
          "They're so majestic!"
      ]
      const pins = [
        'images/pins.jpeg',
      ];
      const captionsPins = [
          'I collect a pin from every new place I visit!'
      ]
      const journal = [
        'images/journal.jpeg',
      ];
      const captionsJournal = [
          'I write and draw in a journal almost everyday, and have 7 years worth of memories in them now!'
      ]
      const running = [
        'images/running.jpeg',
      ];
      const captionsRunning = [
          'I used to run in high school and recently started again!'
      ]
      const kayaking = [
        'images/kayaking.jpeg',
      ];
      const captionsKayaking = [
          'I love going on adventures with my family!'
      ]
      return (
        <div>
        <section className="ftco-section-1" id="interests-section">
            <div className="container-fluid px-md-0">
                <div className="no-gutters justify-content-center pb-5">
                    <div className="col-md-12 heading-section text-center ftco-animate">
                        <h1 className="big big-2">Interests</h1>
                        <h2 className="mb-4">My Interests</h2>
                        <p>Below are some pictures that represent my interests outside of class and work!</p>
                    </div>
                </div>
            <div style={{display: 'flex', flexWrap: 'wrap', marginRight: '-15px', marginLeft: '15px', justifyContent: 'center'}} >
                <div style={{height:'50%', width:'100%', paddingBottom:'20px'}} className="col-md-4">
                    <div className="project img-1 ftco-animate d-flex justify-content-center align-items-center" style={{backgroundImage: 'url(' + require('./friends.jpeg') + ')'}}>
                        <div className="overlay" />
                            <div className="text text-center p-4">
                                <h3><a onClick={() => this.setState({ isOpen1: true })}>My best friends</a></h3>
                                {isOpen1 && (
                                        <Lightbox
                                            imageCaption={captionsFriends[photoIndex]}
                                            mainSrc={friends[photoIndex]}
                                            onCloseRequest={() => this.setState({ isOpen1: false })}
                                    />)}
                            </div>
                        </div>
                    </div>
                <div style={{height:'50%', width:'100%', paddingBottom:'20px'}} className="col-md-4">
                    <div className="project img-1 ftco-animate d-flex justify-content-center align-items-center" style={{backgroundImage: 'url(' + require('./fish.jpeg') + ')'}}>
                        <div className="overlay" />
                            <div className="text text-center p-4">
                                <h3><a onClick={() => this.setState({ isOpen2: true })}>My two angelfish</a></h3>
                                {isOpen2 && (
                                        <Lightbox
                                            imageCaption={captionsFish[photoIndex]}
                                            mainSrc={fish[photoIndex]}
                                            onCloseRequest={() => this.setState({ isOpen2: false })}
                                    />)}
                            </div>
                        </div>
                    </div>
                <div style={{height:'50%', width:'100%', paddingBottom:'20px'}} className="col-md-4">
                    <div className="project img-1 ftco-animate d-flex justify-content-center align-items-center" style={{backgroundImage: 'url(' + require('./pins.jpeg') + ')'}}>
                        <div className="overlay" />
                            <div className="text text-center p-4">
                                <h3><a onClick={() => this.setState({ isOpen3: true })}>My pin collection</a></h3>
                                {isOpen3 && (
                                        <Lightbox
                                            imageCaption={captionsPins[photoIndex]}
                                            mainSrc={pins[photoIndex]}
                                            onCloseRequest={() => this.setState({ isOpen3: false })}
                                    />)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{display: 'flex', flexWrap: 'wrap', marginRight: '-15px', marginLeft: '15px', justifyContent: 'center', paddingBottom:'100px'}} >
                <div style={{backgroundPosition: 'center center'}} style={{height:'50%', width:'100%'}} className="col-md-4">
                    <div className="project img-1 ftco-animate d-flex justify-content-center align-items-center" style={{backgroundImage: 'url(' + require('./journal.jpeg') + ')', backgroundPosition: 'center center'}}>
                        <div className="overlay" />
                            <div className="text text-center p-4">
                                <h3><a onClick={() => this.setState({ isOpen4: true })}>My Journal</a></h3>
                                {isOpen4 && (
                                        <Lightbox
                                            imageCaption={captionsJournal[photoIndex]}
                                            mainSrc={journal[photoIndex]}
                                            onCloseRequest={() => this.setState({ isOpen4: false })}
                                    />)}
                            </div>
                        </div>
                    </div>
                <div style={{height:'50%', width:'100%'}} className="col-md-4">
                    <div className="project img-1 ftco-animate d-flex justify-content-center align-items-center" style={{backgroundImage: 'url(' + require('./running.jpeg') + ')', backgroundPosition: 'center center'}}>
                        <div className="overlay" />
                            <div className="text text-center p-4">
                                <h3><a onClick={() => this.setState({ isOpen5: true })}>My aunt and I after a half marathon</a></h3>
                                {isOpen5 && (
                                        <Lightbox
                                            imageCaption={captionsRunning[photoIndex]}
                                            mainSrc={running[photoIndex]}
                                            onCloseRequest={() => this.setState({ isOpen5: false })}
                                    />)}
                            </div>
                        </div>
                    </div>
                <div style={{height:'50%', width:'100%'}} className="col-md-4">
                    <div className="project ftco-animate d-flex justify-content-center align-items-center" style={{backgroundImage: 'url(' + require('./kayaking.jpeg') + ')', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center left'}}>
                        <div className="overlay" />
                            <div className="text text-center p-4">
                                <h3><a onClick={() => this.setState({ isOpen6: true })}>Kayaking</a></h3>
                                {isOpen6 && (
                                        <Lightbox
                                            imageCaption={captionsKayaking[photoIndex]}
                                            mainSrc={kayaking[photoIndex]}
                                            onCloseRequest={() => this.setState({ isOpen6: false })}
                                    />)}
                            </div>
                        </div>
                    </div>
                </div>
        </section>
        <br></br><br></br><br></br><br></br>
    </div>
        )     
    }
}