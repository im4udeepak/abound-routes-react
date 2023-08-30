import React from 'react';
import { Nav, Tab } from 'react-bootstrap';
import { useEffect } from 'react';
import { useGetExperienceItemsQuery } from '../../../rtk/services/allApis';
import { useDispatch, useSelector } from 'react-redux';
import { setExperiences } from '../../../rtk/feature/allSlice';
import Preloader from '../../../components/shared/Preloader';

function TypeofExperiences(props) {
    const dispatch = useDispatch();
    const { experiences } = useSelector((state) => state.all);
    const { refetch: getItems, data: items, isSuccess: itemSuccess, isFetching: itemLoading } = useGetExperienceItemsQuery();
    useEffect(() => { getItems(); }, [getItems]);
    useEffect(() => {
        if (itemSuccess) {
            dispatch(setExperiences(items?.data))
        }
    }, [dispatch, itemSuccess, items?.data]);
    return (
        <>
            {itemLoading && (<Preloader />)}
            <section className="section section-padding pt-0">
                <Tab.Container id="left-tabs-example" defaultActiveKey={'first' + 0}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5">
                                <Nav as={'ul'} variant="tabs" className="tabs style_two mb-xl-30 h-100">
                                    {experiences?.map((item, i) => (
                                        <Nav.Item as='li' key={i}>
                                            <Nav.Link eventKey={'first' + i}>{item?.attributes?.title}</Nav.Link>
                                        </Nav.Item>
                                    ))}
                                </Nav>
                            </div>
                            <div className="col-lg-7">
                                <div className="bg-white p-3 p-md-5 mb-xl-30">
                                    <Tab.Content className='text-center'>
                                        {experiences?.map((item, i) => (
                                            <Tab.Pane key={i} className='p-xl-4 p-2' eventKey={'first' + i}>
                                                <div className="section-header">
                                                    <img src="/assets/images/icon.png" className="icon" alt="icon" />
                                                    <h3 className="title text-capitalize">
                                                        {item?.attributes?.title}
                                                    </h3>
                                                </div>
                                                <p className="thm-font-serif">{item?.attributes?.description}</p>
                                                <div className="image-box pt-3 animated-img">
                                                    <img
                                                        src={item?.attributes?.image?.data?.attributes?.url}
                                                        alt={item?.attributes?.title}
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