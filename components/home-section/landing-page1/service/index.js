import React from 'react';

import { SectionTitle,SectionStyle3, CardStyle13 } from '../../../xamin';


class Index extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            cardData: [
                {

                    name: "A strategy that believes in integration",

                    description: "Sick and tired of using multiple tools to get data on what the traffic to your Social Media Platform or your website is?\n" +
                        "We have a one stop solution for you!\n" +
                        "An integrated toolbox that will give you all the information you need to figure out where you are heading. From Facebook, Instagram, LinkedIn, Twitter, and Youtube- also Google Analytics, you know where you are heading with ease!\n ",
                },
                {

                    name: "Set measurable goals and track your progress",

                    description: "Set internal and external KPI’s for your business to achieve- and keep track of where you are, against pre-established goals, so you know what you can do to optimise your strategies, and your work to improve and bring about a higher performance. ",
                }
               
            ]
        }

    }

    render() {
        let { cardData } = this.state;
        return (
            <>
                <SectionStyle3  >
                <div className="row">
                     <div className="col-sm-12 wow fadeInUp">
                        {/*<SectionTitle*/}
                                {/*link="OUR SERVICES"*/}
                                {/*className = "title-box wow fadeInUp text-center"*/}
                                {/*title="What Our Clients Say"*/}
                                {/*spanclass="title-design"*/}
                        {/*/>*/}
                    </div>
                </div>
                <div className="row" id="our-service">
                    <div className="col-md-12  wow fadeInUp  ">
                            <div className="owl-carousel testimonial-style owl-loaded owl-drag" data-dots="true" data-nav="false" data-autoplay="true" data-loop="true" data-items="1" data-items-laptop="1" data-items-tab="1" data-items-mobile="1" data-items-mobile-sm="1" data-margin="30">
                                {
                                    cardData.map((card, index) => (
                                        <CardStyle13
                                            key={index}
                                            image={card.images}
                                            title={card.name}
                                            subTitle={card.position}
                                            description={card.description}
                                        />
                                    ))
                                }
                            </div>
                    </div>
               </div>

                </SectionStyle3>
            </>
        );
    }

}

export default Index;