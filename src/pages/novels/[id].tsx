import { GetStaticProps, GetStaticPaths } from 'next';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';

import { Chapter, Episode, Novel } from 'interfaces';
import { sampleNovelData } from 'utils/sample-data';

import Layout from 'components/Layout';
import ChapterView from 'components/Chapter';


type Props = {
    item?: Novel;
    errors?: string;
};


const StaticPropsDetail : React.FC<Props> = ({ item }: Props) => {
    return <Layout title={item?.title}>
        {
            item?.chapters.map((chapter) => {
                return <ChapterView chapter={chapter} />
            })
        }
    </Layout>
}

export const getStaticPaths: GetStaticPaths = async () => {
    // Get the paths we want to pre-render based on users
    const paths = sampleNovelData.map((novel) => ({
        params: { id: novel.id.toString() },
    }));

    console.log(paths);

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return Promise.resolve({ paths, fallback: false });
};

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export const getStaticProps: GetStaticProps = async ({ params }) => {
    try {
        const id = params?.id;
        const item = sampleNovelData.find((data) => data.id === Number(id));
        // By returning { props: item }, the StaticPropsDetail component
        // will receive `item` as a prop at build time
        return Promise.resolve({ props: { item } });
    } catch (err) {
        const error = err as Error;
        return { props: { errors: error.message } };
    }
};


export default StaticPropsDetail;