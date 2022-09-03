import React,{ Component } from 'react';

export default class Preloader extends React.Component {
    constructor(){
        super()
    }

    componentDidMount() {
        $(window).on('load', function () {
            if ($('.preloader').length) {
                $('.preloader').fadeOut();
            }
        })
    }

    render(){
        return (
            <div className="preloader">
                <img src="/assets/images/loader.png" className="preloader__image" alt="" />
            </div>
        )
    }
}