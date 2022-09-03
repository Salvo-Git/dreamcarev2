import React,{ Component } from 'react';
import Link from "next/link";

export default class News extends React.Component {
    constructor(){
        super()
    }

    render(){
        return (

            <section className="blog-one">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="blog-one__single">
                                <div className="blog-one__single-inner">
                                    <div className="blog-one__image">
                                        <Link href="/news-details">
                                            <a>+</a>
                                        </Link>
                                        <img src="/assets/images/blog/blog-1-1.jpg" alt="" />
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
                        <div className="col-lg-4 col-md-6">
                            <div className="blog-one__single">
                                <div className="blog-one__single-inner">
                                    <div className="blog-one__image">
                                        <Link href="/news-details">
                                            <a>+</a>
                                        </Link>
                                        <img src="/assets/images/blog/blog-1-2.jpg" alt="" />
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
                        <div className="col-lg-4 col-md-6">
                            <div className="blog-one__single">
                                <div className="blog-one__single-inner">
                                    <div className="blog-one__image">
                                        <Link href="/news-details">
                                            <a>+</a>
                                        </Link>
                                        <img src="/assets/images/blog/blog-1-3.jpg" alt="" />
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
                        <div className="col-lg-4 col-md-6">
                            <div className="blog-one__single">
                                <div className="blog-one__single-inner">
                                    <div className="blog-one__image">
                                        <Link href="/news-details">
                                            <a>+</a>
                                        </Link>
                                        <img src="/assets/images/blog/blog-1-4.jpg" alt="" />
                                    </div>
                                    <div className="blog-one__content">
                                        <ul className="blog-one__meta list-unstyled">
                                            <li><a href="#">22 Mar, 2020</a></li>
                                            <li><a href="#">2 Comments</a></li>
                                        </ul>
                                        <h3><Link href="/news-details"><a>We don't want to boil the ocean put a record
                                            on</a></Link></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="blog-one__single">
                                <div className="blog-one__single-inner">
                                    <div className="blog-one__image">
                                        <Link href="/news-details">
                                            <a>+</a>
                                        </Link>
                                        <img src="/assets/images/blog/blog-1-5.jpg" alt="" />
                                    </div>
                                    <div className="blog-one__content">
                                        <ul className="blog-one__meta list-unstyled">
                                            <li><a href="#">22 Mar, 2020</a></li>
                                            <li><a href="#">2 Comments</a></li>
                                        </ul>
                                        <h3><Link href="/news-details"><a>Vec staff engagement, or high-level, or
                                            win-win</a></Link></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="blog-one__single">
                                <div className="blog-one__single-inner">
                                    <div className="blog-one__image">
                                        <Link href="/news-details">
                                            <a>+</a>
                                        </Link>
                                        <img src="/assets/images/blog/blog-1-6.jpg" alt="" />
                                    </div>
                                    <div className="blog-one__content">
                                        <ul className="blog-one__meta list-unstyled">
                                            <li><a href="#">22 Mar, 2020</a></li>
                                            <li><a href="#">2 Comments</a></li>
                                        </ul>
                                        <h3><Link href="/news-details"><a>Closer to the metal net net for we need to
                                            make </a></Link></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="post-pagination">
                        <a href="#" className="post-pagination__prev"><i className="fa fa-angle-left"></i></a>
                        <a href="#" className="active">1</a>
                        <a href="#">2</a>
                        <a href="#">3</a>
                        <a href="#" className="post-pagination__next"><i className="fa fa-angle-right"></i></a>
                    </div>
                </div>
            </section>
        )
    }
}