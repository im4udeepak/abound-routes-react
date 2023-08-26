import React from 'react';

function TextWithBg(props) {
    return (
        <section
            className="section section-padding contact-box section-bg-fixed"
            style={{ backgroundImage: 'url("/assets/images/latest-images/bkg.jpg")' }}
            id="independentTours"
        >
            <div className="container">
                <div className="section-header">
                    <img src="/assets/images/icon.png" className="icon" alt="icon" />
                    <h3 className="title text-white"> {props?.title}</h3>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <p className="thm-font-serif text-white text-center">
                            {props?.text}
                        </p>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default TextWithBg;