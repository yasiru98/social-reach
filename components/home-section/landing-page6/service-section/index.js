import React from 'react';
import $ from 'jquery';


import { SectionTitle } from '../../../xamin';


const tabActive = (id) => {
    $('.tab-content').find('.active').removeClass('active');
    $('.nav-item').find('.active1').removeClass('active1');
    $('#' + id).addClass('active');
};

const List = (props) => {
    const listItems = props.tabs;
    const list = listItems.map((item, index) => (
        <li key={index} className="nav-item" style={{paddingLeft:'0px'}}>
            <a
                id={item.id}
                className={ item.active ? "nav-link show active " : "nav-link"}
                data-toggle="pill"
                href={'#' + item.href}
                role="tab"
                aria-selected="true"
                onClick={() => { tabActive(item.href) }}
            > 
                <div className="media">
                    <img src={item.img} alt="tab-image"  style={{display: 'none'}} className="img-fluid" ></img>
                    <div className="media-body">
                        <h5 className="mb-2 active-title">{item.title}</h5>
                        <p className="mb-0">{item.text}</p>
                    </div>
                </div>
               
            </a>
        </li>
    ));

    return (
        <>
            <ul  className="nav nav-pills nav-pills-style-3 mb-5" id="myTab" role="tablist" aria-orientation="vertical">
                { list }
            </ul>
        </>
    );
};

class Index extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cardData: [
                {
                    id: 'alerts',
                    href: 'tab-alerts',
                    active: true,
                    title:"Alerts",
                    img:"./static/assets/images/services/6-1.png",
                    text:"Create Alerts to monitor any brand, product, service or topic concerned."
                },
                {
                    id: 'mention-feed',
                    href: 'tab-mentions-feed',
                    active: false,
                    title:"Mentions Feed",
                    img:"./static/assets/images/services/6-2.png",
                    text:"Get an organized stream of mentions of a given alert across various sources all in one feed."

                },
                {
                    id: 'mention-analysis',
                    href: 'tab-mention-analysis',
                    active: false,
                    title:"Mention Analysis",
                    img:"./static/assets/images/services/6-3.png",
                    text:"Analyse the distribution of mentions across sources using Social Reach's Mentions Analysis features."
                },
                {
                    id: 'sentiment-analysis',
                    href: 'tab-sentiment-analysis',
                    active: false,
                    title:"Sentiment Analysis",
                    img:"./static/assets/images/services/6-4.png",
                    text:"Analyse the sentiments of mentions using Social Reach's features which uses advanced algorithms to detect sentiments in posts."

                },
                {
                    id: 'keyword-clouds',
                    href: 'tab-keyword-clouds',
                    active: false,
                    title:"Keyword Clouds",
                    img:"./static/assets/images/services/6-4.png",
                    text:"Visualize all the trending keywords related to your alert through Social Reach's keyword clouds."

                },
                {
                    id: 'social-listening-reporting',
                    href: 'tab-social-listening-reporting',
                    active: false,
                    title:"Social Listening Reporting",
                    img:"./static/assets/images/services/6-4.png",
                    text:"Obtain instant reports of the findings of the social listening to alerts. Insight Reports with deeper analysis can also be produced."

                },
                {
                    id: 'social-media-reporting',
                    href: 'tab-social-media-reporting',
                    active: false,
                    title:"Social Media Reporting",
                    img:"./static/assets/images/services/6-4.png",
                    text:"Connect your social media pages, websites and monitor their performance, campaign performance, monitor the growth of reach and engagement."

                },
               
            ]
        }
    }

    render() {
        const tabs = this.state.cardData;
        return (
            <>
               <section className="pt-0">
                   <div className="container">
                       <div className="row">
                           <div id="features" className="col-md-12">
                                 <SectionTitle
                                    className={"title-box wow fadeInUp text-center"}
                                    spanclass={"title-design"}
                                    //link={"OUR SERVICES"}
                                    title={"Features"}
                                />

                           </div>

                       </div>

                       <div className="row custom-tab verticaltab3">
                        <div className="col-md-6">
                            <div className="col-lg-12 col-md-12">
                                <List tabs={tabs} />
                            </div>
                        </div>
                        <div className="col-md-6 tab-content">
                            <div id="tab-alerts" className="tab-pane fade active show">
                                <div className="xamin-right-img-wm">
                                    <img width="863" height="528" src="./static/assets/images/features/alerts.jpg" className="attachment-full"  sizes="100vw" />
                                </div>
                        </div>
                        <div id="tab-mentions-feed" className="tab-pane fade">
                            <div className=" xamin-right-img-wm">
                                    <img width="650" height="" src="./static/assets/images/features/mentions-feed.png" className="attachment-full"  sizes="" />
                            </div>
                        </div>
                        <div id="tab-mention-analysis" className="tab-pane fade">
                            <div className=" xamin-right-img-wm">
                                    <img width="863" height="528" src="./static/assets/images/features/sources-by-mentions.jpg" className="attachment-full"  sizes="100vw" />
                            </div>
                        </div>
                        <div id="tab-sentiment-analysis" className="tab-pane fade">
                            <div className=" xamin-right-img-wm">
                                    <img width="863" height="528" src="./static/assets/images/features/sentiment-analysis.jpg" className="attachment-full"  sizes="100vw" />
                            </div>
                        </div>    
                        <div id="tab-keyword-clouds" className="tab-pane fade">
                            <div className=" xamin-right-img-wm">
                                    <img width="663" height="228" src="./static/assets/images/features/word-cloud.jpg" className="attachment-full" sizes="100vw"  />
                            </div>
                        </div>
                        <div id="tab-social-listening-reporting" className="tab-pane fade">
                            <div className=" xamin-right-img-wm">
                                    <img width="863" height="528" src="./static/assets/images/features/social-media-reporting.jpg" className="attachment-full"  sizes="100vw" />
                            </div>
                        </div>
                        <div id="tab-social-media-reporting" className="tab-pane fade">
                            <div className=" xamin-right-img-wm">
                                    <img width="863" height="528" src="./static/assets/images/features/dashboard.jpg" className="attachment-full"  sizes="100vw" />
                            </div>
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