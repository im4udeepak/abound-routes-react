import React from 'react';
import { Nav, Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import dataArray from "../../../json/sub-continent.json";

function Destinations(props) {
    return (
        <section className="section thm-bg-color-three" id="destination">
            <Tab.Container id="left-tabs-example" defaultActiveKey={'first' + 0}>
                <div className="container">
                    <div className="section-header">
                        <img src="/assets/images/icon.png" className="icon" alt="icon" />
                        <h3 className="title">Our Destination</h3>
                    </div>
                </div>
                <div
                    className="tab-box section-bg justify-content-center"
                    style={{ backgroundImage: 'url("/assets/images/tabs-bg.png")' }}
                >
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <Nav as={'ul'} variant="tabs" className="tabs row justify-content-center">
                                    {dataArray?.map((elm, i) => (
                                        <Nav.Item as='li' className='col-md col-auto-md col-auto' key={i}>
                                            <Nav.Link eventKey={'first' + i}>{elm?.title}</Nav.Link>
                                        </Nav.Item>
                                    ))}
                                </Nav>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tabs-data text-center position-relative">
                    <div className="container">
                        <div className="bg-white">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <Tab.Content className='pt-5'>
                                        {dataArray?.map((item, i) => (
                                            <Tab.Pane key={i} eventKey={'first' + i}>
                                                <h3 className="tab-title">{item?.title}</h3>
                                                <div dangerouslySetInnerHTML={{ __html: item?.description }} />
                                                <div className="image-box my-5 animated-img">
                                                    <img
                                                        src={`/assets/images/destination/${item?.image}.jpg`}
                                                        alt={item?.title}
                                                        className="image-fit"
                                                    />
                                                </div>
                                            </Tab.Pane>
                                        ))}
                                        <Link to="/sub-continent" className="thm-btn mb-5">Explore More</Link>
                                    </Tab.Content>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img
                        src="/assets/images/latest-images/half-flower.png"
                        alt="flower"
                        className="destination-flower d-none d-lg-block"
                    />
                </div>
            </Tab.Container>
        </section>

    );
}

export default Destinations;