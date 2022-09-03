import React,{ Component } from 'react';

export default class ContactForm extends React.Component {
    constructor(){
        super()
    }

    render(){
        return (

            <section className="contact-one">
                <div className="container">
                    <div className="block-title text-center">
                        <p>Contact With Us</p>
                        <h3>Still Have a Question?</h3>
                    </div>
                    <form action="#" className="contact-one__form">
                        <div className="row">
                            <div className="col-lg-6">
                                <input type="text" placeholder="Name" />
                            </div>
                            <div className="col-lg-6">
                                <input type="text" placeholder="Email Address" />
                            </div>
                            <div className="col-lg-6">
                                <input type="text" placeholder="Phone Number" />
                            </div>
                            <div className="col-lg-6">
                                <input type="text" placeholder="Subject" />
                            </div>
                            <div className="col-lg-12">
                                <textarea placeholder="Write Message"></textarea>
                            </div>
                            <div className="col-lg-12 text-center">
                                <button type="submit" className="thm-btn contact-one__btn">Send Message</button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        )
    }
}