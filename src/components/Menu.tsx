
import Link from 'next/link';
import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

type Props = {
    title: string;
    guidLine: string;
    href: string;
}

const Menu: React.FC<Props> = ({ title, guidLine, href }: Props) => {

    const useStyles = makeStyles({
        root: {
            border: 'solid 1px #008000',
            margin: '10px',
            borderRadius: '10px',
            width: '300px',
            boxShadow: '0 2px 6px #7e8183e6',
            backgroundColor: '#008000',
            '&:hover': {
                border: 'solid 2px #0000ff',
                color: '#0000ee',
                boxShadow: '0 4px 6px #7e8183e6'
            }
        },
        content: {
            margin: '20px auto'
        },
        title: {
            fontSize: '2em',
        },
        guidLine: {
            fontSize: '1em',
        }
    });

    const classes = useStyles();

    return <div className={classes.root}>
            <Link href={href}>
                <div className={classes.content}>
                    <h2 className={classes.title}>
                        {title}
                    </h2>
                    <div className={classes.guidLine}>
                        {guidLine}
                    </div>
                </div>
            </Link>
    </div>
}


export default Menu;