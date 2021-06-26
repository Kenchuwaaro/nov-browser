

import React, { useState } from 'react';
import { Grid, IconButton, Collapse } from '@material-ui/core';
import { Novel } from 'interfaces';
import { Favorite, Save, FavoriteBorder } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import { ExpandMore } from '@material-ui/icons';


type Props = {
    novel: Novel;
};

const NovelView: React.FC<Props> = ({ novel }: Props) => {

    const [favorite, setFavorite] = useState(novel.favorite);

    const handleFavarite = () => {
        setFavorite(!favorite);
    }

    const useStyles = makeStyles(theme => ({
        root: {
            backgroundColor: '#eeeeee',
            border: 'solid 1px #cccccc',
            margin: '10px',
            borderRadius: '5px',
            filter: 'drop-shadow(2px 2px 2px black)',
            '&:hover': {
                filter: 'drop-shadow(4px 4px 4px black)',
            }
        },
        main: {
            backgroundColor: '#ee0000',
            overflow: 'hidden',
        },
        menu: {
            backgroundColor: '#00ee00'
        },
        title: {
            backgroundColor: '#0000ee'
        },
    }));

    const classes = useStyles();

    const [collapse, setCollapse] = useState(false);

    return <Grid container item direction='row' className={classes.root}
        alignItems='center' justify='center'
        xs={12} sm={12} md={6} lg={6}>

        <Grid item xs={12} className={classes.title}>
            <Link href={`novels/[id]`} as={`novels/${novel.id}`}>

                <React.Fragment>

                    <h2>
                        {novel.title}
                    </h2>
                    <div>
                        著:作家名
                    </div>
                </React.Fragment>

            </Link>
        </Grid>

        <Grid item container xs={12} className={classes.title}>
            <Grid item xs={11}>
                <div>
                    あらすじ
                </div>
            </Grid>
            <Grid item xs={1}>
                <IconButton onClick={() => { setCollapse(!collapse) }}>
                    <ExpandMore />
                </IconButton>
            </Grid>
        </Grid>

        <Grid item xs={12} className={classes.main}>
            <Collapse in={collapse}>
                <Link href={`novels/[id]`} as={`novels/${novel.id}`}>
                    <div>
                        {novel.synopsis}
                    </div>
                </Link>
            </Collapse>
        </Grid>

        <Grid item xs={12} className={classes.menu}>
            <Grid container item direction="row" justify="flex-end">
                <IconButton >
                    <Save />
                </IconButton>
                <IconButton onClick={handleFavarite}>
                    {favorite ? <Favorite /> : <FavoriteBorder />}
                </IconButton>
            </Grid>
        </Grid>
    </Grid >
}

export default NovelView;
