import React from 'react';

import {  SectionTitle, AdressSection} from '../../../xamin';

class   Index extends React.Component {
    constructor(props) {
        super(props);
        this.state={
        }
    }

    render() {
        return (
            <>
                 <section  id="our-service" className="pt-0 pb-1" >
                    <div  className="container">
                        <div className="row">
                            <div className="col-lg-4 pr-3">
                                <div  className="title-box wow fadeInUp mb-0 text-center text-lg-left border-right ">
                                    <h2>What do we offer?</h2>
                                </div>
                            </div>
                            <div className="col-lg-8 align-self-center">
                                <p>Our tool comes with a suite of functionalities- which can be customised based on your requirements.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default Index;
