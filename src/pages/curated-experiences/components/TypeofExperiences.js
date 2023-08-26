import React from 'react';
import { Nav, Tab } from 'react-bootstrap';
import dataArray from "../../../json/typeofExperiences.json";

function TypeofExperiences(props) {
    return (
        <>
            <section className="section section-padding pt-0">
                <Tab.Container id="left-tabs-example" defaultActiveKey={'first' + 0}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5">
                                <Nav as={'ul'} variant="tabs" className="tabs style_two mb-xl-30 h-100">
                                    {dataArray?.map((elm, i) => (
                                        <Nav.Item as='li' key={i}>
                                            <Nav.Link eventKey={'first' + i}>{elm?.title}</Nav.Link>
                                        </Nav.Item>
                                    ))}
                                </Nav>
                            </div>
                            <div className="col-lg-7">
                                <div className="bg-white p-3 p-md-5 mb-xl-30">
                                    <Tab.Content className='text-center'>
                                        {dataArray?.map((elm, i) => (
                                            <Tab.Pane className='p-xl-4 p-2' eventKey={'first' + i}>
                                                <div className="section-header">
                                                    <img src="/assets/images/icon.png" className="icon" alt="icon" />
                                                    <h3 className="title text-capitalize">
                                                        {elm?.title}
                                                    </h3>
                                                </div>
                                                <p className="thm-font-serif">{elm?.description}</p>
                                                <div className="image-box pt-3 animated-img">
                                                    <img
                                                        src={`/assets/images/experiences/${elm?.image}.jpg`}
                                                        alt={elm?.title}
                                                        className="image-fit"
                                                    />
                                                </div>
                                            </Tab.Pane>
                                        ))}
                                    </Tab.Content>
                                </div>
                            </div>
                        </div>
                        <div
                            className="row justify-content-center position-relative pt-5"
                            style={{ zIndex: 1 }}
                        >
                            <div className="col-12">
                                <div
                                    className="shape-line reverse"
                                    style={{ marginTop: "-7px", zIndex: -1 }}
                                />
                            </div>
                        </div>
                    </div>
                </Tab.Container>
            </section>
            <img src="/assets/images/latest-images/06.png" alt="flower"
                className="service-flower position-relative d-none d-lg-block" />
        </>
    );
}

export default TypeofExperiences;