import React from 'react';

const Index = (props) => {

    return (
        <>
                <p className="footer-logo"><img alt="img" src={ props.sectionImage } width="160" /><img alt="img" src="static/assets/images/visual/PoweredByAzure.png" width="160" /></p>
                <p className="footer-logo">{props.sectionText}</p>
                <ul className="infp-share d-inline list-inline">
                    <li className="list-inline-item"><a href="https://www.facebook.com/socialreachai"><i className="fa fa-facebook-f"></i></a></li>
                    <li className="list-inline-item"><a href="https://twitter.com/socialreachai"><i className="fa fa-twitter"></i></a></li>
                    <li className="list-inline-item"><a href=" https://www.instagram.com/socialreachai/"><i className="fa fa-instagram"></i></a></li>
                    <li className="list-inline-item"><a href="https://www.linkedin.com/company/social-reach-ai/"><i className="fa fa-linkedin"></i></a></li>
                </ul>
        </>
    );
};

export default Index;