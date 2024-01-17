import React from 'react';
import {
    Button, 
    styled, 
    Dialog, 
    DialogContent, 
    DialogActions, 
    Typography, 
} from '@mui/material'

import {DiaryEntry} from '../types'

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
  //{ diaries }: { diaries: DiaryEntry[] }
  const CustomizedDialogs = ({ diaries }: { diaries: DiaryEntry[] }) => {
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
          Diary Entries
        </Button>
        
          <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          
          <DialogContent dividers>
            {diaries.map((diary)=>{return(
              <div key={diary.id}>
              <Typography  variant="h5" gutterBottom>
              {diary.date}
              </Typography>
              <Typography gutterBottom>
              {`weather: ${diary.weather}`}
              </Typography>
              <Typography gutterBottom>
              {`visibility: ${diary.visibility}`}
              </Typography></div>
              
            )})}
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

export default CustomizedDialogs
  