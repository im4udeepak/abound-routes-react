import React, { useState } from 'react';
import Layout from '../../components/shared/Layout';
import PageBanner from '../../components/shared/PageBanner';
import { Link } from 'react-router-dom';

function Contact(props) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [validationErrors, setValidationErrors] = useState({
        name: '',
        email: '',
        message: ''
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };
    const validateForm = () => {
        const errors = {};
        if (!formData.name) {
            errors.name = 'Name is required';
        }
        if (!formData.email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Invalid email format';
        }
        if (!formData.message) {
            errors.message = 'Message is required';
        }
        setValidationErrors(errors);
        return Object.keys(errors).length === 0; // Return true if no errors
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log(formData,"values")
        }
    };
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
                                <form onSubmit={handleSubmit} className="p-4 bg-white">
                                    <div className="row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="fullname" className="thm-font-serif">
                                                Full name <span className="required text-danger">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control form-control-custom"
                                                name='name'
                                                value={formData.name} onChange={handleChange}
                                                id="fullname"
                                                placeholder="Enter your full name"
                                                required=""
                                            />
                                            {validationErrors.name && <span className="invalid-feedback d-block">{validationErrors.name}</span>}
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="email" className="thm-font-serif">
                                                Email I'd <span className="required text-danger">*</span>
                                            </label>
                                            <input
                                                type="email"
                                                className="form-control form-control-custom"
                                                name='email'
                                                value={formData.email} onChange={handleChange}
                                                id="email"
                                                placeholder="Enter your email i'd"
                                                required=""
                                            />
                                            {validationErrors.email && <span className="invalid-feedback d-block">{validationErrors.email}</span>}
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message" className="thm-font-serif">
                                            Description
                                        </label>
                                        <textarea
                                            rows={4}
                                            className="form-control form-control-custom"
                                            name='message'
                                            value={formData.message} onChange={handleChange}
                                            id="message"
                                            placeholder="Write Something..."
                                        />
                                        {validationErrors.message && <span className="invalid-feedback d-block">{validationErrors.message}</span>}
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