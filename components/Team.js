import React,{ Component } from 'react';

export default class Team extends React.Component {
    constructor(){
        super()
    }

    render(){
        return (

            <section className="team-one">
                <div className="container">
                    <div className="team-one__sep"></div>
                    <div className="block-title text-center">
                        <p>Meet the Team</p>
                        <h3>Doctors & Scientists</h3>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="team-one__single wow fadeInUp" data-wow-animation-duration="1500ms"
                                 data-wow-animation-delay="000ms">
                                <div className="team-one__image">
                                    <img src="/assets/images/team/team-1-1.jpg" alt=""/>
                                </div>
                                <h3>Gordon Cain</h3>
                                <p>Doctor</p>
                                <div className="team-one__social">
                                    <a href="#" className="fab fa-facebook-square"></a>
                                    <a href="#" className="fab fa-twitter"></a>
                                    <a href="#" className="fab fa-linkedin"></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="team-one__single wow fadeInUp" data-wow-animation-duration="1500ms"
                                 data-wow-animation-delay="100ms">
                                <div className="team-one__image">
                                    <img src="/assets/images/team/team-1-2.jpg" alt=""/>
                                </div>
                                <h3>Tony Brooks</h3>
                                <p>Scientists</p>
                                <div className="team-one__social">
                                    <a href="#" className="fab fa-facebook-square"></a>
                                    <a href="#" className="fab fa-twitter"></a>
                                    <a href="#" className="fab fa-linkedin"></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="team-one__single wow fadeInUp" data-wow-animation-duration="1500ms"
                                 data-wow-animation-delay="200ms">
                                <div className="team-one__image">
                                    <img src="/assets/images/team/team-1-3.jpg" alt=""/>
                                </div>
                                <h3>Harry Gardner</h3>
                                <p>Doctor</p>
                                <div className="team-one__social">
                                    <a href="#" className="fab fa-facebook-square"></a>
                                    <a href="#" className="fab fa-twitter"></a>
                                    <a href="#" className="fab fa-linkedin"></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="team-one__single wow fadeInUp" data-wow-animation-duration="1500ms"
                                 data-wow-animation-delay="300ms">
                                <div className="team-one__image">
                                    <img src="/assets/images/team/team-1-4.jpg" alt=""/>
                                </div>
                                <h3>Eddie Cohen</h3>
                                <p>Scientists</p>
                                <div className="team-one__social">
                                    <a href="#" className="fab fa-facebook-square"></a>
                                    <a href="#" className="fab fa-twitter"></a>
                                    <a href="#" className="fab fa-linkedin"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}