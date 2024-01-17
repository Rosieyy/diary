import React from 'react';
import {
    Button, 
    styled, 
    Dialog, 
    DialogContent, 
    DialogActions, 
    TextField,
    Box,
  } from '@mui/material'


  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
      // margin: theme.spacing(10),
      minWidth: '400px',
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));
const AddDiaryDialog = ({addDiary, handleDate,newDate,handleWeather,handleVisibility,handleComment,newWeather,newVisibility,newComment}) => {
    const [open, setOpen] = React.useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <React.Fragment>
        <Button variant="outlined" onClick={handleClickOpen}>
          Add New Entry
        </Button>
        
          <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          
          <DialogContent dividers>
          <form onSubmit={addDiary}>
        <Box>
        <TextField id="outlined-basic" label="Date" variant="outlined" onChange={handleDate} value={newDate}/>
        <br />
        <TextField style={{ marginTop: '8px' }} id="outlined-basic" label="Weather" variant="outlined" onChange={handleWeather} value={newWeather}/>
        
        <br />
        
        <TextField style={{ marginTop: '8px' }} id="outlined-basic" label="Visibility" variant="outlined" onChange={handleVisibility} value={newVisibility}/>
        
        <br />
        
        <TextField  style={{ marginTop: '8px' }} id="outlined-basic" label="Comment" variant="outlined" onChange={handleComment} value={newComment}/>
        <br />
        <br />
        <Button variant="contained" type='submit'>Save</Button>
        </Box>
        </form>
          </DialogContent>
            
          <DialogActions>
            <Button autoFocus onClick={handleClose}>
              Back
            </Button>
          </DialogActions>
        </BootstrapDialog>
        
      </React.Fragment>
    );
  }

  export default AddDiaryDialog