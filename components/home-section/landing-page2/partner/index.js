import React from 'react';

import { SectionTitle,Carousel } from '../../../xamin';

const Carousel1 = (props) => {
    const cardList = props.cardList;
    return cardList.map((card, index) => (
                <div  key={index} className="item">
                    <div className="clients-box">
                        <img alt="#" className="img-fluid client-img" src={card.img} />
                    </div>
                </div>
    ));
};


class Index extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            cardData1: [
                {
                    img:  './static/assets/images/partners/1.png',
                   
                },
                {
                    img:  './static/assets/images/partners/2.png',
                    
                },
                {
                    img:  './static/assets/images/partners/3.png',
                    
                },
                {
                    img:  './static/assets/images/partners/4.png',
                    
                },
                {
                    img:  './static/assets/images/partners/5.png',
                    
                }
            ],
           
        }

    }

    render() {

        return (
            <>
                <section className="pt-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 wow fadeInUp">
                                <SectionTitle
                                        link="OUR PARTNERS"
                                        title="We Partner With Amazing Brands"
                                        className = "title-box wow fadeInUp  text-center"
                                        spanclass="title-design"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="owl-carousel owl-loaded owl-drag"
                                    data-dots="false"
                                    data-nav="false"
                                    data-items="6"
                                    data-items-laptop="4"
                                    data-items-tab="3"
                                    data-items-mobile="2"
                                    data-items-mobile-sm="1"
                                    data-autoplay="true"
                                    data-loop="true"
                                    data-margin="30"
                                >
                                        { this.state.cardData1.map((item, index) => (
                                                <Carousel
                                                    key={index}
                                                    img ={item.img}
                                                    imgClass ="img-fluid client-img"
                                                />
                                        )) }
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