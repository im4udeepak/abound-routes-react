import React from 'react';

function PageBanner(props) {
    return (
        <div className="banner" id="banner">
            <div className="container">
                <img
                    src={'assets/images/banner/' + props.image}
                    alt={props.title}
                    className="image-fit"
                />
                <div className="banner-text">
                    <h1 className="title text-white">{props.title}</h1>
                </div>
            </div>
        </div>
    );
}

export default PageBanner;