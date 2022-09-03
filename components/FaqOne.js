import React,{ Component } from 'react';

export default class FaqOne extends React.Component {
    constructor(){
        super()
    }

    render(){
        return (

            <section className="faq-one faq-one__home-one">
                <img src="/assets/images/shapes/virus-shape-1-3.png" className="faq-one__virus" alt=""/>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="faq-one__block">
                                    <div className="block-title text-left">
                                        <p>Frequently Asked Questions </p>
                                        <h3>Have any question?</h3>
                                    </div>
                                    <p>There are many variations of passages of available but majority have alteration
                                        in some by inject
                                        humour or <br/> random words.</p>
                                    <img src="assets/images/resources/faq-1-1.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="accrodion-grp" data-grp-name="faq-one-accrodion">
                                    <div className="accrodion active">
                                        <div className="accrodion-title">
                                            <h4>What Are The Coronavirus Symptoms?</h4>
                                        </div>
                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>There are many variations of passages of available but majority have
                                                    alteration in
                                                    some by inject humour or random . </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accrodion ">
                                        <div className="accrodion-title">
                                            <h4>Why We Should Stay At Home?</h4>
                                        </div>
                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>There are many variations of passages of available but majority have
                                                    alteration in
                                                    some by inject humour or random . </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accrodion ">
                                        <div className="accrodion-title">
                                            <h4>COVID-19 Illness can Affect Your Lungs?</h4>
                                        </div>
                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>There are many variations of passages of available but majority have
                                                    alteration in
                                                    some by inject humour or random . </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accrodion ">
                                        <div className="accrodion-title">
                                            <h4>Find Out How We Are Monitoring Corona?</h4>
                                        </div>
                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>There are many variations of passages of available but majority have
                                                    alteration in
                                                    some by inject humour or random . </p>
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