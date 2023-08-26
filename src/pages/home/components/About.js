import React from 'react';
import { Link } from 'react-router-dom';

function About(props) {
    return (
        <section
            className="section section-bg  section-bg-fixed"
            id="about"
            style={{ backgroundImage: 'url("/assets/images/white-flower.png")' }}
        >
            <div className="container">
                <div className="section-header">
                    <img src="/assets/images/icon.png" className="icon" alt="icon" />
                    <h3 className="title">About Us</h3>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="row g-0 mb-5 pb-4 justify-content-center">
                            <div className="col-md-4 col-sm-6">
                                <div className="animated-img about-img">
                                    <img
                                        src="/assets/images/about/01.jpg"
                                        alt="about"
                                        className="image-fit"
                                    />
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="animated-img about-img">
                                    <img
                                        src="/assets/images/about/02.jpg"
                                        alt="about"
                                        className="image-fit"
                                    />
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="animated-img about-img">
                                    <img
                                        src="/assets/images/about/03.jpg"
                                        alt="about"
                                        className="image-fit"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="about-text text-center mb-xl-30 mx-auto">
                            <p className="thm-color-one fw-600">
                                “One’s destination is never a place, but a new way of seeing
                                things.”. <br /> – <span className="fw-500">Henry Miller</span>
                            </p>
                            <p>
                                With a vision to fly abundantly and ensure that our clients receive{" "}
                                <br /> the best of everything during their journey, <br /> Abound
                                Routes came into existence.
                            </p>
                            <p>
                                To satisfy your experiential travel, we aim at presenting the
                                sub-continent differently with
                                <br /> our international offices in Sri Lanka, Bhutan, Nepal and
                                Maldives.
                            </p>
                            <p>
                                Abound Routes is a Destination Management Company that is committed
                                to deliver its clients with exceptional services. <br /> We provide
                                complete end-to-end solutions covering all aspects of <br />
                                your travel needs curated especially for our stakeholders.
                            </p>
                        </div>
                    </div>
                    <div className="col-12 text-center">
                        <Link to="/about" className="thm-btn">
                            Explore More
                        </Link>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default About;