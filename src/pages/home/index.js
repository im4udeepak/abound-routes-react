import React from 'react';
import Layout from '../../components/shared/Layout';
import Banner from './components/Banner';
import About from './components/About';
import IndianSubContinents from './components/IndianSubContinents';
import Destinations from './components/Destinations';
import CuratedExperiences from './components/CuratedExperiences';
import Expertise from './components/Expertise';
import Cta from './components/Cta';

function Home(props) {
    return (
        <Layout header={true}>
            <Banner />
            <About />
            <IndianSubContinents />
            <Destinations />
            <CuratedExperiences />
            <Expertise />
            <Cta />
        </Layout>
    );
}

export default Home;