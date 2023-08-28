import React from 'react';
import { Nav, Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useGetSubContinentsItemsQuery } from '../../../rtk/services/allApis';
import { useDispatch, useSelector } from 'react-redux';
import { setSubContinents } from '../../../rtk/feature/allSlice';
import Preloader from '../../../components/shared/Preloader';

function Destinations(props) {
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
        <>
            {itemLoading && (<Preloader />)}
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
                                        {subcontinents?.map((item, i) => (
                                            <Nav.Item as='li' className='col-md col-auto-md col-auto' key={i}>
                                                <Nav.Link eventKey={'first' + i}>{item?.attributes?.title}</Nav.Link>
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
                                            {subcontinents?.map((item, i) => (
                                                <Tab.Pane key={i} eventKey={'first' + i}>
                                                    <h3 className="tab-title">{item?.attributes?.title}</h3>
                                                    <div dangerouslySetInnerHTML={{ __html: item?.attributes?.description }} />
                                                    <div className="image-box my-5 animated-img">
                                                        <img
                                                            src={process.env.REACT_APP_BASE_URL + item?.attributes?.image?.data?.attributes?.url}
                                                            alt={item?.attributes?.title}
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
        </>
    );
}

export default Destinations;