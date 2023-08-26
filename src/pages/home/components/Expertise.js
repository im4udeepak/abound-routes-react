import React from 'react';
import { Link } from 'react-router-dom';
import expertise from "../../../json/expertise.json";

function Expertise(props) {
    return (
        <section className="section position-relative" id="expertise">
            <div className="container">
                <div className="section-header">
                    <img src="/assets/images/icon.png" className="icon" alt="icon" />
                    <h3 className="title">Our Expertise</h3>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8">
                        <p className="thm-font-serif text-center mb-5">
                            We, at Abound Routes, use our experience, creative thinking and
                            strategic planning to create the most enchanting travel experiences
                            for all our clients. From designing a program to its execution and
                            even custom-making it, we believe in redefining travelling experiences
                            by offering a distinctive approach to conventional travel.
                        </p>
                    </div>
                </div>
                <div className="row">
                    {/*  */}
                    {expertise?.map((item, i) => (
                        <div className="col-lg-3 col-sm-6" key={i}>
                            <Link to="/expertise" className="service-box">
                                <h4 className="title">
                                    {item?.title}
                                </h4>
                                <div className="animated-img">
                                    <img
                                        src={`assets/images/home-expertise/${item?.image}.jpg`}
                                        alt={item?.title}
                                        className="image-fit"
                                    />
                                </div>
                            </Link>
                        </div>
                    ))}
                    {/*  */}
                    <div className="col-12 text-center">
                        <Link to="/expertise" className="thm-btn">
                            Explore More
                        </Link>
                    </div>
                </div>
            </div>
            <img
                src="/assets/images/latest-images/06.png"
                alt="flower"
                className="service-flower d-none d-lg-block"
            />
        </section>

    );
}

export default Expertise;