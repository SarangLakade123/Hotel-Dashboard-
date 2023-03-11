import React, { useState } from 'react';
import clsx from 'clsx';
import moment from 'moment';
import { v4 as uuid } from 'uuid';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip,
  makeStyles,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Grid,
  Paper,
  ListItemIcon,
  ListItemText,
  Fab,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slide,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
// import Toolbar from './Toolbar';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
// import InvoiceTable from './InvoiceTable';

const data = [
  {
    id: uuid(),
    ref: 'CDD1049',
    amount: 30.5,
    customer: {
      name: 'Ekaterina Tankova'
    },
    createdAt: 1555016400000,
    status: 'pending',
    time: '12:31 AM',
    price: '2344 '
  },
  {
    id: uuid(),
    ref: 'CDD1048',
    amount: 25.1,
    customer: {
      name: 'Cao Yu'
    },
    createdAt: 1555016400000,
    status: 'delivered',
    time: '2:41 PM',
    price: '85865 '
  },
  {
    id: uuid(),
    ref: 'CDD1047',
    amount: 10.99,
    customer: {
      name: 'Alexa Richardson'
    },
    createdAt: 1554930000000,
    status: 'refunded',
    time: '1:31 CM',
    price: '852 '
  },
  {
    id: uuid(),
    ref: 'CDD1046',
    amount: 96.43,
    customer: {
      name: 'Anje Keizer'
    },
    createdAt: 1554757200000,
    status: 'pending',
    time: '43:23 PM',
    price: '3422 '
  },
  {
    id: uuid(),
    ref: 'CDD1045',
    amount: 32.54,
    customer: {
      name: 'Clarke Gillebert'
    },
    createdAt: 1554670800000,
    status: 'delivered',
    time: '65:23 AM',
    price: '2156 '
  },
  {
    id: uuid(),
    ref: 'CDD1044',
    amount: 16.76,
    customer: {
      name: 'Adam Denisov'
    },
    createdAt: 1554670800000,
    status: 'delivered',
    time: '01:21 AM',
    price: '212 '
  }
];

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5'
  }
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center'
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center'
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles(theme => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white
      }
    }
  }
}))(MenuItem);

const useStyles = makeStyles(theme => ({
  root: {},
  actions: {
    justifyContent: 'flex-end'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  cardRoot: {
    maxWidth: 150,
    marginTop: 10,
    elevation: 3
  },
  cardMedia: {
    height: 60
  },
  paper: {
    height: 500
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  },
  floatingIcon: {
    position: 'absolute',
    right: '35%',
    bottom: 70
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const LatestOrders = ({ className, ...rest }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const [orders] = useState(data);

  const [status, setStatus] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickClose = () => {
    setOpen(false);
  };

  const handleChange = event => {
    setStatus(event.target.value);
  };

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardHeader title="Latest Orders" />

      <Tooltip title="Open Dialog">
        <IconButton aria-label="delete" onClick={handleClickOpen}>
          <AddToPhotosIcon />
        </IconButton>
      </Tooltip>

      <Dialog
        fullWidth
        maxWidth={'lg'}
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClickClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {'Build a Invoice Here!'}
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={1}>
            <Grid item sm={12} md={8} lg={8}>
              <Paper elevation={3}>
                {/* <Toolbar /> */}
              </Paper>
              <Typography
                gutterBottom
                style={{ marginTop: 15 }}
                variant="h5"
                component="h2"
              >
                Main Course
              </Typography>
              <Grid container spacing={1}>
                <Grid item xs={6} md={2} sm={4}>
                  {' '}
                  <Paper className={classes.cardRoot} elevation={5}>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Veg Sandwich
                      </Typography>
                      <CardMedia
                        className={classes.cardMedia}
                        image="https://vaya.in/recipes/wp-content/uploads/2018/06/Club-sandwich.jpg"
                        title="Contemplative Reptile"
                      />
                    </CardContent>
                    <Divider />
                    <CardActions
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}
                    >
                      <IconButton
                        color="primary"
                        aria-label="upload picture"
                        component="span"
                        size="medium"
                      >
                        <RemoveIcon />
                      </IconButton>
                      <Typography>1</Typography>
                      <IconButton
                        color="primary"
                        aria-label="upload picture"
                        component="span"
                        size="large"
                      >
                        <AddIcon />
                      </IconButton>
                    </CardActions>
                  </Paper>
                </Grid>
                <Grid item xs={6} md={2} sm={4}>
                  <Paper className={classes.cardRoot} elevation={5}>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Veg Sandwich
                      </Typography>
                      <CardMedia
                        className={classes.cardMedia}
                        image="https://vaya.in/recipes/wp-content/uploads/2018/06/Club-sandwich.jpg"
                        title="Contemplative Reptile"
                      />
                    </CardContent>
                    <Divider />
                    <CardActions
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}
                    >
                      <IconButton
                        color="primary"
                        aria-label="upload picture"
                        component="span"
                        size="medium"
                      >
                        <RemoveIcon />
                      </IconButton>
                      <Typography>1</Typography>
                      <IconButton
                        color="primary"
                        aria-label="upload picture"
                        component="span"
                        size="large"
                      >
                        <AddIcon />
                      </IconButton>
                    </CardActions>
                  </Paper>
                </Grid>{' '}
                <Grid item xs={6} md={2} sm={4}>
                  <Paper className={classes.cardRoot} elevation={5}>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Veg Sandwich
                      </Typography>
                      <CardMedia
                        className={classes.cardMedia}
                        image="https://vaya.in/recipes/wp-content/uploads/2018/06/Club-sandwich.jpg"
                        title="Contemplative Reptile"
                      />
                    </CardContent>
                    <Divider />
                    <CardActions
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}
                    >
                      <IconButton
                        color="primary"
                        aria-label="upload picture"
                        component="span"
                        size="medium"
                      >
                        <RemoveIcon />
                      </IconButton>
                      <Typography>1</Typography>
                      <IconButton
                        color="primary"
                        aria-label="upload picture"
                        component="span"
                        size="large"
                      >
                        <AddIcon />
                      </IconButton>
                    </CardActions>
                  </Paper>
                </Grid>{' '}
                <Grid item xs={6} md={2} sm={4}>
                  <Paper className={classes.cardRoot} elevation={5}>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Veg Sandwich
                      </Typography>
                      <CardMedia
                        className={classes.cardMedia}
                        image="https://vaya.in/recipes/wp-content/uploads/2018/06/Club-sandwich.jpg"
                        title="Contemplative Reptile"
                      />
                    </CardContent>
                    <Divider />
                    <CardActions
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}
                    >
                      <IconButton
                        color="primary"
                        aria-label="upload picture"
                        component="span"
                        size="medium"
                      >
                        <RemoveIcon />
                      </IconButton>
                      <Typography>1</Typography>
                      <IconButton
                        color="primary"
                        aria-label="upload picture"
                        component="span"
                        size="large"
                      >
                        <AddIcon />
                      </IconButton>
                    </CardActions>
                  </Paper>
                </Grid>
                <Grid item xs={6} md={2} sm={4}>
                  <Paper className={classes.cardRoot} elevation={5}>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Veg Sandwich
                      </Typography>
                      <CardMedia
                        className={classes.cardMedia}
                        image="https://vaya.in/recipes/wp-content/uploads/2018/06/Club-sandwich.jpg"
                        title="Contemplative Reptile"
                      />
                    </CardContent>
                    <Divider />
                    <CardActions
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}
                    >
                      <IconButton
                        color="primary"
                        aria-label="upload picture"
                        component="span"
                        size="medium"
                      >
                        <RemoveIcon />
                      </IconButton>
                      <Typography>1</Typography>
                      <IconButton
                        color="primary"
                        aria-label="upload picture"
                        component="span"
                        size="large"
                      >
                        <AddIcon />
                      </IconButton>
                    </CardActions>
                  </Paper>
                </Grid>
                <Grid item xs={6} md={2} sm={4}>
                  <Paper className={classes.cardRoot} elevation={5}>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Veg Sandwich
                      </Typography>
                      <CardMedia
                        className={classes.cardMedia}
                        image="https://vaya.in/recipes/wp-content/uploads/2018/06/Club-sandwich.jpg"
                        title="Contemplative Reptile"
                      />
                    </CardContent>
                    <Divider />
                    <CardActions
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}
                    >
                      <IconButton
                        color="primary"
                        aria-label="upload picture"
                        component="span"
                        size="medium"
                      >
                        <RemoveIcon />
                      </IconButton>
                      <Typography>1</Typography>
                      <IconButton
                        color="primary"
                        aria-label="upload picture"
                        component="span"
                        size="large"
                      >
                        <AddIcon />
                      </IconButton>
                    </CardActions>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={2} sm={12}>
                  <Paper className={classes.cardRoot} elevation={5}>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Veg Sandwich
                      </Typography>
                      <CardMedia
                        className={classes.cardMedia}
                        image="https://vaya.in/recipes/wp-content/uploads/2018/06/Club-sandwich.jpg"
                        title="Contemplative Reptile"
                      />
                    </CardContent>
                    <Divider />
                    <CardActions
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}
                    >
                      <IconButton
                        color="primary"
                        aria-label="upload picture"
                        component="span"
                        size="medium"
                      >
                        <RemoveIcon />
                      </IconButton>
                      <Typography>1</Typography>
                      <IconButton
                        color="primary"
                        aria-label="upload picture"
                        component="span"
                        size="large"
                      >
                        <AddIcon />
                      </IconButton>
                    </CardActions>
                  </Paper>
                </Grid>
              </Grid>

              <Fab
                size="medium"
                variant="extended"
                color="primary"
                onClick={handleClick}
                className={classes.floatingIcon}
              >
                <MenuIcon
                  color="secoundary"
                  fontSize="medium"
                  className={classes.extendedIcon}
                />
                Menu
              </Fab>
              <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <StyledMenuItem>
                  <ListItemIcon>
                    <FavoriteBorderIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Most Liked" />
                </StyledMenuItem>
                <StyledMenuItem>
                  <ListItemIcon>
                    <FavoriteBorderIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Most Liked" />
                </StyledMenuItem>
                <StyledMenuItem>
                  <ListItemIcon>
                    <FavoriteBorderIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Most Liked" />
                </StyledMenuItem>
                <StyledMenuItem>
                  <ListItemIcon>
                    <FavoriteBorderIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Most Liked" />
                </StyledMenuItem>
                <StyledMenuItem>
                  <ListItemIcon>
                    <FavoriteBorderIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Most Liked" />
                </StyledMenuItem>
                <StyledMenuItem>
                  <ListItemIcon>
                    <ArrowUpwardIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Ascending" />
                </StyledMenuItem>
                <StyledMenuItem>
                  <ListItemIcon>
                    <ArrowDownwardIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Descending" />
                </StyledMenuItem>
              </StyledMenu>
            </Grid>
            <Grid item sm={1} md={4} lg={4}>
              <Paper className={classes.paper} elevation={5}>
                {/* <InvoiceTable /> */}
              </Paper>
            </Grid>
          </Grid>
        </DialogContent>
        <Divider />
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={handleClose} color="primary">
            Agree
          </Button>
        </DialogActions>
      </Dialog>

      <Divider />
      <PerfectScrollbar>
        <Box minWidth={800}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Order Ref</TableCell>
                <TableCell>Customer</TableCell>
                <TableCell sortDirection="desc">
                  <Tooltip enterDelay={300} title="Sort">
                    <TableSortLabel active direction="desc">
                      Date
                    </TableSortLabel>
                  </Tooltip>
                </TableCell>
                <TableCell>Time</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Price</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {orders.map(order => (
                <TableRow hover key={order.id}>
                  <TableCell>{order.ref}</TableCell>
                  <TableCell>{order.customer.name}</TableCell>
                  <TableCell>
                    {moment(order.createdAt).format('DD/MM/YYYY')}
                  </TableCell>
                  <TableCell>{order.time}</TableCell>
                  <TableCell>
                    <FormControl className={classes.formControl}>
                      <InputLabel id="demo-simple-select-label">
                        Status
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={status}
                        onChange={handleChange}
                      >
                        <MenuItem value={10}>Pending</MenuItem>
                        <MenuItem value={20}>In Process</MenuItem>
                        <MenuItem value={30}>Ready to Searve</MenuItem>
                      </Select>
                    </FormControl>
                  </TableCell>
                  <TableCell>{order.price} /-</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <Box display="flex" justifyContent="flex-end" p={2}>
        <Button
          color="primary"
          endIcon={<ArrowRightIcon />}
          size="small"
          variant="text"
        >
          View all
        </Button>
      </Box>
    </Card>
  );
};

LatestOrders.propTypes = {
  className: PropTypes.string
};

export default LatestOrders;
