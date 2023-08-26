import React from 'react';
import Layout from '../../components/shared/Layout';
import PageBanner from '../../components/shared/PageBanner';
import { Link } from 'react-router-dom';

function Contact(props) {
    return (
        <Layout>
            <main className="thm-bg-color-three position-relative" style={{ zIndex: '1' }}>
                <PageBanner image={'contactus.jpg'} title={'Contact Us'} />
                <section className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="section-header">
                                    <img src="/assets/images/icon.png" className="icon" alt="icon" />
                                    <h3 className="title">Contact Us</h3>
                                </div>
                                <ul className="social-icons mb-5">
                                    <li>
                                        <Link
                                            to="https://www.facebook.com/profile.php?id=100092982066861"
                                            target="_blank"
                                        >
                                            <i className="fab fa-facebook-f" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="https://www.linkedin.com/in/abound-routes-165866286"
                                            target="_blank"
                                        >
                                            <i className="fab fa-linkedin-in" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="https://twitter.com/AboundRoutes" target="_blank">
                                            <img src="/assets/images/twitter-x.svg" alt="twitter" />
                                            {/* <i class="fab fa-twitter"></i> */}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="https://instagram.com/aboundroutes?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D"
                                            target="_blank"
                                        >
                                            <i className="fab fa-instagram" />
                                        </Link>
                                    </li>
                                </ul>
                                <form action="#" className="p-4 bg-white">
                                    <div className="row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="fullname" className="thm-font-serif">
                                                Full name <span className="required text-danger">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control form-control-custom"
                                                name="fullname"
                                                id="fullname"
                                                placeholder="Enter your full name"
                                                required=""
                                            />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="email" className="thm-font-serif">
                                                Email I'd <span className="required text-danger">*</span>
                                            </label>
                                            <input
                                                type="email"
                                                className="form-control form-control-custom"
                                                name="email"
                                                id="email"
                                                placeholder="Enter your email i'd"
                                                required=""
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message" className="thm-font-serif">
                                            Description
                                        </label>
                                        <textarea
                                            rows={4}
                                            className="form-control form-control-custom"
                                            name="message"
                                            id="message"
                                            placeholder="Write Something..."
                                            defaultValue={""}
                                        />
                                    </div>
                                    <div className="form-group mb-0">
                                        <button
                                            type="submit"
                                            className="thm-btn"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
}

export default Contact;