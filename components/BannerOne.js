import React,{ Component } from 'react';
import Link from "next/link";

export default class BannerOne extends React.Component {
    constructor(){
        super()
    }
    componentDidMount() {
        if ($('.video-popup').length) {
            $('.video-popup').magnificPopup({
                disableOn: 700,
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: true,

                fixedContentPos: false
            });
        }
    }

    render(){
        return (
            <section className="banner-one">
                <img src="/assets/images/shapes/banner-bg-shape-1-1.png" alt="" className="banner-one__moc"/>
                    <div className="container">
                        <div className="banner-one__video wow fadeInUp" data-wow-animation-duration="1500ms">
                            <img src="/assets/images/resources/video-1-1.jpg" alt=""/>
                            <a href="https://www.youtube.com/watch?v=Xj1nUFFVK1E"
                                   className="video-popup banner-one__video-btn"><i className="fa fa-play"></i></a>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="banner-one__content">
                                    <h3>How To Protect Yourself <br/>
                                        From <span>CoronaVirus?</span></h3>
                                    <p>Nulla facilisi. Proin felis neque, suscipit egestas erat a <br/> tincidunt finibus
                                        magna
                                        consectetur lacus.</p>
                                    <Link href="/about">
                                        <a className="thm-btn banner-one__btn">Discover More</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>

        )
    }
}