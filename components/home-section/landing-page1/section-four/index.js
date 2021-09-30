import React from 'react';

import {  SectionTitle, AdressSection} from '../../../xamin';

class   Index extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            data:[
                {

                    text:"Omni-channel overview of performance: Social Reach is capable of producing real time integrated reports of the performance of a brand’s digital assets."
                },
                {

                    text:"Facebook/Instagram/Linkedin Performance Analysis: Social Reach has the ability to obtain an understanding of how a brand would perform on."
                },
                {

                    text:"Facebook- and curate information in regards to Engagements, Reach, Impressions, and ground level information on demographics and post performance."
                },
                {

                    text:"Google Analytic Integration: Social reach can extract information on how ones’ website is performing- and provide information on bounce rates, rough user journey’s, click through rates etc."
                },
            ]
        }
    }

    render() {
        let list = this.state.data;
        return (
            <>
                <section className="pt-0">
                    <div className="container">
                        <div className="row">
                        { list.map((item, index) => (
                            <div key={index} className="col-lg-3 col-md-3 col-sm-12">
                                <div className="servicebox-datascience wow fadeInUp  text-left">
                                    <div className="service-box-detail">
                                        <h2 className="data-title">{item.heading}</h2>
                                        <p>{item.text}</p>
                                        <a className="link-btn" href="#">
                                            <span className="btn-effect"> Read more <i className="fa fa-angle-right"></i></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )) }
                            
                        </div>

                    </div>

                </section>
            </>
        );
    }
}

export default Index;
