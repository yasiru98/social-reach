import React from 'react';
import { BannerStyle1 } from '../../../xamin';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            breadcrumb:[
                {
                    title:'Home',
                    href:'/landing-page1',
                    active:false
                },
                {
                    title:'Left sidebar grid 1',
                    href:'#',
                    active:true
                }
            ]
        }
    }
    render() {
        return (
            <>
                <BannerStyle1
                    title={"Left sidebar grid 1"}
                    breadcrumb={this.state.breadcrumb}
                    image={'./static/assets/images/about-us/04.png'}
                />
            </>
        );
    }
}

export default Index;