import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
  makeStyles,
  Button,
  TextField,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  IconButton,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EventSeatIcon from '@material-ui/icons/EventSeat';
import CenterFocusWeakIcon from '@material-ui/icons/CenterFocusWeak';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  statsItem: {
    alignItems: 'center',
    display: 'flex'
  },
  statsIcon: {
    marginRight: theme.spacing(1)
  },
 
}));

const Results = ({ className, product, ...rest }) => {
  const classes = useStyles();
const [openQrScaner, setOpenQrScaner] = React.useState(false);
  const [state, setState] = React.useState({
    chair: '',
    name: 'hai',
  });
 
  const handleQrOpen = () => {
    setOpenQrScaner(true);
  };
  const handleQrClose = () => {
    setOpenQrScaner(false);
  };
  return (
    <>
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    > 
    
      <CardContent style={{textAlign: 'center'}}>
        <Typography
          align="center"
          
          gutterBottom
          variant="h4"
        >Table1
          {/* {product.title} */}
        </Typography>
        <Box m={2}>
        <EventSeatIcon style={{marginLeft: 3, marginRight: 3}} />
        <EventSeatIcon style={{marginLeft: 3, marginRight: 3}} />
        <EventSeatIcon style={{marginLeft: 3, marginRight: 3}} />
        <EventSeatIcon style={{marginLeft: 3, marginRight: 3}} />
        </Box>
        <TextField
          id="filled-number"
          label=""
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          placeholder='No. of Chair'
        />
      </CardContent>
      <Box flexGrow={1} />
      <Divider />
      <Box p={2}>
        <Grid
          container
          justify="space-between"
          spacing={2}
        >
          <Grid
            className={classes.statsItem}
            item
          >
            <IconButton aria-label="delete">
              <DeleteIcon color="secondary" />
            </IconButton>
            
            
            <IconButton aria-label="delete" onClick={handleQrOpen}>
              <CenterFocusWeakIcon color="action" />
            </IconButton>
            <Dialog open={openQrScaner} onClose={handleQrClose} aria-labelledby="form-dialog-title">
              <DialogTitle id="form-dialog-title">QR for table</DialogTitle>
              <DialogContent>
                <img
                style={{height: 200, width: 200}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png" alt="QR Code" />
                <div style={{textAlign: 'center'}}>
                <h3>Table1 </h3>
                <h3>Id:<span>3745y8her78t</span></h3>
                </div>
              </DialogContent>
              <DialogActions>
               
                <Button onClick={handleQrClose} color="primary">
                  Cancel
                </Button>
                <Button onClick={handleQrClose} color="primary">
                  Download
                </Button>
              </DialogActions>
            </Dialog>
          </Grid>
          <Grid
            className={classes.statsItem}
            item
          >
            <Typography
              color="textSecondary"
              display="inline"
              variant="body2"
              >Id: 458964u964
              {' '}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Card>
    
  </>
  );
};

Results.propTypes = {
  className: PropTypes.string,
  customers: PropTypes.array.isRequired
};

export default Results;
