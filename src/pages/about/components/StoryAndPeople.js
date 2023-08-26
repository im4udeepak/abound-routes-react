import React from 'react';

function StoryAndPeople(props) {
    return (
        <section className="section thm-bg-color-three">
            <div className="container">
                <div className="bg-white">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="section section-padding">
                                <div className="section-header">
                                    <img src="/assets/images/icon.png" className="icon" alt="icon" />
                                    <h3 className="title">Our Story</h3>
                                </div>
                                <p className="text-center thm-font-serif">
                                    Abound Routes is not just a DMC, but a story of highly passionate
                                    individuals and their long journey in travel trade. The quality
                                    team comprises of travel and tourism professionals with a wide
                                    range of skills gathered from more than two decades spanning
                                    multiple aspects of travel trade in the sub-continent. With the
                                    culture of uniqueness and personalization, we aim at delivering
                                    more than what our clients expect from us. Over the years Abound
                                    Routes high quality service and dedication has earned it clients
                                    who use us recurringly.{" "}
                                </p>
                                <p className="text-center thm-font-serif">
                                    Abound Routes is headquartered in Delhi, the heart of India with
                                    multiple regional offices.
                                </p>
                                <div className="section-header">
                                    <img src="/assets/images/icon.png" className="icon" alt="icon" />
                                    <h3 className="title">Our People</h3>
                                </div>
                                <p className="text-center thm-font-serif">
                                    Our team is making a difference in the travel industry. We believe
                                    in creating partnerships and trust which we achieve through
                                    flawless services at every stage of travel.
                                </p>
                                <p className="text-center thm-font-serif">
                                    Our people are our asset who possess in-depth knowledge of diverse
                                    geography, culture and traditions of the sub-continent to curate
                                    and execute travel journeys that are considered to be the best in
                                    the industry.{" "}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img
                src="/assets/images/latest-images/half-flower.png"
                alt="flower"
                className="destination-flower d-none d-lg-block section mb-xl-30"
            />
        </section>

    );
}

export default StoryAndPeople;