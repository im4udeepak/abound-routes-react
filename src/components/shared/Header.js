import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header(props) {
    const [state, setState] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        // Check if the user has scrolled more than a certain threshold (e.g., 100 pixels)
        if (window.scrollY > 100) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };
    return (
        <>
            {/* Header Start */}
            <header className={props.type ? `header can-sticky ${isScrolled ? `sticky` : ''} absolute` : `header ${isScrolled ? `sticky` : ''} can-sticky`} id="header">
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
                <div className={props?.type ? "container-fluid" : "container"}>
                    <div className="row justify-content-end">
                        <div className="col-lg-10">
                            <div className="navigation_inner">
                                {/* bar */}
                                <nav className={state ? 'navigation open' : 'navigation'}>
                                    <ul className="main-menu">
                                        <li className="menu-item">
                                            <NavLink to='/'>Home</NavLink>
                                        </li>
                                        <li className="menu-item">
                                            <NavLink to="/about" className="scroll-link">
                                                About Us
                                            </NavLink>
                                        </li>
                                        <li className="menu-item">
                                            <NavLink to="/sub-continent" className="scroll-link">
                                                India &amp; Sub-Continent
                                            </NavLink>
                                        </li>
                                        <li className="menu-item">
                                            <NavLink to="/curated-experiences" className="scroll-link">
                                                Curated Experiences
                                            </NavLink>
                                        </li>
                                        <li className="menu-item">
                                            <NavLink to="/expertise" className="scroll-link">
                                                Our Expertise
                                            </NavLink>
                                        </li>
                                        {/*  d-block d-lg-none */}
                                        <li className="menu-item">
                                            <NavLink to="/contact" className="scroll-link">
                                                Contact Us
                                            </NavLink>
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