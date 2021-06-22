
import React, { useState } from 'react';
import { Grid, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import NovelView from 'components/novel';
import { Novel } from 'interfaces';
import { sampleNovelData } from 'utils/sample-data';
import Layout from 'components/Layout';

type Props = {
    items: Novel[];
}



const NovelListView: React.FC<Props> = ({ items }: Props) => {

    const useStyles = makeStyles(theme => ({
        root: {
            width: '100%',
            height: 1080,
            backgroundColor: '#ffffff',
            borderRadius: '10px',
            [theme.breakpoints.down('xs')]: {
            },
            [theme.breakpoints.down('sm')]: {
            },
            [theme.breakpoints.down('md')]: {
            },
            [theme.breakpoints.down('lg')]: {
            },
        }
    }));

    const classes = useStyles();

    return <Layout title="">
        <Grid container className={classes.root}>
            {items.map((item) => {
                return <NovelView novel={item} />
            })}
        </Grid>
    </Layout>
}

export const getStaticProps: GetStaticProps = async () => {
    const items: Novel[] = sampleNovelData;
    return Promise.resolve({ props: { items } });
};

export default NovelListView;
