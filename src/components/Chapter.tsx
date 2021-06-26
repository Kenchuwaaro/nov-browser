

import React, { useState } from 'react';
import { Grid, IconButton, Collapse } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Chapter } from 'interfaces';

import Link from 'next/link';

type Props = {
    chapter: Chapter;
};

const ChapterView: React.FC<Props> = ({ chapter }: Props) => {

    const useStyles = makeStyles(theme => ({

    }));

    const [collapse, setCollapse] = useState(false);

    const classes = useStyles();

    return <Grid container item direction='row'
        alignItems='center' justify='center'
        xs={12} sm={12} md={6} lg={6}>
        <Grid item container direction="column">
            <div>
                画像
            </div>
            <Grid item container direction="column">
                <div>
                    {chapter.number}
                </div>
                <div>
                    {chapter.title}
                </div>
            </Grid>

        </Grid>
        <Grid item container direction="column">
            <Collapse in = {collapse}>
                <div>
                    { chapter.synopsis }
                </div>
            </Collapse>
        </Grid>
    </Grid >
}

export default ChapterView;
