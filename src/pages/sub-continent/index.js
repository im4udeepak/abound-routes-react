import React from 'react';
import Layout from '../../components/shared/Layout';
import PageBanner from '../../components/shared/PageBanner';
import dataArray from '../../json/sub-continent.json';

function SubContinent(props) {
    return (
        <Layout>
            <main className="thm-bg-color-three position-relative" style={{ zIndex: '1' }}>
                <PageBanner image={'india-sub-continent.jpg'} title={'India & Sub-Continent'} />
                {/* India Start */}
                {dataArray?.filter((elm) => elm.title === "India").map((item, i) => (
                    <section className="section" key={i}>
                        <div className="container">
                            <div className="section-header">
                                <img src="/assets/images/icon.png" className="icon" alt="icon" />
                                <h3 className="title">{item?.title}</h3>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-12">
                                    <div className="about-text text-center mb-5 mx-auto" dangerouslySetInnerHTML={{ __html: item?.description }} />
                                </div>
                            </div>
                            <div
                                className="row justify-content-center position-relative"
                                style={{ zIndex: 1 }}
                            >
                                <div className="col-lg-6 col-md-9">
                                    <div className="image-box pt-5 animated-img">
                                        <img
                                            src={`/assets/images/destination/${item?.image}.jpg`}
                                            alt={item?.title}
                                            className="image-fit"
                                        />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div
                                        className="shape-line reverse"
                                        style={{ marginTop: 0, zIndex: 1 }}
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                ))}
                {/* India End */}
                {/* Sub Continents Start */}
                <section className="section section-padding pt-0">
                    <div className="container">
                        <div className="row">
                            {/*  */}
                            {dataArray?.filter((elm) => elm.title !== "India").map((item, i) => (
                                <div className="col-lg-4 col-md-6" key={i}>
                                    <div className="sub-continent-box">
                                        <div className="section-header small mx-auto">
                                            <img src="/assets/images/icon.png" className="icon" alt="icon" />
                                            <h3 className="title">{item?.title}</h3>
                                            <div dangerouslySetInnerHTML={{ __html: item?.description }} />
                                        </div>
                                        <div className="animated-img">
                                            <img
                                                src={`/assets/images/destination/${item?.image}.jpg`}
                                                alt={item?.title}
                                                className="image-fit"
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {/*  */}
                        </div>
                    </div>
                </section>
                {/* Sub Continents End */}
                <img
                    src="/assets/images/latest-images/06.png"
                    alt="flower"
                    className="service-flower style_two position-relative d-none d-lg-block"
                />
            </main>
        </Layout>
    );
}

export default SubContinent;