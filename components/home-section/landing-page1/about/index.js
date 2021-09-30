import React from 'react';
import Link from "next/link";

import { SectionStyle1, SectionTitle, CheckboxList} from '../../../xamin';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            checklist: [
                "Advance Advisory Team",
                "Professional Consulting Services",
                "24/7 Support Help Center",
                "Customer Service &amp; Operations",
            ]
        };
    }

    render() {
     
        return (
            <>
                <SectionStyle1  rowReverse={true}>

                    <div className="col-lg-6">
                        <img className="single_image-img attachment-full" src="https://xaminreact.iqonic.design/static/assets/revslider/assets_slider6/demo5-rev-02.png"  alt="drive01" />
                    </div>
                    <div className="col-lg-6 wow fadeInLeft fadeInUp align-items-center">
                        <div id="iq-about"  className="title-box wow fadeInUp text-left">
                                <SectionTitle
                                    link ="About us"
                                    title="Who are we?"
                                    subTitle="Social reach is a brainchild of Arimac, a digital disruptor that has been in operations for well over 8 years. Social Reach is an integrated reporting tool, that facilitates the extraction of information on a respective brand- carefully analysing the market trends, the conversation online, and vast sentiment analysis- in respect to a brand, a product or service."
                                    //subTitle=""
                                    className = "title-box wow fadeInUp text-left"
                                    spanclass="title-design"
                                    />
                        </div>
                        


                        <div className=" text-left mt-5 ">
                            <Link href="/about-us-1">
                                <a className="button button-icon" > <span className="btn-effect"> Read More</span> </a>
                            </Link>
                        </div>
                    </div>
                </SectionStyle1>     
            </>
        );
    }
}

export default Index;
