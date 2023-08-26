import React from 'react';
import Layout from '../../components/shared/Layout';
import PageBanner from '../../components/shared/PageBanner';
import AboutUs from './components/About';
import StoryAndPeople from './components/StoryAndPeople';
import Mission from './components/Mission';
import TextWithBg from '../../components/shared/TextWithBg';

function About(props) {
    return (
        <Layout>
            <PageBanner image={'about.jpg'} title={'About Us'} />
            <AboutUs />
            <TextWithBg title="Who We Are" text="A certified inbound destination management company, Abound Routes is committed to serve its discerning clients with more personalized care and memorable travel experiences across the Indian Subcontinent. We provide excellent professional service and the best industry standards in luxury travel by offering the finest of cultural, natural, architectural and adventure travel experiences in the beautiful countries like - India, Bhutan, Nepal and Sri Lanka. Abound Routes is a very well recognized, independent and progressive travel company devoted to providing more than what guests expect." />
            <StoryAndPeople />
            <Mission />
        </Layout>
    );
}

export default About;