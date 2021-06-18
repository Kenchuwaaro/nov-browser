import Link from 'next/link';
import Layout from 'components/Layout';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

type MenuProps = {
  title: string;
  guidLine: string;
  href: string;
}

const Menu: React.FC<MenuProps> = ({ title, guidLine, href }: MenuProps) => {

  const useStyles = makeStyles({
    root: {
      border: 'solid 1px #cccccc',
      margin: '10px',
      borderRadius: '5px',
      width: '300px',
      '&:hover': {
        border: 'solid 2px #0000ff',
        color: '#0000ee',
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

const IndexPage: React.FC = () => {
  const useStyles = makeStyles({
    root: {
      textAlign: 'center'
    },
  });

  const classes = useStyles();

  return <Layout title='Nov 小説好きな方向けのサイト'>
    <div className={classes.root}>
      <Grid container direction="row" justify="center">
        <Menu title='サインイン' guidLine='アカウントをお持ちの方は' href='/sign-in' />
        <Menu title='サインアップ' guidLine='アカウントをお持ちでない方は' href='/sign-up' />
        <Menu title='小説を読む' guidLine='面白い小説が待っている！' href='/sign-up' />
        <Menu title='小説を書く' guidLine='読者を楽しませる小説を書こう！' href='/sign-up' />
      </Grid>
    </div>
  </Layout>
}

export default IndexPage;
