import React,{ Component } from 'react';

export default class ContactInfo extends React.Component {
    constructor(){
        super()
    }

    render(){
        return (

            <section className="contact-info-one">
                <div className="container">
                    <div className="inner-container">
                        <div className="contact-info-one__icon">
                            <i className="vimns-icon-phone"></i>
                        </div>
                        <div className="contact-info-one__content">
                            <div className="contact-info-one__box">
                                <div className="contact-info-one__box-inner">

                                    <h3>Visit Hospital</h3>
                                    <p>855 Road Broklyn Street, USA</p>

                                </div>
                            </div>
                            <div className="contact-info-one__box">
                                <div className="contact-info-one__box-inner">

                                    <h3>Call Now</h3>
                                    <p><a href="tel:666-888-0000">666 888 0000</a></p>

                                </div>
                            </div>
                            <div className="contact-info-one__box">
                                <div className="contact-info-one__box-inner">

                                    <h3>Send Email</h3>
                                    <p><a href="mailto:info@vimns.com">info@vimns.com</a></p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}