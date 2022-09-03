import React,{ Component } from 'react';

export default class AboutFive extends React.Component {
    constructor(){
        super()
    }

    render(){
        return (

            <section className="about-five">
                <div className="container">
                    <img src="/assets/images/resources/about-moc-1-1.png" className="about-five__moc" alt=""/>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="about-five__content">
                                    <i className="about-five__icon vimns-icon-shopping-online"></i>
                                    <div className="block-title text-left">
                                        <p>Stay Home & Save Yourself From Coronavirus </p>
                                        <h3>Purchase What You Need Online</h3>
                                    </div>
                                    <p>Duis aute irure dolor in reprehenderit in voluptate <br/> velit esse cillum dolore
                                        eu fugiat nulla
                                        pariatur.</p>

                                    <ul className="list-unstyled about-one__list">
                                        <li><i className="vimns-icon-tick"></i> Refresing to get such a personal touch.
                                        </li>
                                        <li><i className="vimns-icon-tick"></i> Duis aute irure dolor in reprehenderit
                                            in voluptate.
                                        </li>
                                        <li><i className="vimns-icon-tick"></i> Velit esse cillum dolore eu fugiat nulla
                                            pariatur.
                                        </li>
                                    </ul>
                                    <a href="#" className="thm-btn about-five__btn">Discover More</a>
                                </div>
                            </div>
                        </div>
                </div>
            </section>
        )
    }
}