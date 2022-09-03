import React,{ Component } from 'react';
import Link from 'next/link';

export default class PageHeader extends React.Component {
    constructor(){
        super()
    }

    render(){
        return (

            <section className="page-header">
                <div className="container">
                    <h2>{this.props.title}</h2>
                    <ul className="thm-breadcrumb list-unstyled">
                        <li><Link href="/"><a>Home</a></Link></li>
                        <li><span>{this.props.title}</span></li>
                    </ul>
                </div>
            </section>
        )
    }
}