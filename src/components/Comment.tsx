

import React, { useState } from 'react';
import { Grid, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Comment } from 'interfaces';
import { ThumbUp, ThumbDown, ThumbDownOutlined, ThumbUpOutlined } from '@material-ui/icons';
import Link from 'next/link';

type Props = {
    comment: Comment;
};

const CommentView: React.FC<Props> = ({ comment }: Props) => {

    const [bad, setBad] = useState(comment.bad);
    const [good, setGood] = useState(comment.good);

    const handleBad = () => {
        setGood(false);
        setBad(!bad);
    }
    const handleGood = () => {
        setBad(false);
        setGood(!good)
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

    return <Grid container item direction='row' className={classes.root}
        alignItems='center' justify='center'
        xs={12} sm={12} md={6} lg={6}>

        <Grid item xs={12} className={classes.title}>
            <Link href={`$comments/[id]`} as={`$comments/${comment.id}`}>
                <div>
                    {comment.comment}
                </div>
                <div>
                    著:作家名
                </div>
            </Link>
        </Grid>

        <Grid item xs={12} className={classes.menu}>
            <Grid container item direction="row" justify="flex-end">
                    <IconButton onClick={handleGood}>
                        {good ? <ThumbUp /> : <ThumbUpOutlined />}
                    </IconButton>
                    <IconButton onClick={handleBad}>
                        {bad ? <ThumbDown /> : <ThumbDownOutlined />}
                    </IconButton>
                </Grid>
        </Grid>
    </Grid >
}

export default CommentView;
