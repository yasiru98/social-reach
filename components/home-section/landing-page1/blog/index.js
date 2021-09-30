import React  ,{useState} from 'react';
import Link from "next/link";

import { SectionTitle,SectionStyle3 } from '../../../xamin';

const Blog = (props) => {
    const bloglist = props.bloglist;
    const [isFulltext, setIsfulltext] = useState(false);
    return bloglist.map((blog, index) => (
                <div  key={index} className="item">
                    <div className="iq-blog-box mb-0">
                            <div className="iq-blog-image clearfix">
                                <img alt="#" className="img-fluid center-block"  src={blog.img} />
                                {/*<ul className="iq-blogtag">*/}
                                    {/*<li>*/}
                                        {/*<a href="#">{blog.linkname}</a>*/}
                                    {/*</li>*/}
                                {/*</ul>*/}
                            </div>
                            <div className="iq-blog-detail">
                                {/*<div className="iq-blog-meta">*/}
                                    {/*<ul>*/}
                                        {/*<li className="list-inline-item">*/}
                                            {/*<a>*/}
                                                {/*<time className="entry-date published updated" >{blog.time}</time>*/}
                                            {/*</a>*/}
                                        {/*</li>*/}
                                    {/*</ul>*/}
                                {/*</div>*/}
                                <div className ="blog-title">
                                        <a href="#">
                                            <h4>
                                                {blog.title}
                                            </h4>
                                        </a>
                                </div>
                                <p>
                                    {isFulltext?blog.desc:blog.desc.substr(0,250)}
                                </p>
                                <div className="blog-button">

                                        <a className="button-link" onClick={()=>setIsfulltext(!isFulltext)} >{isFulltext?"Read Less":"Read More"}<i className="fa fa-angle-right" aria-hidden="true"></i></a>

                                </div>
                            </div>
                        </div>
                </div>
    ));
};

class Index extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cardData: [
                {
                    img:"https://yt3.ggpht.com/ytc/AKedOLRHhqokBNf5AAsejLrvwi9RMn4ESn1QrMK3OzCc=s900-c-k-c0x00ffffff-no-rj",
                    // linkname:  "HTML",
                    time: "September 26, 2019 ",
                    title: "Health Promotion Bureau",
                    desc: "The Health Promotion Bureau of Sri Lanka uses the services of Social Reach keep track of the Sri Lankan community’s health-related online discussions. In the HPB’s quest to keep the Sri Lankans well educated on health issues, precautions that should be taken and misconceptions Social Reach has been of great help as they are kept on the ball with the trending health topics discussed, the accuracy of the content discussed and the people’s sentiment towards them. \n" +
                        "These findings help the HPB to plan out their awareness campaigns accordingly in a way to cater the need of the hour. They are always aware whenever the community needs guidance over misconceptions and know exactly through which sources, they should reach them.",
                },
                {
                    img:"https://m.media-amazon.com/images/I/81iWl10+2SL._SS500_.jpg",
                    // linkname:  "HTML",
                    time: "September 26, 2019 ",
                    title: "Umaria's campaign",
                    desc:"Optimising on Social Reach's capabilities of tracking appropriate keywords with ease, Umaria's 'Manda Pama' was pushed towards viral-dom. Careful analysis of key trends and social sentiments on the campaign through the usage of Social Reach, content-based marketing campaigns were pushed forward via Facebook groups and communities.\n"+
                     "The analytics-based strategies that were promoted brought about 10 million views in a span of 4 weeks.",    
                },
                {
                    img:"https://imigames.io/static/img/logo.a23bb37.png",
                    // linkname:  "Design",
                    time: "September 26, 2019 ",
                    title: "IMI",
                    desc: "The one-stop hyper-casual gaming platform, IMI Games acquired it's 100,000+ registered userbase through perfectly optimized Facebook campaigns. Weekly reports were pushed forward through the use of Social Reach's analytical capabilities. Impressions and engagements were broken down into portions based on demographics and were targeted to bring about higher app downloads and retention.",
                }

               
            ]
        }
    }

    render() {

        return (
            <>
                <section className="pt-0" id="our-cases">
                    <div className="container">
                        <div className="row layer-fly-one">
                            <div className="col-md-12">
                                <SectionTitle
                                        // link="BLOG"
                                        className = "title-box wow fadeInUp text-center"
                                        title="Case studies"
                                        spanclass="title-design"
                                />
                                <div className="xamin-recentblog v1">
                                    <div className="owl-carousel owl-loaded owl-drag" data-dots="false" data-nav="false" data-items="2" data-items-laptop="2" data-items-tab="2" data-items-mobile="1" data-items-mobile-sm="1" data-autoplay="true" data-loop="true">
                                         <Blog bloglist={this.state.cardData} />
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