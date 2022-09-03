import React,{ Component } from 'react';

export default class AboutThree extends React.Component {
    constructor(){
        super()
    }

    render(){
        return (

            <section className="about-three">
                <div className="container">
                    <div className="block-title text-center">
                        <p>More Know About Corona</p>
                        <h3>Protect Yourself From Cronoavirus</h3>
                    </div>

                    <div className="row">
                        <div className="col-lg-4">
                            <div className="about-three__image">
                                <img src="/assets/images/resources/about-2-1.png" alt="" />
                            </div>
                            <div className="about-three__title">
                                <h3>We’re Always Here to Protect You From Virus</h3>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="about-three__image">
                                <img src="/assets/images/resources/about-2-2.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="text-center about-three__text">
                        <p>There are many variations of passages of available but the majority have suffered alteration
                            in some <br/>
                                form, by injected humou or randomised words. Proin ac lobortis arcu, a vestibulum aug
                                ipsum neque, <br/>
                                facilisis vel mollis vitae. Quisque aliquam dictum condim.</p>
                    </div>
                </div>
            </section>
        )
    }
}