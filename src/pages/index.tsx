
import Layout from 'components/Layout';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid } from '@material-ui/core';
import Menu from 'components/Menu';
import { signIn, signOut, useSession } from "next-auth/client";

const IndexPage: React.FC = () => {

  const [session, loading] = useSession();

  const useStyles = makeStyles({
    root: {
      textAlign: 'center'
    },
  });

  const classes = useStyles();

  return <Layout title='Nov 小説好きな方向けのサイト'>
    <div className={classes.root}>
      <Grid container direction="row" justify="center">

        {
          !session && <React.Fragment>
            <Button onClick={() => signIn()}>
              ログイン
            </Button>
            <Menu title='サインイン' guidLine='アカウントをお持ちの方は' href='/sign-in' />
            <Menu title='サインアップ' guidLine='アカウントをお持ちでない方は' href='/sign-up' />
          </React.Fragment>
        }
        {
          session && <React.Fragment>
            <Menu title='小説を読む' guidLine='面白い小説が待っている！' href='/sign-up' />
            <Menu title='小説を書く' guidLine='読者を楽しませる小説を書こう！' href='/sign-up' />
          </React.Fragment>
        }

      </Grid>
    </div>
  </Layout>
}

export default IndexPage;
