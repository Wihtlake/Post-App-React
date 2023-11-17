import React from 'react';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import MyButton from '../button/MyButton';
import Box from '@mui/material/Box'
import Backdrop from '@mui/material/Backdrop';
import { Fade } from '@mui/material';
const MyModal = ({children , open, onClose, visible, setVisible}) => {
    const handleClose = () => setVisible(false);
    return (
            <Modal 
             open={visible}
             onClose={handleClose}
             sx={{width:'100%', }}
             closeAfterTransition
             slots={{ backdrop: Backdrop }}
             slotProps={{
               backdrop: {
                 timeout: 500,
               },
             }}
             >
                <Fade in={visible}>
                    <Box sx={{
                        width:'60%',
                        height:'100px',
                        position:'fixed',
                        top:'40%',
                        bottom:'60%',
                        left:'20%',
                        right:'20%',
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center',
                        }}>
                            {children}
                        </Box>
                    </Fade>
            </Modal>
    );
};

export default MyModal;