import React, { useState } from 'react';
import {
  Box,
  Container,
  makeStyles,
  Grid,
} from '@material-ui/core';
import Page from 'src/components/Page';
import Results from './Results';
import Toolbar from './Toolbar';
import data from './data';
import { result } from 'lodash';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const CustomerListView = () => {
  const classes = useStyles();
  const [customers] = useState(data);

  return (
    <Page
      className={classes.root}
      title="Customers"
    >
      <Container maxWidth={false}>
        <Toolbar />
        <Box mt={3}>
        <Grid
                item
                key={result.id}
                lg={3}
                md={4}
                xs={12}
              >
                <Results customers={customers} />
              </Grid>
         
        </Box>
      </Container>
    </Page>
  );
};

export default CustomerListView;
