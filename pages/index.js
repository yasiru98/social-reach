import React from 'react'
import Head from 'next/head';


// Import asset...../
import logoImg from '../static/assets/images/logo23.png';
// Import for custom styles...
import '../static/style.css';
// Import for the custom plugins...
import { index } from '../config/plugins';


// Import for the Xamin components...
import {HeaderStyle,Loader,ScrollTop,RevSlider} from '../components/xamin';


//Components
import RevolutionSlider from '../components/home-section/landing-page1/revslider';
import About from '../components/home-section/landing-page1/about';
import SectionThree from "../components/home-section/landing-page1/section-three";
import AboutWorks from '../components/home-section/landing-page1/aboutworks';
import HowWorks from '../components/home-section/landing-page1/howworks';
import Services from '../components/home-section/landing-page1/services';
import Projects from '../components/home-section/landing-page1/projects';
import Customers from '../components/home-section/landing-page1/customers';
import Speciality from "../components/home-section/landing-page1/Speciality";

 import Service from '../components/home-section/landing-page1/service';
import Awards from '../components/home-section/landing-page1/awards';
import Blog from '../components/home-section/landing-page1/blog';

import Footer from '../components/home-section/landing-page1/footer';
import Benifits from "../components/home-section/landing-page1/benefit-section";

import Features from "../components/home-section/landing-page6/service-section";
import Why from "../components/home-section/landing-page4/about";

class Index extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            activeMenu:['#iq-home','/landing-page1']
        };
    }

    componentDidMount(props) {

        setTimeout( () => {
            index();
        }, 500);

    }

    render() {
        return (
            <>
                {/* Heading section */}
                <Head>
                    <title> Social Reach - Social Media Management Solutions</title>
                    <meta name="keywords" content="SocialReach Social Media " />
                    <meta name="description" content="Stats and figures are all the rage- and Social reach is here to provide you with all the insights you need. From impressions, to reach, to engagement- stats can be obtained in real time!" />
                    <meta name="author" content="http://iqonic.design/" />

                    <meta property="og:title" content="Social Reach: Social Media Management Solutions"/>
                    <meta property="og:locale" content="en_US"/>
                    <meta property="og:site_name" content="Social Reach"/>
                    <meta property="og:description" content="Stats and figures are all the rage- and Social reach is here to provide you with all the insights you need. From impressions, to reach, to engagement- stats can be obtained in real time!"/>
                    <link rel="shortcut icon" href="./static/assets/images/social-reach.png" />
                </Head>

                {/* Loader section */}
                <Loader />

                {/* header section*/}
                <HeaderStyle
                    className={"style-one"}
                    activeMenu ={this.state.activeMenu}
                    logoImg={logoImg}
                    buttonSection={(<div className="blue-btn button"> <a href="#">Get Started</a> </div>)}
                />

                <RevolutionSlider />


                <div className="main-content">
                    <SectionThree />
                    {/*<About />*/}
                    {/*<Service/>*/}

                    < Speciality/>
                    <Benifits />
                    <Why />
                    <Features />
                    <Blog />
                    {/*<AboutWorks/>*/}
                    {/*<HowWorks />*/}
                    {/*<Services />*/}
                    {/*<Customers />*/}
                    {/*<Projects />*/}


                    {/*<Awards/>*/}
                    {/*<Blog />*/}
                </div>
                <ScrollTop />
                <Footer />
                
            </>
        );
    }
}

export default Index;
