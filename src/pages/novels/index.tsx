
import React, { useState } from 'react';
import { Grid, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Favorite, Save } from '@material-ui/icons';
import { GetStaticProps } from 'next';
import Link from 'next/link';

import { Novel } from 'interfaces';
import { sampleNovelData } from 'utils/sample-data';
import Layout from 'components/Layout';
import { BoxListItem, BoxList } from 'components/BoxList';

type Props = {
    items: Novel[];
}

type NovelProps = {
    novel: Novel;
};

const NovelListView: React.FC<Props> = ({ items }: Props) => {

    const NovelView: React.FC<NovelProps> = ({ novel }: NovelProps) => {
        return <BoxListItem id={novel.id} href='novels/[id]' as={`novels/${novel.id}`} boxSize="small">
            <Grid container item direction="column" justify="center">
                <h1>
                    {novel.title}
                </h1>
                <div>
                    著：作家名
                </div>
            </Grid>

            <Grid container item direction="row" justify="flex-end">
                <IconButton>
                    <Save />
                </IconButton>
                <IconButton>
                    <Favorite />
                </IconButton>
            </Grid>
        </BoxListItem>
    }

    return <Layout title="">
        <BoxList xs='100%' sm='100%' md='50%' lg='30%' height='auto'>
            {items.map((item) => {
                return <NovelView novel={item} />
            })}
        </BoxList>
    </Layout>
}

export const getStaticProps: GetStaticProps = async () => {
    const items: Novel[] = sampleNovelData;
    return Promise.resolve({ props: { items } });
};

export default NovelListView;
