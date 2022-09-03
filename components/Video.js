import React,{ Component } from 'react';

export default class Video extends React.Component {
    constructor(){
        super()
    }

    render(){
        return (

            <section className="video-one">
                <div className="container">
                    <div className="video-one__box">
                        <img src="/assets/images/resources/video-2-1.jpg" alt=""/>
                            <div className="video-one__content">
                                <div className="video-one__content-inner">
                                    <a href="https://www.youtube.com/watch?v=Xj1nUFFVK1E"
                                       className="video-one__video-btn video-popup"><i
                                        className="fa fa-play"></i></a>
                                    <h3>Watch Corona Video</h3>

                                </div>
                            </div>
                    </div>
                </div>
            </section>
        )
    }
}