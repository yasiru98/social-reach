import React from 'react';

import { SectionTitle, CheckboxList} from '../../../xamin';

class   Index extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            checkList:[
                'Advance Advisory Team',
                'Professional Consulting Services',
                '24/7 Support Help Center',
                'Customer Service &amp; Operations'
            ]   
        };
    }
    render() {
        let { checkList } = this.state;
        return (
            <>
                <section  style={{paddingTop:"inherit"}}>
                    <div className="container">
                    <div className="row">
                           <div id="why-social-reach" className="col-md-12">
                                 <SectionTitle
                                    className={"title-box wow fadeInUp text-center"}
                                    spanclass={"title-design"}
                                    title={"Why Social Reach?"}
                                />
                           </div>

                       </div>

                        <div className="row">
                           <div  className="col-lg-6 wow fadeInUp align-items-center">
                                 <SectionTitle
                                    className={"title-box wow fadeInUp text-left"}
                                    spanclass={"title-design"}
                                    link={""}
                                    title={"Brand Monitoring"}
                                  
                                    subTitle ={<ul style={{listStyleType:"none"}}><li>Use Social Reach to get closer to your customers, efficiently monitor your online reputation and analyse how customers feel about your brand.</li>
                                 <br/><li  style={{marginTop:'-1em'}}>Monitor your brand awareness and understand brand perception among the public.</li>
                                 <br /><li style={{marginTop:'-1em'}}>Track and analyse different client mentions, check the mention sentiment, reactions and reach.</li>
                                 <br /><li style={{marginTop:'-1em'}}>Generate custom reports with vital insights.</li>
                                 <br /><li style={{marginTop:'-1em'}}>Keep checking the mention sentiment and the share of mentions to be sure that your brand reputation grows.</li></ul>}
                                />
                                  {/*<CheckboxList text={"text-left"} items={checkList} />
                                  <div className=" text-left mt-5 ">
                                    <a className="button button-icon" href="#"> <span className="btn-effect"> Read More</span> </a>
                                 </div>*/}
                           </div>
                            <div className="col-lg-6  wow fadeInUp ">
                                 <img  src="./static/assets/images/about-us/13.png" className="attachment-full" alt="" sizes="100vw" />
                            </div>
                        </div>

                        <div className="row mt-5">
                             <div className="col-lg-6  wow fadeInUp ">
                                 <img  src="./static/assets/images/about-us/13.png" className="attachment-full" alt="" sizes="100vw" />
                            </div>
                            <div  className="col-lg-6 wow fadeInUp align-items-center">
                                 <SectionTitle
                                    className={"title-box wow fadeInUp text-left"}
                                    spanclass={"title-design"}
                                    link={""}
                                    title={"Market Research"}
                                    subTitle ={<ul style={{listStyleType:"none"}}><li>Research your market and discover industry trends.</li>
                                    <br/><li  style={{marginTop:'-1em'}}>Sieve out meaningful client mentions on social networks with Social Reach to understand your audience better and improve your marketing strategy.</li>
                                    <br /><li style={{marginTop:'-1em'}}>Get insights on your audience.</li>
                                    <br /><li style={{marginTop:'-1em'}}>Identify influencers.</li>
                                    <br /><li style={{marginTop:'-1em'}}></li>Learn what people love and hate.</ul>}
                                />
                                  {/* {/* <CheckboxList text={"text-left"} items={checkList} />
                                  <div className=" text-left mt-5 ">
                                    <a className="button button-icon" href="#"> <span className="btn-effect"> Read More</span> </a>
                                </div>*/}
                           </div>
                        </div>

                        <div className="row">
                           <div  className="col-lg-6 wow fadeInUp align-items-center">
                                 <SectionTitle
                                    className={"title-box wow fadeInUp text-left"}
                                    spanclass={"title-design"}
                                    link={""}
                                    title={"Campaign Management"}
                                  
                                    subTitle ={<ul style={{listStyleType:"none"}}><li>Using your brand name as a keyword, find considerable discussions on social networks, join them in real-time. </li>
                                 <br/><li  style={{marginTop:'-1em'}}>Manage your reputation by tracking down public complaints and backlashes, and resolving them.</li>
                                 <br /><li style={{marginTop:'-1em'}}>Measure your campaign performances on different sources and identify media to work with.</li></ul>}
                                />
                                  {/*<CheckboxList text={"text-left"} items={checkList} />
                                  <div className=" text-left mt-5 ">
                                    <a className="button button-icon" href="#"> <span className="btn-effect"> Read More</span> </a>
                                 </div>*/}
                           </div>
                            <div className="col-lg-6  wow fadeInUp ">
                                 <img  src="./static/assets/images/about-us/13.png" className="attachment-full" alt="" sizes="100vw" />
                            </div>
                        </div>

                        <div className="row mt-5">
                             <div className="col-lg-6  wow fadeInUp ">
                                 <img  src="./static/assets/images/about-us/13.png" className="attachment-full" alt="" sizes="100vw" />
                            </div>
                            <div  className="col-lg-6 wow fadeInUp align-items-center">
                                 <SectionTitle
                                    className={"title-box wow fadeInUp text-left"}
                                    spanclass={"title-design"}
                                    link={""}
                                    title={"Competitor Spying"}
                                    subTitle ={<ul style={{listStyleType:"none"}}><li>Stay ahead of your competitors with competitive brand monitoring using Social Reach.</li>
                                    <br/><li  style={{marginTop:'-1em'}}>Set up alerts with competitor keywords and monitor the mentions to keep an eye on their online reputation.</li>
                                    <br /><li style={{marginTop:'-1em'}}>Monitor and measure your performance against them.</li>
                                    <br /><li style={{marginTop:'-1em'}}>Measure and compare the share of voice on social media and the web.</li>
                                    <br /><li style={{marginTop:'-1em'}}></li>Get insights on their social media content.</ul>}
                                />
                                  {/* {/* <CheckboxList text={"text-left"} items={checkList} />
                                  <div className=" text-left mt-5 ">
                                    <a className="button button-icon" href="#"> <span className="btn-effect"> Read More</span> </a>
                                </div>*/}
                           </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default Index;
