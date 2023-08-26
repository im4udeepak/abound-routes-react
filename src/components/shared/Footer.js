import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <Fragment>
            {/* Footer Start */}
            <footer className="section section-padding" id="footer">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-4 col-lg-6">
                            <Link to="/" className="logo scroll-link">
                                <img
                                    src="/assets/images/logo.png"
                                    alt="logo"
                                    className="image-fit"
                                />
                            </Link>
                        </div>
                        <div className="col-xl-5 col-lg-7">
                            <div className="middle">
                                <h4 className="title">Abound Routes LLP.</h4>
                                {/* <p class="text">15th - 16th Floor, Plot C2</p>
                  <p class="text">E Square Building, Sector 96, Noida - 201301</p> */}
                                <ul className="contact-info">
                                    <li>
                                        <span className="fal fa-mobile-android" />{" "}
                                        <Link to="tel:+91-8929122331">+91-8929122331</Link>
                                    </li>
                                    <li>
                                        <span className="fas fa-envelope" />{" "}
                                        <Link to="mailto:info@aboundroutes.com">info@aboundroutes.com</Link>
                                    </li>
                                    <li>
                                        <span className="fas fa-map-marker-alt" />{" "}
                                        <Link to="/">
                                            15th - 16th Floor, Plot C2
                                            <br />E Square Building, Sector 96, Noida - 201301
                                        </Link>
                                    </li>
                                    {/* <li><span>$</span> <Link to="index.html" target="_blank rel=" noopener"">Pay Now</Link></li> */}
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <ul className="menu">
                                <li>
                                    <Link to="/about" className="scroll-link">
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/sub-continent" className="scroll-link">
                                        India Subcontinent
                                    </Link>
                                </li>
                                {/* <li><Link to="#destination" class="scroll-link">Destinations</Link></li> */}
                                {/* <li><Link to="#header" class="scroll-link">Signature Programs</Link></li> */}
                                <li>
                                    <Link to="/curated-experiences" className="scroll-link">
                                        Curated Experiences
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/expertise" className="scroll-link">
                                        Our Expertise
                                    </Link>
                                </li>
                                {/* <li><Link to="contact.html" class="scroll-link">CSR</Link></li> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
            {/* Footer End */}
            <Link to="#" data-target="html" className="back-to-top ft-sticky">
                <i className="fal fa-chevron-up" />
            </Link>
        </Fragment>
    );
}

export default Footer;