import React from 'react';
import { Container, Grid, makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import Budget from './Budget';
import TasksProgress from './TasksProgress';
import Sales from './Sales';
import TotalCustomers from './TotalCustomers';
import TotalProfit from './TotalProfit';
import PaymentInfo from './paymentInfo';

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
        <Grid container spacing={3}>
          {/* <Grid container lg={8} sm={12} xl={3} xs={12} spacing={3}>
            <Grid item lg={6} sm={6} xl={3} xs={12}>
              <Budget />
            </Grid>
            <Grid item lg={6} sm={6} xl={3} xs={12}>
              <TotalCustomers />
            </Grid>
            <Grid item lg={6} sm={6} xl={3} xs={12}>
              <TasksProgress />
            </Grid>
            <Grid item lg={6} sm={6} xl={3} xs={12}>
              <TotalProfit />
            </Grid>
          </Grid> */}
          <Grid item lg={8} md={6} xl={3} xs={12}>
            <PaymentInfo />
          </Grid>
          <Grid item spacing={3} lg={4} md={6} xl={3} xs={12}>
            <Grid
              item
              lg={12}
              md={6}
              xl={3}
              xs={12}
              style={{ paddingBottom: 25 }}
            >
              <Budget />
            </Grid>
            <Grid item lg={12} sm={6} xl={3} xs={12}>
              <Sales />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default OrdersView;
