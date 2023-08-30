import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { useGetGalleryItemsQuery } from '../../../rtk/services/allApis';
import { useDispatch, useSelector } from 'react-redux';
import { setGallery } from '../../../rtk/feature/allSlice';
import Preloader from '../../../components/shared/Preloader';

const settings = {
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    arrows: true,
    dotsClass: "slick-dots d-flex",
}

function Cta(props) {
    const dispatch = useDispatch();
    const { gallery } = useSelector((state) => state.all);
    const { refetch: getItems, data: items, isSuccess: itemSuccess, isFetching: itemLoading } = useGetGalleryItemsQuery();
    useEffect(() => { getItems(); }, [getItems]);
    useEffect(() => {
        if (itemSuccess) {
            dispatch(setGallery(items?.data))
        }
    }, [dispatch, itemSuccess, items?.data]);
    return (
        <>
            {itemLoading && (<Preloader />)}

            <section
                className="section section-padding contact-box section-bg-fixed"
                id="contact"
                style={{ backgroundImage: 'url("/assets/images/latest-images/bkg.jpg")' }}
            >
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-8 col-lg-6">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="service-box style_two">
                                        <h4 className="title">Gallery</h4>
                                        <Slider {...settings}
                                            className="icon-style d-block gallery-slider"
                                        >
                                            {gallery?.map((item, i) => (
                                                <Link to={item?.attributes?.image?.data?.attributes?.url} key={i} className='image-fit'>
                                                    <img src={item?.attributes?.image?.data?.attributes?.url} alt={item?.attributes?.title} className='image-fit' />
                                                </Link>
                                            ))}
                                        </Slider>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="service-box style_two">
                                        <h4 className="title">Videos</h4>
                                        <Link
                                            to="https://www.youtube.com/channel/UC-b49lhEbyPv9vbyteBnaWA"
                                            target="_blank"
                                            className="icon-style border-2"
                                        >
                                            <img src="/assets/images/yt-icon.png" alt="icon" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6">
                            <div className="section-header">
                                <img src="/assets/images/icon.png" className="icon" alt="icon" />
                                <h3 className="title text-white">Follow Us</h3>
                            </div>
                            <ul className="social-icons">
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
                                        to="https://WWW.linkedin.com/in/abound-routes-165866286"
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
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Cta;