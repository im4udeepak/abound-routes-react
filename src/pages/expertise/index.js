import { Fragment, useEffect } from 'react';
import Layout from '../../components/shared/Layout';
import PageBanner from '../../components/shared/PageBanner';
import TextWithBg from '../../components/shared/TextWithBg';
import TabsLayout from './components/TabsLayout';
import { useGetExpertiseItemsQuery } from '../../rtk/services/allApis';
import { useDispatch, useSelector } from 'react-redux';
import { setExpertise } from '../../rtk/feature/allSlice';
import Preloader from '../../components/shared/Preloader';

function Expertise(props) {
    const dispatch = useDispatch();
    const { expertise } = useSelector((state) => state.all);
    const { refetch: getItems, data: items, isSuccess: itemSuccess, isFetching: itemLoading } = useGetExpertiseItemsQuery({ url: 'populate[sub_expertises][populate]=*' });
    useEffect(() => { getItems(); }, [getItems]);
    useEffect(() => {
        if (itemSuccess) {
            dispatch(setExpertise(items?.data))
        }
    }, [dispatch, itemSuccess, items?.data]);
    return (
        <Layout>
            {itemLoading && (<Preloader />)}
            <main className="thm-bg-color-three position-relative" style={{ zIndex: '1' }}>
                <PageBanner image={'expertise.jpg'} title={'Our Expertise'} />
                {expertise?.map((item, i) => (
                    <Fragment key={i}>
                        <TextWithBg title={item?.attributes?.title} text={item?.attributes?.description} />
                        <TabsLayout dataArray={item?.attributes?.sub_expertises?.data} />
                    </Fragment>
                ))}
            </main>
        </Layout>
    );
}

export default Expertise;