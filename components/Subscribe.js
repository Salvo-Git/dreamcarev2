import React,{ Component } from 'react';

export default class Subscribe extends React.Component {
    constructor(){
        super()
    }

    render(){
        return (

            <section className="mailchimp-one">
                <div className="container">
                    <div className="inner-container wow fadeInUp " data-wow-animation-duration="1500ms">
                        <div className="mailchimp-one__icon">
                            <i className="vimns-icon-mail"></i>
                        </div>
                        <form action="#" className="mailchimp-one__form">
                            <div className="mailchimp-one__input">
                                <input type="text" placeholder="Enter your email address" />
                            </div>
                            <button type="submit" className="thm-btn mailchimp-one__btn">Register Now</button>
                        </form>
                    </div>
                </div>
            </section>
        )
    }
}