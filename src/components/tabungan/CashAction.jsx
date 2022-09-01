import React from 'react'
import { Box, Button, MenuItem, Modal, TextField, Typography } from '@mui/material'

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const CashAction = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const saveCash = () => {
    const date = document.querySelector(`[name="date"]`)
    const desc = document.querySelector(`[name="desc"]`)
    const nominal = document.querySelector(`[name="nominal"]`)
  }
  return (
    <>
    <Box onClick={handleOpen} sx={{ backgroundColor: "white", display: "inline-block", padding: "10px 0", width: "100%", borderRadius: ".5em", textAlign: "center", ...props.boxStyle }}>
      {props.icon}
      <p style={{ margin: 0 }}>{props.text}</p>
    </Box>
     <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {props.text}
          </Typography>
          <Box>
            <TextField sx={{width:"100%", mb:2, borderRadius:5}} name="date"  label="Date" variant="filled" type={"text"}  defaultValue={new Date} />
            <TextField sx={{width:"100%", mb:2, borderRadius:5}} name="nominal" id="filled-basic" label="Nominal" variant="filled" type={"number"} defaultValue={"40000"} />
            <TextField sx={{width:"100%", mb:2, borderRadius:5}} name="desc"  label="Deskripsi" variant="filled" type={"text"} multiline maxRows={4} minRows={3}/>
            <TextField
              id="outlined-select-currency"
              select
              label="Metode"
              value={props.text}
              helperText="Please select your currency"
            >
                <MenuItem  key={"tambah"} value={"tambah"}>
                  Tambah
                </MenuItem>
                <MenuItem key={"kurang"} value={"kurang"}>
                  Kurang
                </MenuItem>
            </TextField>
          </Box> 
          <Button onClick={saveCash} sx={{mt:2}}>Save</Button>
        </Box>
      </Modal>
    </>
  )
}

export default CashAction