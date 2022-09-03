import React,{ Component } from 'react';

export default class BrandOne extends React.Component {
    constructor(){
        super()
    }

    render(){
        return (

            <div className="brand-one">
                <img src="assets/images/shapes/virus-shape-1-2.png" className="brand-one__shape" alt=""/>
                    <div className="container">
                        <div className="brand-one__carousel owl-theme owl-carousel thm__owl-carousel"
                             data-options='{"nav": false, "autoplay": true, "autoplayTimeout": 5000, "smartSpeed": 700, "dots": false, "margin": 140, "responsive": { "0": { "items": 2, "margin": 20 }, "480": { "items": 2, "margin": 20 }, "767": { "items": 3, "margin": 20 }, "991": { "items": 4, "margin": 40 }, "1199": { "items": 5 } }}'>
                            <div className="item">
                                <img src="/assets/images/brand/envato-1-1.png" alt="" />
                            </div>
                            <div className="item">
                                <img src="/assets/images/brand/envato-1-1.png" alt="" />
                            </div>
                            <div className="item">
                                <img src="/assets/images/brand/envato-1-1.png" alt="" />
                            </div>
                            <div className="item">
                                <img src="/assets/images/brand/envato-1-1.png" alt="" />
                            </div>
                            <div className="item">
                                <img src="/assets/images/brand/envato-1-1.png" alt="" />
                            </div>
                            <div className="item">
                                <img src="/assets/images/brand/envato-1-1.png" alt="" />
                            </div>
                            <div className="item">
                                <img src="/assets/images/brand/envato-1-1.png" alt="" />
                            </div>
                            <div className="item">
                                <img src="/assets/images/brand/envato-1-1.png" alt="" />
                            </div>
                            <div className="item">
                                <img src="/assets/images/brand/envato-1-1.png" alt="" />
                            </div>
                            <div className="item">
                                <img src="/assets/images/brand/envato-1-1.png" alt="" />
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}