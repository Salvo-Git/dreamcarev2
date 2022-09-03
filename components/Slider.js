import React,{ Component } from 'react';
import Link from 'next/link';

export default class Slider extends React.Component {
    constructor(){
        super()
    }

    componentDidMount() {
        if ($('.thm__owl-carousel').length) {
            $('.thm__owl-carousel').each(function () {
                var Self = $(this);
                var carouselOptions = Self.data('options');
                var carouselPrevSelector = Self.data('carousel-prev-btn');
                var carouselNextSelector = Self.data('carousel-next-btn');
                var thmCarousel = Self.owlCarousel(carouselOptions);
                if (carouselPrevSelector !== undefined) {
                    $(carouselPrevSelector).on('click', function () {
                        thmCarousel.trigger('prev.owl.carousel');
                        return false;
                    });
                }
                if (carouselNextSelector !== undefined) {
                    $(carouselNextSelector).on('click', function () {
                        thmCarousel.trigger('next.owl.carousel');
                        return false;
                    });
                }
            });
        }
    }

    render(){
        return (

            <div className="slider-one__wrapper">
                <div className="slider-one">
                    <div className="slider-one__carousel thm__owl-dot-1 owl-carousel owl-theme thm__owl-carousel"
                         data-carousel-prev-btn=".slider-one__nav-right" data-carousel-next-btn=".slider-one__nav-left"
                         data-options='{"loop": true, "items": 1, "margin": 0, "dots": false, "nav": false, "animateOut": &quot;slideOutDown&quot;, "animateIn": &quot;fadeIn&quot;, "active": true, "smartSpeed": 1000, "autoplay": true, "autoplayTimeout": 7000, "autoplayHoverPause": false}'>
                        <div className="item slider-one__slide-1"
                             style={{backgroundImage: `url(/assets/images/main-slider/slider-1-1.jpg)`}}>
                            <div className="container">
                                <div className="slider-one__content text-center">
                                    <h3 className="anim-elm"><span>Coronavirus</span> <br/> World Health Organization
                                    </h3>
                                    <Link href="/about">
                                        <a className="thm-btn anim-elm">Discover More</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="item slider-one__slide-2"
                             style={{backgroundImage: `url(/assets/images/main-slider/slider-1-2.jpg)`}}>
                            <div className="container">
                                <div className="slider-one__content text-center">
                                    <h3 className="anim-elm"><span>Coronavirus</span> <br/> World Health Organization
                                    </h3>
                                    <Link href="/about">
                                        <a className="thm-btn anim-elm">Discover More</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="item slider-one__slide-1"
                             style={{backgroundImage: `url(/assets/images/main-slider/slider-1-3.jpg)`}}>
                            <div className="container">
                                <div className="slider-one__content text-center">
                                    <h3 className="anim-elm"><span>Coronavirus</span> <br/> World Health Organization
                                    </h3>
                                    <Link href="/about">
                                        <a className="thm-btn anim-elm">Discover More</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slider-one__nav">
                        <a href="#" className="slider-one__nav-left"><i className="vimns-icon-front"></i></a>
                        <a href="#" className="slider-one__nav-right"><i className="vimns-icon-back"></i></a>
                    </div>
                </div>
                <a href="https://www.youtube.com/watch?v=Xj1nUFFVK1E" className="slider-one__video-btn video-popup"><i
                    className="fa fa-play"></i></a>
            </div>
        )
    }
}