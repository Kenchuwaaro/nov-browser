
import React, { useState } from 'react';
import { Grid, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Favorite, Save } from '@material-ui/icons';
import { GetStaticProps } from 'next';
import Link from 'next/link';

import { Novel } from 'interfaces';
import { sampleNovelData } from 'utils/sample-data';
import Layout from 'components/Layout';

type Props = {
    items: Novel[];
}

type NovelProps = {
    novel: Novel;
};

const NovelListView: React.FC<Props> = ({ items }: Props) => {

    const NovelView: React.FC<NovelProps> = ({ novel }: NovelProps) => {

        const useStyles = makeStyles({
            root: {
                border: 'solid 1px #cccccc',
                backgroundColor: '#ffffff',
                borderRadius: '10px',
                color: '#000000',
                // backgroundImage: `url(${image})`,
                filter: 'drop-shadow(2px 2px 2px black)',
                '&:hover': {
                    filter: 'drop-shadow(4px 4px 4px black)'
                },
                margin: '10px',
            }
        });

        const classes = useStyles();

        return <Link href='novels/[id]' as={`novels/${novel.id}`}>

            <Grid item container direction="column" className={classes.root}
                xs={12} sm={12} md={6} lg={6}>

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

            </Grid>
        </Link>
    }


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
