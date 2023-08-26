import React, { Fragment } from 'react';
import Layout from '../../components/shared/Layout';
import PageBanner from '../../components/shared/PageBanner';
import TextWithBg from '../../components/shared/TextWithBg';
import TabsLayout from './components/TabsLayout';
import expertise from "../../json/expertise.json";

function Expertise(props) {
    return (
        <Layout>
            <main className="thm-bg-color-three position-relative" style={{ zIndex: '1' }}>
                <PageBanner image={'expertise.jpg'} title={'Our Expertise'} />
                {expertise?.map((elm, i) => (
                    <Fragment key={i}>
                        <TextWithBg title={elm?.title} text={elm?.description} />
                        <TabsLayout dataArray={elm?.subExpertise} />
                    </Fragment>
                ))}
            </main>
        </Layout>
    );
}

export default Expertise;