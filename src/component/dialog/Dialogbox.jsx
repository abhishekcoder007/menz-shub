import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleOpen = () => {
    setOpen(false);
  
  };

  const handleClose = () => {
    // setOpen(false);
    window.location.reload(false);
  };

  return (
    <div>
      {/* <Button style={{color:"white",marginBottom:"0px"}} onClick={handleClickOpen}> */}
        <AccountCircleIcon  onClick={handleClickOpen} fontSize="medium"/>
      {/* </Button> */}
      <Dialog
        open={open}
        onClose={handleOpen}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Do you want to logout?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>logout</Button>
          <Button onClick={handleOpen} autoFocus>
            not logout
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
