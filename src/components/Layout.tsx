import React, { ReactNode, useState, useEffect, useCallback } from 'react';
import { signIn, signOut, useSession } from "next-auth/client";
import Link from 'next/link';
import Head from 'next/head';
import { Grid, IconButton, Divider, Input, MenuItem } from '@material-ui/core';
import { Home, Notifications, Person, ExpandMore, Edit, Search as SearchIcon } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { useWindowDimensions } from './Hooks';

type Props = {
  children?: ReactNode;
  title?: string;
};

type NavProps = {
  href: string;
  as?: string;
  icon: ReactNode;
};

type SearchProps = {
  placeHolder: string;
  onChange(text: string): void;
}

const Layout: React.FC<Props> = ({ children, title = 'This is the default title' }: Props) => {

  const iconWidth = 60;
  const [session, loading] = useSession();

  const useStyles = makeStyles( theme => ({
    root: {
      width: '100%',
      height: '100%',
      backgroundColor: '#ffffff',
    },
    head: {
      width: '100%',
      backgroundColor: '#ccffcc',
      whiteSpace: 'nowrap',
      color: '#000000'
    },
    headContentRoot: {
      display: 'flex',
      flexWrap: 'nowrap'
    },
    body: {
      margin: '0px auto'
    },
    foot: {
      margin: '0 0 0 auto',
      width: '400px'
    },
    menu: {
      justifyContent: 'flex-end',
      margin: '0px',
      display: 'flex'
    },
    icon: {
      width: `${iconWidth}px`
    },
    [theme.breakpoints.down('xs')] :{
      body: {
        width: '100%'
      }
    },
    [theme.breakpoints.between('xs','sm')] :{
      body: {
        width: '100%'
      }
    },
    [theme.breakpoints.between('sm','md')] :{
      body: {
        width: '100%'
      }
    },
    [theme.breakpoints.between('md','lg')] :{
      body: {
        width: '100%'
      }
    },
    [theme.breakpoints.up('lg')] :{
      body: {
        width: '100%'
      }
    },
  }));

  const classes = useStyles();

  const Navi: React.FC<NavProps> = ({ icon, href , as }: NavProps) => {
    return <Link href={href} as={as}>
      <IconButton className={classes.icon}>
        {icon}
      </IconButton>
    </Link>
  }

  const Search: React.FC<SearchProps> = ({ placeHolder, onChange }: SearchProps) => {

    const useStyles = makeStyles((theme) => {

      const margin = theme.spacing(2);

      return {
        root: {
          backgroundColor: '#eeeeee',
          borderRadius: '10px',
          color: 'inherit',
          minWidth: `200px`,
          width: `calc(100vw - ${iconWidth * 6 + margin * 2}px)`,
          margin: margin
        },
        diviber: {
          width: '2px'
        },
        inputRoot: {
          color: 'inherit',
          width: `100%`
        },
        inputInput: {
          padding: theme.spacing(1),
        }
      }
    });

    const classes = useStyles();

    return <div className={classes.root}>
      <Input
        placeholder="Search…"
        disableUnderline
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        onChange={(event) => onChange(event.target.value)} />
    </div>
  }

  return <div className={classes.root}>

    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>

    <header className={classes.head}>

      <div className={classes.headContentRoot}>

        <Navi href='/' icon={<Home />} />

        <Search placeHolder="search..." onChange={(text: string) => { console.log(text) }} />


        <nav className={classes.menu}>
          <Navi href='/search/' icon={<SearchIcon />} />
          <Navi href='/' icon={<Notifications />} />
          <Navi href='/' icon={<Edit />} />
          <Navi href='/' icon={<Person />} />
          <Navi href='/' icon={<ExpandMore />} />
        </nav>

      </div>

    </header>

    <div className={classes.body}>
      {children}
    </div>
    
  </div>

}

export default Layout;
