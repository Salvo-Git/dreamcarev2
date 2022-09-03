import React,{ Component } from 'react';
import Link from 'next/link';

export default class NavOne extends React.Component {
    constructor(){
        super()
    }

    componentDidMount() {


    }

    render(){
        return (

            <header className="site-header-one">
                <nav className="main-nav__one stricky">
                    <div className="container-fluid">
                        <div className="main-nav__logo-box">
                            <a href="/">
                                <img width="137" src="/assets/images/logo-1-1.png" alt="" />
                            </a>
                            <a href="#" className="side-menu__toggler"><i className="fa fa-bars"></i></a>
                        </div>
                        <div className="main-nav__main-navigation">
                            <ul className=" main-nav__navigation-box">
                                <li className="dropdown">
                                    <a href="/">Home</a>
                                    <ul>
                                        <li><a href="/">Home 01</a></li>
                                        <li><a href="/index-2">Home 02</a></li>
                                        <li className="dropdown"><a href="#">Header Styles</a>
                                            <ul>
                                                <li><a href="/">Header 01</a></li>
                                                <li><a href="/index-2">Header 02</a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown"><a href="#">Dark Styles</a>
                                            <ul>
                                                <li><a href="/index-dark">Dark 01</a></li>
                                                <li><a href="/index-dark-2">Dark 02</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link href="/about"><a>About</a></Link>
                                </li>
                                <li>
                                    <Link href="/prevention"><a>Preventions</a></Link>
                                </li>
                                <li>
                                    <Link href="/faq"><a>FAQs</a></Link>
                                </li>

                                <li className="dropdown">
                                    <Link href="/news"><a>News</a></Link>
                                    <ul>
                                        <li><Link href="/news"><a>News Page</a></Link></li>
                                        <li><Link href="/news-details"><a>News Details</a></Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <Link href="/contact"><a>Contact</a></Link>
                                </li>
                            </ul>
                        </div>
                        <div className="main-nav__cta">
                            <div className="main-nav__cta-icon">
                                <i className="vimns-icon-phone"></i>
                            </div>
                            <div className="main-nav__cta-content">
                                <h3><a href="tel:666-888-0000">666 888 0000</a></h3>
                                <p>Helpline</p>
                            </div>
                        </div>
                        <div className="main-nav__right">
                            <Link href="/prevention">
                                <a className="main-nav__btn">Prevention</a>
                            </Link>
                        </div>
                    </div>
                </nav>

            </header>
        )
    }
}