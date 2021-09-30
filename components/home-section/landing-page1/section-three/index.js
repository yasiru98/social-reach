import React from 'react';

import {  SectionTitle, WaveBox} from '../../../xamin';

class   Index extends React.Component {
    constructor(props) {
        super(props);
        this.state={
           
            checkList:[
                "Social Sharing",
                "Boost SEO ranking",
                "Marketing",
                "Retention",
                "Visual Reviews",
                "Reviews Generation"
            ],
        }
    }

    render() {
        let { cardData,checkList } = this.state;
        return (
            <>
                <section id="iq-about">
                  <div className="container">


                        <div className="row">
                            <div className="col-lg-6  wow fadeInUp xamin-left-img">
                             <img src="static/assets/images/about-us/17.png" alt="about-2" />
                                <div className="scroll-effect top blue ">
                                    <div className="main-video">
                                        <div className="video-img">

                                            <WaveBox />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 wow fadeInUp align-items-center">
                                <div id="iq-about"  className="title-box wow fadeInUp text-left">

                                    <SectionTitle
                                        link ="About us"
                                        title="Who are we?"
                                        subTitle="Social Reach is an integrated social listening and reporting tool that facilitates the extraction of information from social media and web, concerning a brand, product or service by carefully analysing the social trends, online conversations and vast sentiments of the masses."
                                        className = "title-box wow fadeInUp text-left"
                                        spanclass="title-design"
                                    />
                                </div>
                        </div>
                        </div>
                  </div>
                </section>
            </>
        );
    }
}

export default Index;
