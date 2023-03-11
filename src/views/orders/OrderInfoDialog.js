import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import StepContent from '@material-ui/core/StepContent';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { Divider, Grid, Typography } from '@material-ui/core';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const TAX_RATE = 0.07;

const useStyles = makeStyles({
  table: {
    minWidth: 700
  }
});

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
  return qty * unit;
}

function createRow(desc, qty, unit) {
  const price = priceRow(qty, unit);
  return { desc, qty, unit, price };
}

function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const rows = [
  createRow('Paperclips (Box)', 100, 1.15),
  createRow('Paper (Case)', 10, 45.99),
  createRow('Waste Basket', 2, 17.99)
];

const invoiceSubtotal = subtotal(rows);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;
function getSteps() {
  return [
    { status: 'Placed', timestamp: '12:15 AM' },
    { status: 'Accepted', timestamp: '12:15 AM' },
    { status: 'In Kitchen', timestamp: '12:15 AM' },
    { status: 'In Kitchen', timestamp: '12:15 AM' },
    { status: 'Ready To Serve', timestamp: '12:15 AM' },
    { status: 'Served', timestamp: '12:15 AM' }
  ];
}
export default function OrderInfoDialog({ cancelClicked, open }) {
  const classes = useStyles();
  const steps = getSteps();
  return (
    <div>
      <Dialog
        fullWidth
        maxWidth="md"
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={cancelClicked}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {'Detail Information'}
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Paper elevation={3}>
                <Stepper alternativeLabel activeStep={6}>
                  {steps.map(({ status, timestamp }) => (
                    <Step key={status}>
                      <StepLabel>
                        {status} <Typography>{timestamp}</Typography>
                      </StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </Paper>
            </Grid>

            <Grid item xs={6}>
              <Paper elevation={2} style={{ padding: 10 }}>
                <Typography
                  style={{ textDecoration: 'bold', display: 'inline' }}
                >
                  Mobile Number:
                </Typography>
                <Typography style={{ display: 'inline' }}>
                  8788864281
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={6}>
              <Paper elevation={2} style={{ padding: 10 }}>
                <Typography
                  style={{
                    textDecoration: 'bold',
                    display: 'inline'
                  }}
                >
                  Email Id:{' '}
                </Typography>
                <Typography style={{ display: 'inline' }}>
                  sarangLakade.frd@gmail.com
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12}>
              <TableContainer component={Paper} elevation={3}>
                <Table className={classes.table} aria-label="spanning table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="center" colSpan={4}>
                        Details Of Dishes
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Dishes</TableCell>
                      <TableCell align="right">quantity</TableCell>
                      <TableCell align="right">Price</TableCell>
                      <TableCell align="right">Sum</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map(row => (
                      <TableRow key={row.desc}>
                        <TableCell>{row.desc}</TableCell>
                        <TableCell align="right">{row.qty}</TableCell>
                        <TableCell align="right">{row.unit}</TableCell>
                        <TableCell align="right">
                          {ccyFormat(row.price)}
                        </TableCell>
                      </TableRow>
                    ))}

                    <TableRow>
                      <TableCell rowSpan={3} />

                      <TableCell colSpan={2}>Subtotal</TableCell>
                      <TableCell align="right">
                        {ccyFormat(invoiceSubtotal)}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Tax</TableCell>
                      <TableCell align="right">{`${(TAX_RATE * 100).toFixed(
                        0
                      )} %`}</TableCell>
                      <TableCell align="right">
                        {ccyFormat(invoiceTaxes)}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell colSpan={2}>Total</TableCell>
                      <TableCell align="right">
                        {ccyFormat(invoiceTotal)}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        </DialogContent>
        <Divider />
        <DialogActions>
          <Button onClick={cancelClicked} color="primary">
            Print
          </Button>
          <Button onClick={cancelClicked} color="primary">
            Done
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
