import React from 'react';
import { SectionTitle,CardStyle18, CardStyle15 } from '../../../xamin';
import logoImg from '../../../../static/assets/images/fancybox/7-5.png';
class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            value: [
                {
                    title: "Seamless Report Aggregation",
                    text: "Social Reach makes way for aggregation of analytics from all across the Social Media Landscape. It will facilitate, the extraction of important metrics which will allow you to understand how your business is performing against set KPI’s.",
                    fancy_img: "https://xaminreact.iqonic.design/static/assets/images/fancybox/7-6.png"
                }, {
                    title: "Omni channel overview of performance",
                    text: "Omni-channel overview of performance: Social Reach is capable of producing real time integrated reports of the performance of a brand’s digital assets.",
                    fancy_img: "https://xaminreact.iqonic.design/static/assets/images/fancybox/7-5.png"
                },
        ]
        }
    }
    render() {
        let { value} = this.state;
        return (
            <>     
                  <section>
                      <div className="container">
                      <div className="row">
                          { 
                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                       <CardStyle18 
                                            title="Social Media Listening"
                                            text="Social Reach is fit with multi lingual capabilities, which facilitates the tracking of conversations in Sinhala, Tamil and English, through a list of pre-approved keywords."
                                            fancy_img =""
                                       />
                                    </div>
                                }
                          </div>

                          <div className="row">
                          { value.map((item, index) => (
                                    <div key ={index} className="col-lg-6 col-md-6 col-sm-12">
                                       <CardStyle18 
                                            title={item.title}
                                            text={item.text}
                                            fancy_img ={item.fancy_img}
                                       />
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