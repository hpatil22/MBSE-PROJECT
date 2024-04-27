import { Dialog, DialogContent, DialogTitle } from '@mui/material'
import React from 'react'

const Popup = (props) => {
    const { title , children ,openPopup, setOpenPopup} =props
    const handleClose = () => {
        setOpenPopup(false);
      };

  return (
    <Dialog open={openPopup} onClose={handleClose} maxWidth="md" fullWidth>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
}

export default Popup