import React from 'react';

const Index = (props) => {
    return (
        <>
            <div className={props.className} >
                { props.link  ? (<span className={props.spanclass}>{props.link}</span>) : ''}
                <h2>{ props.title }</h2>
                {props.subTitle ? (<span>{ props.subTitle }</span>) : ''}
                {props.img ?
                     (<img src={props.img} width="600" height="360" /> ) :''}
                     
            </div>
        </>
    );
}

export default Index;
