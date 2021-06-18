
import React, { useState } from 'react';
import { Grid, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Favorite, Save } from '@material-ui/icons';
import { GetStaticProps } from 'next';
import Link from 'next/link';

import { Novel } from 'interfaces';
import { sampleNovelData } from 'utils/sample-data';
import Layout from 'components/Layout';
import List from 'components/List';

type Props = {
    items: Novel[];
}

type NovelProps = {
    novel: Novel;
};

const NovelListView: React.FC<Props> = ({ items }: Props) => {

    const width = 2000;

    const NovelView: React.FC<NovelProps> = ({ novel }: NovelProps) => {

        const height = 200;
        const imgWidth = 200;
        const titleHeight = 60;
        const titleWidth = 300;
        const contentWidth = 1400;

        const [fav, setFav] = useState(false);
        const [later, setLater] = useState(false);

        const useStyles = makeStyles({
            root: {
                filter: `drop-shadow(2px 2px 2px black)`,
                width: '100%',
                height: `${height}px`,
                backgroundColor: '#008000',
                margin: '10px',
                '&:hover': {
                    filter: `drop-shadow(4px 4px 4px black)`
                }
            },
            content: {
                width: `${contentWidth}px`
            },
            head: {
            },
            button: {
                width: '200px'
            },
            title: {
                width: `${titleWidth}px`,
                height: `${titleHeight}px`,
                padding: '0px 30px',
                fontSize: '3em',
                overflowX: 'hidden'
            },
            synopsis: {
                width: `${titleWidth}px`,
                padding: '10px 30px',
                overflowY: 'hidden'
            },
            author: {
                padding: '10px 40px'
            },
            img: {
                width: `${imgWidth}px`,
                height: `${height}px`,
            }
        });


        const classes = useStyles();

        return <Grid item direction="column" className={classes.root}>
            <Link href='/novels/[id]' as={`/novels/${novel.id}`}>
                <div>
                    <Grid container direction="row" justify="flex-start">
                        <Grid item className={classes.img}>
                            画像
                        </Grid>
                        <Grid item container direction="column" className={classes.content}>

                            {/* head  */}
                            <Grid item container direction="row" justify="space-between" className={classes.head}>
                                <Grid item className={classes.title}>
                                    <div>
                                        {novel.title}
                                    </div>
                                </Grid>
                                <Grid item container direction="row" justify="flex-end" className={classes.button}>
                                    <IconButton>
                                        <Favorite />
                                    </IconButton>
                                    <IconButton>
                                        <Save />
                                    </IconButton>
                                </Grid>
                            </Grid>

                            {/* author */}
                            <div className={classes.author}>
                                著：才賀比孫一
                            </div>

                            {/* synopsis */}
                            <Grid item className={classes.synopsis}>
                                {novel.synopsis}
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </Link>
        </Grid>
    }


    return <Layout title="" width={width}>
        <Grid container direction="column" justify='center'>
            { items.map((item) => {
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
