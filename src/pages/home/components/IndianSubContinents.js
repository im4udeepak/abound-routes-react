import React from 'react';

function IndianSubContinents(props) {
    return (
        <section
            className="section section-bg pb-0 d-flex align-items-end section-bg-fixed"
            id="subContinent"
            style={{
                backgroundImage: 'url("/assets/images/latest-images/02.jpg")',
                height: 800
            }}
        >
            <div className="container">
                <div className="section-header">
                    <img src="/assets/images/icon.png" className="icon" alt="icon" />
                    <h3 className="title text-white">
                        The Indian <br /> Subcontinent
                    </h3>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="subcontinent-text-bg">
                            Exceptionally rich in culture and nature, the Indian Subcontinent is a
                            perfect amalgamation of vibrant sights and pleasing sounds.
                            <br />
                            <br />
                            Being home to the world’s oldest civilisations, it is also a
                            birthplace of Hinduism and Buddhism. The wealth of diversity it offers
                            is truly amazing. From the adventurous aspirations to spirituality
                            goals, from peaceful retreats to bustling cities, the Subcontinent has
                            everything for everyone.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default IndianSubContinents;