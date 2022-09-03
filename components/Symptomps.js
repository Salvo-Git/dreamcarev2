import React,{ Component } from 'react';

export default class Symptomps extends React.Component {
    constructor(){
        super()
    }

    render(){
        return (

            <section className="symptomps-one">
                <div className="container">
                    <div className="symptomps-one__top">
                        <div className="block-title text-left">
                            <p>Save Yourself from Virus </p>
                            <h3>Coronavirus Symptoms</h3>
                        </div>
                        <div className="symptomps-one__btn-block">
                            <a href="#" className="thm-btn symptomps-one__btn">Find a Doctor Now</a>
                        </div>
                    </div>
                    <div className="row">

                        <div className="col-xl-2 col-lg-4 col-md-6">
                            <div className="symptomps-one__single">
                                <div className="symptomps-one__image">
                                    <img src="/assets/images/shapes/symp-1-1.png" alt=""/>
                                </div>
                                <h3>Cough</h3>
                            </div>
                        </div>

                        <div className="col-xl-2 col-lg-4 col-md-6">
                            <div className="symptomps-one__single">
                                <div className="symptomps-one__image">
                                    <img src="/assets/images/shapes/symp-1-2.png" alt=""/>
                                </div>
                                <h3>Fever</h3>
                            </div>
                        </div>

                        <div className="col-xl-2 col-lg-4 col-md-6">
                            <div className="symptomps-one__single">
                                <div className="symptomps-one__image">
                                    <img src="/assets/images/shapes/symp-1-3.png" alt=""/>
                                </div>
                                <h3>Breath</h3>
                            </div>
                        </div>

                        <div className="col-xl-2 col-lg-4 col-md-6">
                            <div className="symptomps-one__single">
                                <div className="symptomps-one__image">
                                    <img src="assets/images/shapes/symp-1-4.png" alt=""/>
                                </div>
                                <h3>Headache</h3>
                            </div>
                        </div>

                        <div className="col-xl-2 col-lg-4 col-md-6">
                            <div className="symptomps-one__single">
                                <div className="symptomps-one__image">
                                    <img src="/assets/images/shapes/symp-1-5.png" alt=""/>
                                </div>
                                <h3>Confusion</h3>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-4 col-md-6">
                            <div className="symptomps-one__single">
                                <div className="symptomps-one__image">
                                    <img src="/assets/images/shapes/symp-1-6.png" alt=""/>
                                </div>
                                <h3>Sore Throat</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}