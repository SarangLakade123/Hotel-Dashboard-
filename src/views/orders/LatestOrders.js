import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import FilterListIcon from '@material-ui/icons/FilterList';
import { Divider } from '@material-ui/core';
import TablePagination from '@material-ui/core/TablePagination';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import { Search } from 'react-feather';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset'
    }
  }
});
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: ' #3F51B5',
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: '#ffff'
    }
  }
}))(TableRow);

function createData(refId, name, tableId, transId, date, time, price) {
  return {
    refId,
    name,
    tableId,
    transId,
    date,
    time,
    price,
    history: [
      { dishName: 'Aloo Gobi', quantity: '1', price: 35 },
      { dishName: 'Matar Paneer', quantity: '2', price: 144 },
      { dishName: 'Samosas', quantity: '4', price: 144 }
    ]
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <StyledTableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.refId}
        </TableCell>
        <StyledTableCell>{row.name}</StyledTableCell>
        <StyledTableCell align="center">{row.tableId}</StyledTableCell>
        <StyledTableCell align="center">{row.transId}</StyledTableCell>
        <StyledTableCell align="center">{row.date}</StyledTableCell>
        <StyledTableCell align="center">{row.time}</StyledTableCell>
        <StyledTableCell align="center">{row.price}$</StyledTableCell>
      </StyledTableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Dishes</TableCell>
                    <TableCell align="center">Quantity</TableCell>
                    <TableCell align="center">Price</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map(historyRow => (
                    <TableRow key={historyRow.dishName}>
                      <TableCell component="th" scope="row" align="center">
                        {historyRow.dishName}
                      </TableCell>
                      <TableCell align="center">
                        {historyRow.quantity}
                      </TableCell>
                      <TableCell align="center">{historyRow.price}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    refId: PropTypes.number.isRequired,
    name: PropTypes.number.isRequired,
    tableId: PropTypes.number.isRequired,
    transId: PropTypes.number.isRequired,

    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired
      })
    ).isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired
};

const rows = [
  createData(1, 'Frozen yoghurt', 'ac432ac', 159, '3/7/2020', '24:43', 450),
  createData(
    2,
    'Ice cream sandwich',
    'ac432ac',
    237,
    '31/2/2020',
    '37:42',
    499
  ),
  createData(3, 'Eclair', 'ac432ac', 262, '4/4/2020', '24:43', 379),
  createData(4, 'Cupcake', 'ac432ac', 305, '5/8/2020', '67:32', 285),
  createData(5, 'Gingerbread', 'ac432ac', 356, '2/3/2020', '23:49', 195),
  createData(6, 'Ice cream sandwich', 'ac432ac', 237, '1/3/2020', '37:34', 499),
  createData(7, 'Eclair', 'ac432ac', 262, '1/6/2020', '24:12', 379),
  createData(8, 'Cupcake', 'ac432ac', 305, '32/2/2020', '67:01', 265),
  createData(9, 'Gingerbread', 'ac432ac', 356, '12/32/2020', '01:05', 195)
];

const useToolbarStyles = makeStyles(theme => ({
  root: {
    width: '100%'
  },
  toolbar: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1)
  },

  title: {
    flex: '1 1 100%'
  },
  container: {
    maxHeight: 500
  },
  margin: {
    margin: theme.spacing(1.5)
  }
}));

export default function CollapsibleTable() {
  const classes = useToolbarStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Toolbar className={classes.toolbar}>
          <Typography
            className={classes.title}
            variant="h4"
            id="tableTitle"
            component="div"
          >
            Orders
          </Typography>
          <FormControl fullWidth className={classes.margin} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-amount">Search</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              // value={values.amount}
              // onChange={handleChange('amount')}

              startAdornment={
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              }
              labelWidth={60}
            />
          </FormControl>

          <Tooltip title="Filter list">
            <IconButton aria-label="filter list" onClick={handleClickOpen}>
              <FilterListIcon />
            </IconButton>
          </Tooltip>
        </Toolbar>

        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">{'Sort By'}</DialogTitle>
          <DialogContent>
            <TextField
              id="date"
              label="From"
              type="date"
              defaultValue="2017-05-24"
              className={classes.textField}
              InputLabelProps={{
                shrink: true
              }}
            />
            <TextField
              id="date"
              label="To"
              type="date"
              defaultValue="2017-05-24"
              className={classes.textField}
              InputLabelProps={{
                shrink: true
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleClose} color="primary">
              Sort
            </Button>
          </DialogActions>
        </Dialog>

        <Divider />

        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <StyledTableCell />
              <StyledTableCell>Ref id</StyledTableCell>
              <StyledTableCell>Customer Name</StyledTableCell>
              <StyledTableCell align="center">Table Id</StyledTableCell>
              <StyledTableCell align="center">Transaction Id</StyledTableCell>
              <StyledTableCell align="center">Date</StyledTableCell>
              <StyledTableCell align="center">Time</StyledTableCell>
              <StyledTableCell align="center">Total Price</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <Row key={row.name} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        // count={rows.length}
        // rowsPerPage={rowsPerPage}
        // page={page}
        // onChangePage={handleChangePage}
        // onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
