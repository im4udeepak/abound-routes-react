import React from 'react';
import { Nav, Tab } from 'react-bootstrap';

function TabsLayout(props) {
    return (
        <section className="section">
            <Tab.Container id="left-tabs-example" defaultActiveKey={'first' + 0}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <Nav as={'ul'} variant="tabs" className="tabs style_two style_three border-0">
                                {props?.dataArray?.map((elm, i) => (
                                    <Nav.Item as='li' key={i}>
                                        <Nav.Link eventKey={'first' + i}>{elm?.title}</Nav.Link>
                                    </Nav.Item>
                                ))}
                            </Nav>
                        </div>
                        <div className="col-xl-8 col-lg-10">
                            <Tab.Content className='mt-5'>
                                {props?.dataArray?.map((elm, i) => (
                                    <Tab.Pane eventKey={'first' + i}>
                                        <div className="section-header small mw-100">
                                            <img src="/assets/images/icon.png" className="icon" alt="icon" />
                                            <h3 className="title text-capitalize fw-light">
                                                {elm?.title}
                                            </h3>
                                            <p className="text">{elm?.description}</p>
                                        </div>
                                        <div className="row justify-content-center">
                                            <div className="col-xl-8 col-md-10">
                                                <div className="image-box mt-4 animated-img">
                                                    <img
                                                        src={`/assets/images/${elm?.image}.jpg`}
                                                        alt={elm?.title}
                                                        className="image-fit"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                ))}
                            </Tab.Content>
                        </div>
                    </div>
                </div>
            </Tab.Container>
        </section>

    );
}

export default TabsLayout;