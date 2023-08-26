import React from 'react';

function AboutUs(props) {
    return (
        <section
            className="section section-padding section-bg section-bg-fixed"
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
                    <div className="col-12">
                        <div className="about-text text-center mb-xl-30 mx-auto">
                            <p className="thm-color-dark fw-600">
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
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-5 col-md-8">
                        <p className="text-center fw-bold">
                            Our strength lies in our firm's commitment to duly offer the best and
                            finest quality services which includes –{" "}
                        </p>
                    </div>
                </div>
                <div className="row about-info-wrap mb-xl-30">
                    <div className="col-lg-3 col-md-6">
                        <div className="about-info-box">
                            <h6 className="title">The Management</h6>
                            <p className="text">
                                Management of Abound Routes comprises of industry veterans and a
                                team of travel consultants who bring with them over 25 years of
                                cumulative experience.{" "}
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="about-info-box">
                            <h6 className="title">The Team</h6>
                            <p className="text">
                                Certified guides trained in various languages like - English,
                                Spanish, German, French and more who possess deep knowledge along
                                with excellent chauffeur services with luxury and comfortable fleet.{" "}
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="about-info-box">
                            <h6 className="title">Local Knowledge</h6>
                            <p className="text">
                                Our regional / local offices are well aware of the topography,
                                experiences and new attractions. This has helped us to curate
                                different, hassle-free and unforgettable journeys.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="about-info-box">
                            <h6 className="title">Network</h6>
                            <p className="text">
                                We have a robust network of national and international offices to
                                cater to our clients at every step of the way in their journeys.
                                This makes us stand out from the rest and assure a safe, treasurable
                                and pleasant experience for all our clients.{" "}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-8">
                        <p className="text-center thm-font-serif">
                            We remain committed to our principle of giving individual and
                            personalized services to our travelers and partners from across the
                            world.
                        </p>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default AboutUs;