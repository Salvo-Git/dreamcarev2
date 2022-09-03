import React,{ Component } from 'react';

export default class FunFactOne extends React.Component {
    constructor(){
        super()
    }

    render(){
        return (

            <section className="funfact-one">
                <div className="container">
                    <img src="/assets/images/shapes/funfact-virus-1-1.png" className="funfact-one__virus-1" alt=""/>
                        <img src="/assets/images/shapes/funfact-virus-1-2.png" className="funfact-one__virus-2" alt=""/>
                            <h3><span className="counter">468,9800</span></h3>
                            <p>People are Infected by this Virus</p>
                </div>
            </section>
        )
    }
}