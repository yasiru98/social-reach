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
                    title:'Blogs',
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
                    title={"Blog"}
                    breadcrumb={this.state.breadcrumb}
                    image={'./static/assets/images/about-us/04.png'}
                />
            </>
        );
    }
}

export default Index;