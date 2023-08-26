import React, { Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';

function Layout(props) {
    return (
        <Fragment>
            <Header type={props?.header} />
            {props.children}
            <Footer />
        </Fragment>
    );
}

export default Layout;