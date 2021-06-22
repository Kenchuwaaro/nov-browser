

import React, { useState } from 'react';
import { Grid, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Novel } from 'interfaces';
import Link from 'next/link';
import { Favorite, Save, FavoriteBorder } from '@material-ui/icons';

type NovelProps = {
    novel: Novel;
    synopsis?: boolean;
};

const NovelView: React.FC<NovelProps> = ({ novel, synopsis = true }: NovelProps) => {

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
                <React.Fragment>
                    {
                        synopsis ? <div>
                            {novel.synopsis}
                        </div> : null
                    }
                </React.Fragment>
            </Grid>

            <Grid container item direction="row" justify="flex-end">
                <IconButton>
                    <Save />
                </IconButton>
                <IconButton>
                    {novel.favorite ? <Favorite /> : <FavoriteBorder />}
                </IconButton>
            </Grid>

        </Grid>
    </Link>
}

export default NovelView;
