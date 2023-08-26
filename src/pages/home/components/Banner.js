import React from 'react';

function Banner(props) {
    return (
        <div className="banner" id="banner">
            <div className="container-fluid p-0">
                <video id="myVideo" className="image-fit" autoPlay={true} loop={true} controls={true}>
                    <source src="/assets/videos/banner.mp4" type="video/mp4" />
                    Your browser does not support HTML5 video.
                </video>
                <div className="banner-text d-none">
                    <h1 className="title text-white">Abound Routes</h1>
                </div>
            </div>
        </div>
    );
}

export default Banner;