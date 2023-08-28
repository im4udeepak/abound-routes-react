import React from 'react';
import Layout from '../../components/shared/Layout';
import PageBanner from '../../components/shared/PageBanner';
import { useEffect } from 'react';
import { useGetSubContinentsItemsQuery } from '../../rtk/services/allApis';
import { useDispatch, useSelector } from 'react-redux';
import { setSubContinents } from '../../rtk/feature/allSlice';
import Preloader from '../../components/shared/Preloader';

function SubContinent(props) {
    const dispatch = useDispatch();
    const { subcontinents } = useSelector((state) => state.all);
    const { refetch: getItems, data: items, isSuccess: itemSuccess, isFetching: itemLoading } = useGetSubContinentsItemsQuery();
    useEffect(() => { getItems(); }, [getItems]);
    useEffect(() => {
        if (itemSuccess) {
            dispatch(setSubContinents(items?.data))
        }
    }, [dispatch, itemSuccess, items?.data]);
    return (
        <Layout>
            {itemLoading && (<Preloader />)}
            <main className="thm-bg-color-three position-relative" style={{ zIndex: '1' }}>
                <PageBanner image={'india-sub-continent.jpg'} title={'India & Sub-Continent'} />
                {/* India Start */}
                {subcontinents?.filter((elm) => elm?.attributes?.title === "India").map((item, i) => (
                    <section className="section" key={i}>
                        <div className="container">
                            <div className="section-header">
                                <img src="/assets/images/icon.png" className="icon" alt="icon" />
                                <h3 className="title">{item?.attributes?.title}</h3>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-12">
                                    <div className="about-text text-center mb-5 mx-auto" dangerouslySetInnerHTML={{ __html: item?.attributes?.description }} />
                                </div>
                            </div>
                            <div
                                className="row justify-content-center position-relative"
                                style={{ zIndex: 1 }}
                            >
                                <div className="col-lg-6 col-md-9">
                                    <div className="image-box pt-5 animated-img">
                                        <img
                                            src={process.env.REACT_APP_BASE_URL + item?.attributes?.image?.data?.attributes?.url}
                                            alt={item?.attributes?.title}
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
                            {subcontinents?.filter((elm) => elm?.attributes?.title !== "India").map((item, i) => (
                                <div className="col-lg-4 col-md-6" key={i}>
                                    <div className="sub-continent-box">
                                        <div className="section-header small mx-auto">
                                            <img src="/assets/images/icon.png" className="icon" alt="icon" />
                                            <h3 className="title">{item?.attributes?.title}</h3>
                                            <div dangerouslySetInnerHTML={{ __html: item?.attributes?.description }} />
                                        </div>
                                        <div className="animated-img">
                                            <img
                                                src={process.env.REACT_APP_BASE_URL + item?.attributes?.image?.data?.attributes?.url}
                                                alt={item?.attributes?.title}
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