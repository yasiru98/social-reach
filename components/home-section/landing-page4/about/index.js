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
                <section id="why-social-reach" style={{paddingTop:"inherit", paddingBottom:"60px"}}>
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
                            <svg xmlns="http://www.w3.org/2000/svg" className="attachment-full" alt="" sizes="100vw" style={{fill:'#437eeb', paddingLeft:'150'}}  height="400" viewBox="0 0 24 24"><path d="M4.411 14.836l1.078-6.565 1.1 4.726c.109.484.782.539.965.072l.997-2.548.573 1.165s.187.314.498.314h1.378v-1h-1.05l-.956-2.012c-.179-.415-.771-.406-.936.016l-.845 2.16-1.303-5.769c-.059-.265-.275-.395-.49-.395-.229 0-.457.145-.502.425l-1.081 6.665-1.105-4.104c-.123-.49-.814-.519-.972-.032l-.821 3.046h-.939v.984h1.337c.183 0 .381-.147.433-.323l.466-1.506 1.187 4.723c.133.533.9.498.988-.042zm19.589 2.75l-2.831-2.832c.522-.79.831-1.735.831-2.754 0-2.761-2.238-5-5-5s-5 2.239-5 5 2.238 5 5 5c1.019 0 1.964-.309 2.755-.832l2.831 2.832 1.414-1.414zm-10-5.586c0-1.654 1.346-3 3-3s3 1.346 3 3-1.346 3-3 3-3-1.346-3-3z"/></svg>
                            </div>
                        </div>

                        <div className="row mt-5">
                             <div className="col-lg-6  wow fadeInUp ">
                             <svg xmlns="http://www.w3.org/2000/svg" className="attachment-full" alt="" sizes="100vw" style={{fill:'#437eeb'}}  height="400" viewBox="0 0 24 24"><path d="M5 19h-4v-4h4v4zm6 0h-4v-8h4v8zm6 0h-4v-13h4v13zm6 0h-4v-19h4v19zm1 2h-24v2h24v-2z"/></svg>
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

                    </div>
                </section>
                <section style={{paddingTop:"inherit"}}>
                    <div className="container">       
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
                            <svg xmlns="http://www.w3.org/2000/svg" className="attachment-full" alt="" sizes="100vw" style={{fill:'#437eeb', paddingLeft:'150'}}  height="400" viewBox="0 0 24 24" fillRule="evenodd" clipRule="evenodd"><path d="M3.5 16.343l1.07 2.207 2.43.335-1.769 1.7.432 2.415-2.163-1.157-2.163 1.157.432-2.415-1.769-1.7 2.43-.335 1.07-2.207zm8.5 0l1.07 2.207 2.43.335-1.769 1.7.432 2.415-2.163-1.157-2.163 1.157.432-2.415-1.769-1.7 2.43-.335 1.07-2.207zm8.5 0l1.07 2.207 2.43.335-1.769 1.7.432 2.415-2.163-1.157-2.163 1.157.432-2.415-1.769-1.7 2.43-.335 1.07-2.207zm-.993-3.343h-.01c.022-4.906-2.246-2.772-2.246-6.676 0-1.507.983-2.324 2.248-2.324 1.869 0 3.169 1.787 1.399 5.129-.581 1.099.62 1.359 1.91 1.657 1.118.258 1.192.805 1.192 1.751v2.463h-4.493v-2zm-19.507 2v-2.463c0-.946.074-1.493 1.192-1.751 1.29-.298 2.491-.558 1.91-1.657-1.77-3.342-.47-5.129 1.399-5.129 1.265 0 2.248.817 2.248 2.324 0 3.904-2.268 1.77-2.246 6.676h.005v2h-4.508zm6 0v-2.623c0-1.258.1-1.985 1.588-2.329 1.684-.389 3.344-.736 2.545-2.209-2.366-4.364-.674-6.839 1.866-6.839 2.491 0 4.226 2.383 1.866 6.839-.775 1.464.826 1.812 2.545 2.209 1.49.344 1.589 1.072 1.589 2.333l.001 2.619h-12z"/></svg>
                            </div>
                        </div>

                        <div className="row mt-5">
                             <div className="col-lg-6  wow fadeInUp ">
                                {/*} <img  src="./static/assets/images/about-us/13.png" className="attachment-full" alt="" sizes="100vw" />*/}
                                 <svg xmlns="http://www.w3.org/2000/svg"  className="attachment-full" alt="" sizes="100vw" style={{fill:'#437eeb'}}  height="400" viewBox="0 0 24 24"><path d="M18.955 13.934c0 .789-.639 1.428-1.428 1.428s-1.427-.639-1.427-1.428l.027-.276c.702.257 1.393-.42 1.145-1.128l.256-.023c.788-.001 1.427.639 1.427 1.427zm5.045-.233s-2.316 4.299-6.528 4.299c-2.622 0-4.668-2.173-5.733-3.316-.313-.336-.751-.527-1.211-.527h-.89c-.311 0-.407-.124-.499-.315l-.574-1.312-.999 2.553c-.183.467-.856.412-.966-.073l-1.058-5.51-1.167 8.075c-.088.542-.857.577-.991.042l-1.146-5.453-.441 1.508c-.052.175-.235.328-.458.328h-1.339v-1h.94l.823-3.041c.157-.487.881-.428 1.005.063l1.055 4.655s1.037-7.912 1.11-8.253c.126-.583.943-.547 1.067-.001l1.225 6.751.847-2.165c.165-.422.759-.431.938-.015l.958 2.146h.741c.422 0 .829-.162 1.136-.452 1.058-1 2.996-2.689 5.627-2.689 4.191.001 6.528 3.702 6.528 3.702zm-3.934.233c0-1.402-1.137-2.539-2.539-2.539s-2.538 1.137-2.538 2.539 1.136 2.538 2.538 2.538 2.539-1.136 2.539-2.538z"/></svg>
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
