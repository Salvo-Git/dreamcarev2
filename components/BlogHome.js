import React,{ Component } from 'react';
import Link from 'next/link';

export default class BlogHome extends React.Component {
    constructor(){
        super()
    }

    render(){
        return (

            <section className="blog-one blog-one__home">
                <div className="container">
                    <div className="block-title text-center">
                        <p>List of All Preventions </p>
                        <h3>Checkout Our Main Precaution</h3>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 wow fadeInLeft" data-wow-animation-duration="1500ms"
                             data-wow-animation-delay="000ms">
                            <div className="blog-one__single">
                                <div className="blog-one__single-inner">
                                    <div className="blog-one__image">
                                        <Link href="/news-details">
                                            <a>+</a>
                                        </Link>
                                        <img src="/assets/images/blog/blog-1-1.jpg" alt=""/>
                                    </div>

                                    <div className="blog-one__content">
                                        <ul className="blog-one__meta list-unstyled">
                                            <li><a href="#">22 Mar, 2020</a></li>
                                            <li><a href="#">2 Comments</a></li>
                                        </ul>
                                        <h3><Link href="/news-details"><a>Can Face Mask protect me From Coronavirus?</a></Link>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 wow fadeInUp" data-wow-animation-duration="1500ms"
                             data-wow-animation-delay="100ms">
                            <div className="blog-one__single">
                                <div className="blog-one__single-inner">
                                    <div className="blog-one__image">
                                        <Link href="/news-details">
                                            <a>+</a>
                                        </Link>
                                        <img src="/assets/images/blog/blog-1-2.jpg" alt=""/>
                                    </div>
                                    <div className="blog-one__content">
                                        <ul className="blog-one__meta list-unstyled">
                                            <li><a href="#">22 Mar, 2020</a></li>
                                            <li><a href="#">2 Comments</a></li>
                                        </ul>
                                        <h3><Link href="/news-details"><a>Even dead cats bounce. Throughput. Hit the</a></Link>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 wow fadeInRight" data-wow-animation-duration="1500ms"
                             data-wow-animation-delay="200ms">
                            <div className="blog-one__single">
                                <div className="blog-one__single-inner">
                                    <div className="blog-one__image">
                                        <Link href="/news-details">
                                            <a>+</a>
                                        </Link>
                                        <img src="/assets/images/blog/blog-1-3.jpg" alt=""/>
                                    </div>
                                    <div className="blog-one__content">
                                        <ul className="blog-one__meta list-unstyled">
                                            <li><a href="#">22 Mar, 2020</a></li>
                                            <li><a href="#">2 Comments</a></li>
                                        </ul>
                                        <h3><Link href="/news-details"><a>Highlights window-licker touch base. This
                                            medium</a></Link></h3>
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