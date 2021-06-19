import { GetStaticProps, GetStaticPaths } from 'next';
import Layout from 'components/Layout';
import { sampleEpisodeData } from 'utils/sample-data';
import { EpisodeData } from 'interfaces';

type Props = {
    item?: EpisodeData;
};

const StaticPropsDetail: React.FC<Props> = ({ item }: Props) => {
    return <Layout title={item?.head.title}>
        <div>
            <div>
                {item?.text}
            </div>
        </div>
    </Layout>
}

export const getStaticPaths: GetStaticPaths = async () => {
    // Get the paths we want to pre-render based on users
    const paths = sampleEpisodeData.map((episode) => ({
        params: { id: episode.head.id.toString() },
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

        const item = sampleEpisodeData.find((data) => data.head.id === Number(id));

        // By returning { props: item }, the StaticPropsDetail component
        // will receive `item` as a prop at build time
        return Promise.resolve({ props: { item } });
    } catch (err) {
        const error = err as Error;
        return { props: { errors: error.message } };
    }
};


export default StaticPropsDetail;