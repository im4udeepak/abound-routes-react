import React from 'react';
import Layout from '../../components/shared/Layout';
import PageBanner from '../../components/shared/PageBanner';
import Experiences from './components/Experiences';
import TypeofExperiences from './components/TypeofExperiences';

function CuratedExperiences(props) {
    return (
        <Layout>
            <main className="thm-bg-color-three position-relative" style={{ zIndex: '1' }}>
                <PageBanner image={'curated-experiences.jpg'} title={'Curated Experiences'} />
                <Experiences />
                <TypeofExperiences />
            </main>
        </Layout>
    );
}

export default CuratedExperiences;