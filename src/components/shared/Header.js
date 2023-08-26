import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
    const [state, setState] = useState(false);
    return (
        <>
            {/* Header Start */}
            <header className={props.type ? 'header can-sticky absolute' : 'header can-sticky'} id="header">
                {/* logo */}
                <div className="logo_wrap">
                    <div className={props.type ? "container-fluid" : "container"}>
                        <div className="row">
                            <div className="col-lg col-6">
                                <div className="logo">
                                    <Link to="/" className="scroll-link">
                                        <img
                                            src="/assets/images/logo.png"
                                            alt="logo"
                                            className="image-fit-contain"
                                        />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-9 col-6">
                                {/* <div className="d-flex justify-content-end">
                                    <div className="input-group link d-flex justify-content-end align-items-center">
                                        <span className="input-group-text bg-transparent border-0 p-0 pe-2">
                                            <img
                                                src="/assets/images/en.png"
                                                alt="English"
                                                title="English"
                                            />
                                        </span>
                                        <div id="google_translate_element" className="d-inline-block" />
                                    </div>
                                    <Link to="/contact" className="link scroll-link d-none ms-4">
                                        Contact Us
                                    </Link>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* logo */}
                {/* navigation */}
                <div className="container-fluid">
                    <div className="row justify-content-end">
                        <div className="col-lg-10">
                            <div className="navigation_inner">
                                {/* bar */}
                                <nav className={state ? 'navigation open' : 'navigation'}>
                                    <ul className="main-menu">
                                        <li className="menu-item">
                                            <Link to="/" className="scroll-link active">
                                                Home
                                            </Link>
                                        </li>
                                        <li className="menu-item">
                                            <Link to="/about" className="scroll-link">
                                                About Us
                                            </Link>
                                        </li>
                                        <li className="menu-item">
                                            <Link to="/sub-continent" className="scroll-link">
                                                India &amp; Sub-Continent
                                            </Link>
                                        </li>
                                        <li className="menu-item">
                                            <Link to="/curated-experiences" className="scroll-link">
                                                Curated Experiences
                                            </Link>
                                        </li>
                                        <li className="menu-item">
                                            <Link to="/expertise" className="scroll-link">
                                                Our Expertise
                                            </Link>
                                        </li>
                                        {/*  d-block d-lg-none */}
                                        <li className="menu-item">
                                            <Link to="/contact" className="scroll-link">
                                                Contact Us
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                                {/* bar */}
                                <ul className="header_actions">
                                    <li>
                                        <div className="hamburger">
                                            <div className={state ? 'hamburger_btn active' : 'hamburger_btn'} onClick={() => setState(!state)}>
                                                <span />
                                                <span />
                                                <span />
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* navigation */}
            </header>
            {/* Header End */}
        </>

    );
}

export default Header;