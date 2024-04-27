import * as React from 'react';
import Button from '@mui/material/Button';
import DialogueboxModel from './routes/ModelEditor/DialogueboxModel';
import Popup from './Popup';
import { useState } from 'react';



function Dialouge(props) {
    const [openPopup, setOpenPopup] = useState(false);
    const handleClose = () => {
        setOpenPopup(false);
      };

  return (
    <>
    <Button variant="contained" onClick={()=> setOpenPopup( true )}>Moka Execution</Button>
    <Popup  openPopup = {openPopup}
        setOpenPopup ={setOpenPopup}>
       <DialogueboxModel setOpenPopup={setOpenPopup}></DialogueboxModel>
    </Popup>
    </>
  );
}

export default Dialouge
