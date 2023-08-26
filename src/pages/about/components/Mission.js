import React from 'react';

function Mission(props) {
    return (
        <section
            className="section contact-box section-bg-fixed"
            style={{ backgroundImage: 'url("/assets/images/latest-images/bkg.jpg")' }}
        >
            <div className="container">
                <div className="section-header">
                    <img src="/assets/images/icon.png" className="icon" alt="icon" />
                    <h3 className="title text-white">Our Mission</h3>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <p className="thm-font-serif text-white text-center">
                            To offer great value to all our stakeholders and serve our clients
                            with utmost perfection, transparency and respect.
                        </p>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-9">
                        <div className="image-box animated-img">
                            <img
                                src="/assets/images/misson.png"
                                alt="india"
                                className="image-fit"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Mission;