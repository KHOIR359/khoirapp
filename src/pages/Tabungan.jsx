import AddIcon from '@mui/icons-material/Add';
import AddchartIcon from '@mui/icons-material/Addchart';
import RemoveIcon from '@mui/icons-material/Remove';
import Grid from '@mui/material/Grid';
import React from 'react';
import '../assets/css/components/Tabungan.css';
import BoxTabungan from '../components/tabungan/BoxTabungan';
import CashAction from '../components/tabungan/CashAction';
import IncomingAction from '../components/tabungan/IncomingAction';
import MergeAction from '../components/tabungan/MergeAction';
const iconStyle = { margin: 0, fontSize: "2em" };

const Tabungan = () => {

  return (
    <div id="tabunganContainer">
      <BoxTabungan />
      <Grid container spacing={2} sx={{ marginTop: 1 }} justifyContent="space-between">
        <Grid item xs={2}>
          <CashAction text="Tambah" icon={<AddIcon sx={iconStyle} />} />
        </Grid>
        <Grid item xs={2}>
          <CashAction text="Kurang" icon={<RemoveIcon sx={iconStyle} />} />
        </Grid>
        <Grid item xs={2}>
          <MergeAction
            text="Totalkan"
            icon={<AddchartIcon sx={iconStyle} />}
            boxStyle={{ color: "white", background: "#008A62" }} />
        </Grid>
        <Grid item xs={2}>
          <IncomingAction text="Tambah" icon={<AddIcon sx={iconStyle} />} />
        </Grid>
        <Grid item xs={2}>
          <IncomingAction text="Kurang" icon={<RemoveIcon sx={iconStyle} />} />
        </Grid>
      </Grid>


    </div>
  )
}

export default Tabungan