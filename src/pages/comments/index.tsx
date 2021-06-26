
import React from 'react';
import { GetStaticProps } from 'next';
import { Comment } from 'interfaces';
import { sampleCommentData } from 'utils/sample-data';
import Layout from 'components/Layout';
import { Grid } from '@material-ui/core'
import CommentView from 'components/Comment';

type Props = {
    items: Comment[];
}

const WithStaticProps: React.FC<Props> = ({ items }: Props) => {

    return <Layout title="">
        <Grid container>
            {
                items.map((v => (
                    <CommentView comment={v} />
                )))
            }
        </Grid>
    </Layout>
}

export const getStaticProps: GetStaticProps = async () => {
    const items: Comment[] = sampleCommentData[0].comments;
    console.log(items)
    return Promise.resolve({ props: { items } });
};

export default WithStaticProps;
