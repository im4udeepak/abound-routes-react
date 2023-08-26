import React from 'react';

function Experiences(props) {
    return (
        <section className="section">
            <div className="container">
                <div className="section-header">
                    <img src="/assets/images/icon.png" className="icon" alt="icon" />
                    <h3 className="title">Curated Experiences</h3>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="about-text text-center mb-5 mx-auto">
                            <p>
                                A visit to the sub-continent is a journey within oneself. The
                                incredible sights, sounds, flavors and aromas of the sub-continent
                                will let you explore what you truly prefer. It is a lifetime
                                experience that creates unforgettable memories. The contrasting
                                landscapes, cuisines and culture hold the most exciting and unique
                                experiences. You name it and you will get it!
                            </p>
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
        </section>

    );
}

export default Experiences;