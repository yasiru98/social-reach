import React from 'react';
import Link from "next/link";

import { FooterMain, FooterLogo, FooterAddress, FooterLinks } from '../../../xamin';

class Index extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            footerText: [
                {
                    icon: true,
                    iconClass: 'fa fa-phone',
                    text: '(+94) 115 219 554'
                },
                {
                    icon: true,
                    iconClass: 'fa fa-envelope',
                    text: 'info@socialreach.ai'
                },
                {
                    icon: true,
                    iconClass: 'fa fa-home',
                    text: 'Arimac Digital\n' +
                        '\n' +
                        'No 02, 6 th Lane,\n' +
                        '\n' +
                        'Colombo 03, Sri Lanka.'
                }
            ],
            footerHome: [
                {
                    section: [
                        {
                            href: '#',
                            title: 'Home'
                        },
                        {
                            href: '#',
                            title: 'Blog'
                        },
                        {
                            href: '#',
                            title: 'Careers'
                        },
                        {
                            href: '#',
                            title: 'Clients'
                        }, 
                        {
                            href: '#',
                            title: 'Service'
                        }
                    ]
                },
                
            ],
            footerAbout: [
                {
                    section: [
                        {
                            href: '#',
                            title: 'Home'
                        },
                        {
                            href: '#',
                            title: 'Blog'
                        },
                        {
                            href: '#',
                            title: 'Careers'
                        },
                        {
                            href: '#',
                            title: 'Clients'
                        }, 
                        {
                            href: '#',
                            title: 'Service'
                        }
                    ]
                },
                
            ],
        }

    }

    render() {
        const { footerText, footerHome, footerAbout } = this.state;
        return (
            <>
                <FooterMain className={"footer-one iq-bg-dark iq-over-dark-90"}>
                    <div className="container">
                            <div className="footer-top">

                                 
                                <div className="row">
                                    <div className="col-lg-4 col-md-6 col-sm-6 ">
                                        <FooterLogo
                                            sectionImage={ './static/assets/images/logo23.png' }
                                            sectionText={"With our product all you have to do is- integrate your social media profiles on to the tool, and watch how it grows!"}
                                            
                                        />
                                    </div>
                                    {/*<div className="col-lg-2 col-md-6 col-sm-6 mt-4 mt-lg-0 mt-md-0">*/}
                                        {/*<FooterLinks title={"Menu"} content={footerHome}  />*/}
                                    {/*</div>*/}


                                    {/*<div className="col-lg-2 col-md-6 col-sm-6 mt-lg-0 mt-4">*/}
                                        {/*<FooterLinks title={"About us"} content={footerAbout}  />*/}
                                    {/*</div>*/}

                                    <div className="col-lg-4 col-md-6 col-sm-6 mt-lg-0 mt-4">
                                        <FooterAddress  addressContent={footerText} addressTitle={"Contact Us"} />
                                    </div>
                                </div>
                    </div>
                    </div>
                    <footer>
                        <div className="copyright-footer">
                                <div className="pt-3 pb-3">
                                    <div className="row flex-row-reverse justify-content-between">
                                        <div className="col-lg-12 col-md-12 text-lg-center text-md-center text-center"> <span className="copyright">Copyright 2020 <Link href="https://arimaclanka.com/"><a>Arimac|Social Reach</a></Link> All Rights Reserved.</span> </div>
                                    </div>
                                </div>
                            </div>
                    </footer>
                </FooterMain>
               
            </>
        );
    }

}

export default Index;