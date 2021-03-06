
import React from 'react';
import { GetStaticProps } from 'next';
import NovelView from 'components/Novel';
import { Novel } from 'interfaces';
import { sampleNovelData } from 'utils/sample-data';
import Layout from 'components/Layout';
import { Grid } from '@material-ui/core';

type Props = {
    items: Novel[];
}

const WithStaticProps: React.FC<Props> = ({ items }: Props) => {
    return <Layout title="">
        <Grid container>
            {
                items.map((v) => (
                    <NovelView novel={v} />
                ))
            }
        </Grid>
    </Layout>
}

export const getStaticProps: GetStaticProps = async () => {
    const items: Novel[] = sampleNovelData;
    return Promise.resolve({ props: { items } });
};

export default WithStaticProps;
