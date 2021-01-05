import React from 'react';
import { Container, Grid, makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import Budget from '../payment/Budget';
import LatestOrders from './LatestOrders';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const OrdersView = () => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Dashboard">
      <Container maxWidth={false}>
        <Grid item lg={12} md={12} xl={12} xs={12}>
          <LatestOrders />
        </Grid>
      </Container>
    </Page>
  );
};

export default OrdersView;
