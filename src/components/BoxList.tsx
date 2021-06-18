
import React, { ReactNode } from 'react';

import Link from 'next/link';
import { Grid, IconButton, Divider, GridSize } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';

import { makeStyles } from '@material-ui/core/styles';


type Props = {
    children: ReactNode;
    direction: Direction;
    xs: string;
    sm: string;
    md: string;
    lg: string;
    height: string;
};

type ItemProps = {
    children: ReactNode;
    id: number;
    href: string;
    as: string;
    boxSize: BoxSize;
};


export type Direction = "row" | "column";
export type BoxSize = 'small' | 'medium' | 'large';

const BoxListItem: React.FC<ItemProps> = ({
    id,
    href,
    as,
    boxSize,
    children }: ItemProps) => {

    const useStyles = makeStyles({
        root: {
            border: 'solid 1px #cccccc',
            backgroundColor: '#ffffff',
            borderRadius: '10px',
            color: '#000000',
            // backgroundImage: `url(${image})`,
            filter: 'box-shadow(2px 2px 2px black)',
            '&:hover': {
                filter: 'box-shadow(4px 4px 4px black)'
            },
            margin: '10px',
        }
    });

    const classes = useStyles();

    switch (boxSize) {

        case 'small':

            return <Link href={href} as={as}>
                <Grid key={id} item container direction="column" className={classes.root}
                    xs={12} sm={4} md={4} lg={3}>
                    <Grid item container xs={12}>
                        {children}
                    </Grid>
                </Grid>
            </Link>

        case 'medium':

            return <Link href={href} as={as}>
                <Grid key={id} item container direction="column" className={classes.root}
                    xs={12} sm={12} md={6} lg={6}>
                    <Grid item container xs={12}>
                        {children}
                    </Grid>
                </Grid>
            </Link>


        case 'large':

            return <Link href={href} as={as}>
                <Grid key={id} item container direction="column" className={classes.root}
                    xs={12} sm={12} md={12} lg={12}>
                    <Grid item container xs={12}>
                        {children}
                    </Grid>
                </Grid>
            </Link>

    }

    return null;
}


const BoxList: React.FC<Props> = ({ children, xs, sm, md, lg, height }: Props) => {

    const useStyles = makeStyles(theme => ({
        root: {
            width: '100%',
            height: height,
            backgroundColor: '#ffffff',
            borderRadius: '10px',
            [theme.breakpoints.only('xs')]: {
                width: xs
            },
            [theme.breakpoints.only('sm')]: {
                width: sm
            },
            [theme.breakpoints.only('md')]: {
                width: md
            },
            [theme.breakpoints.only('lg')]: {
                width: lg
            },
        }
    }));

    const classes = useStyles();

    return <Grid container className={classes.root}>
        {children}
    </Grid>
}


export { BoxList, BoxListItem }