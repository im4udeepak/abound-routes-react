import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { useEffect } from 'react';
import { useGetExperienceItemsQuery } from '../../../rtk/services/allApis';
import { useDispatch, useSelector } from 'react-redux';
import { setExperiences } from '../../../rtk/feature/allSlice';
import Preloader from '../../../components/shared/Preloader';

const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    arrows: false,
    dotsClass: "slick-dots d-flex",
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 768,
            settings: {
                dots: false,
                arrows: false,
                slidesToShow: 1
            }
        },
        {
            breakpoint: 576,
            settings: {
                dots: false,
                arrows: false,
                slidesToShow: 1
            }
        }
    ]
}
function CuratedExperiences(props) {
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
            <section
                className="section pt-0 section-bg-fixed experiences position-relative"
                style={{
                    backgroundImage: 'url("/assets/images/latest-images/03.jpg")',
                    backgroundPosition: "bottom right"
                }}
                id="curatedExperiences"
            >
                <div className="container pb-5">
                    <div
                        className="section pb-0 mb-5 px-4"
                        style={{ backgroundColor: "rgba(var(--thm-color-one-dark-rgb),0.9)" }}
                    >
                        <div className="row justify-content-center">
                            <div className="col-xl-6 col-lg-6 text-center section pt-0 align-self-end">
                                <div className="section-header">
                                    <img src="/assets/images/icon.png" className="icon" alt="icon" />
                                    <h3 className="title text-white">Curated Experiences</h3>
                                </div>
                                <p className="thm-font-serif text-white mb-5">
                                    A visit to the sub-continent is a journey within oneself. The
                                    incredible sights, sounds, flavors and aromas of the sub-continent
                                    will let you explore what you truly prefer. It is a lifetime
                                    experience that creates unforgettable memories. The contrasting
                                    landscapes, cuisines and culture hold the most exciting and unique
                                    experiences. You name it and you will get it!
                                </p>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <Slider {...settings} className="service-slider service-slider-ui">
                                    {/*  */}
                                    {experiences?.map((item, i) => (
                                        <div className="item-box" key={i}>
                                            <div className="item">
                                                <h5 className="title thm-font-serif">{item?.attributes?.title}</h5>
                                                <div className="animated-img">
                                                    <img
                                                        src={item?.attributes?.image?.data?.attributes?.url}
                                                        alt={item?.attributes?.title}
                                                        className="image-fit"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    {/*  */}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container btn-area">
                    <div className="row">
                        <div className="col-12 text-center">
                            <Link to="/curated-experiences" className="thm-btn style-white">
                                Explore All Experiences
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default CuratedExperiences;