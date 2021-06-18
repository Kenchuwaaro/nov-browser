import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { Grid, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { clear } from 'console';

type Props = {
  children?: ReactNode;
  title?: string;
  width?: number;
  nav?: ReactNode;
};

type NavProps = {
  href: string;
  children: ReactNode;
};

type TitleProps = {
  title: string;
}

const Layout: React.FC<Props> = ({ children, nav = null, title = 'This is the default title', width = '800px' }: Props) => {

  const useStyles = makeStyles({
    root: {
      margin: 'auto',
      width: '100%',
      height: '100%',
      backgroundColor: '#ffffff'
    },
    head: {
      backgroundColor: '#ccffcc',
      color: '#000000'
    },
    nav: {
      width: '150px',
      margin: '10px',
      padding: '0px 20px',
      border: 'solid 1px #cccccc',
      borderRadius: '5px',
      textAlign: 'center'
    },
    title: {
      textAlign: 'center',
      fontSize: '3em'
    },
    sub: {
      width: `${400}px`,
      float: 'left'
    },
    main: {
      width: `${width-400}px`,
    },
    initFloat: {
      float: 'none'
    },
    body: {
      width: width,
      margin: '0px auto'
    },
    foot: {
      margin: '0 0 0 auto',
      width: '400px'
    }
  });

  const classes = useStyles();

  const Navi: React.FC<NavProps> = ({ children, href }: NavProps) => {
    return <div className={classes.nav}>
      <Link href={href}>
        <a>
          <h3>
            {children}
          </h3>
        </a>
      </Link>
    </div>
  }

  const Title: React.FC<TitleProps> = ({ title }: TitleProps) => {
    return <h1 className={classes.title}>
      {title}
    </h1>
  }

  return <div className={classes.root}>

    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <header className={classes.head}>

      <nav>
        <Grid container justify="space-between">
          <Grid container item direction="row" justify="flex-end">
            <Navi href='/'>
              Home
            </Navi>
            <Navi href='/about'>
              About
            </Navi>
            <Navi href='/users'>
              Users List
            </Navi>
            <Navi href='/api/users'>
              Users API
            </Navi>
          </Grid>
        </Grid>

      </nav>

    </header>


    <Title title={title} />

    <div className={classes.body}>
      <div className={classes.sub}>
        {nav}
      </div>
      <div className={classes.main}>
        {children}
      </div>
    </div>

    {/* フロート初期化 */}
    <div className={classes.initFloat}></div>

    <Divider />

    <footer className={classes.foot}>
      <span>I'm here to stay (Footer)</span>
    </footer>

  </div>

}

export default Layout;
