import React,{ Component } from 'react';

export default class MapImage extends React.Component {
    constructor(){
        super()
    }

    render(){
        return (

            <section className="map-one">
                <div className="container">
                    <div className="inner-container">
                        <div className="row">
                            <div className="col-lg-5 d-flex">
                                <div className="my-auto">
                                    <div className="map-one__block">
                                        <div className="block-title">
                                            <p>Location by Numbers</p>
                                            <h3>Virus Spread In Countries</h3>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do
                                            eiusmod tempor
                                            incididunt ut labore et dolore magna aliqua lonm andhn.</p>
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="map-one__image">
                                    <img src="/assets/images/shapes/map-1-1.png" alt="" />
                                        <div className="map-one__dot-1">
                                            <h3>China 652420</h3>
                                        </div>
                                        <div className="map-one__dot-2">
                                            <h3>Russia 45980</h3>
                                        </div>
                                        <div className="map-one__dot-3">
                                            <h3>Italy 64534</h3>
                                        </div>
                                        <div className="map-one__dot-4">
                                            <h3>Losangles 221198</h3>
                                        </div>
                                        <div className="map-one__dot-5">
                                            <h3>Canada 222456</h3>
                                        </div>

                                        <div className="map-one__dot-6">
                                            <h3>Philipins 11876</h3>
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